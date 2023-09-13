package org.vladimir.homearchiveauth.domain.client;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.domain.role.RoleService;
import org.vladimir.homearchiveauth.exception.CreateUserException;
import org.vladimir.homearchiveauth.exception.LoginException;
import org.vladimir.homearchiveauth.exception.RegistrationException;
import org.vladimir.homearchiveauth.model.entity.ClientEntity;
import org.vladimir.homearchiveauth.model.object.Client;
import org.vladimir.homearchiveauth.model.object.Role;
import org.vladimir.homearchiveauth.model.request.ClientRequest;
import org.vladimir.homearchiveauth.model.response.ClientResponse;
import org.vladimir.homearchiveauth.repository.ClientRepository;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
public class ClientServiceImpl implements ClientService {
    private final ClientRepository repository;
    private final ClientMapper mapper;
    private final RoleService roleService;

    @Override
    public void register(ClientRequest clientRequest) {
        if(clientRequest.login().isEmpty() || clientRequest.secret().isEmpty()){
            throw new RegistrationException("Не указаны обязательные атрибуты");
        }
        if(repository.findActiveClientByName(clientRequest.login()).isPresent()){
            throw new RegistrationException("Клиент с ником: " + clientRequest.login() + " уже зарегистрирован");
        }
        saveClient(clientRequest);
    }

    private ClientEntity saveClient(ClientRequest clientRequest) {
        Set<Role> roles = roleService.getAllRolesByIds(clientRequest.roles());
        if(roles == null || roles.isEmpty()){
            roles = Set.of(roleService.getDefaultRole());
        }

        final Client client = mapper.requestToObject(clientRequest, roles);

        String hash = BCrypt.hashpw(client.secret(), BCrypt.gensalt());
        ClientEntity entity = mapper.objectToEntity(client, roles);
        entity.setPassword(hash);
        entity.setCreateDate(new Date());

        repository.save(entity);
        return entity;
    }

    @Override
    public Client checkCredentials(ClientRequest clientRequest) {
        final ClientEntity entity = repository.findActiveClientByName(clientRequest.login())
                .orElseThrow(() -> new LoginException("Пользователь с ником: " + clientRequest.login() + " не существует"));
        if(!BCrypt.checkpw(clientRequest.secret(), entity.getPassword())){
            throw new LoginException("Пароль не верный");
        }
        return mapper.entityToObject(entity);
    }

    @Override
    public void addRoleToClient(ClientRequest clientRequest) {
        assert(clientRequest != null && clientRequest.login() != null);
        final ClientEntity entity = repository.findActiveClientByName(clientRequest.login())
                .orElseThrow(() -> new RuntimeException(String.format("Клиент %s не найден", clientRequest.login())));
        entity.setRoles(roleService.getAllRoleEntitiesByIds(clientRequest.roles()));
        repository.save(entity);
    }

    @Override
    public Client getClient(ClientRequest clientRequest) {
        final ClientEntity entity = repository.findActiveClientByName(clientRequest.login())
                .orElseThrow(() -> new LoginException("Client with tabId: " + clientRequest.login() + " not found"));
        return mapper.entityToObject(entity, clientRequest.secret());
    }

    @Override
    public Client getClientByName(String name) {
        final ClientEntity entity = repository.findActiveClientByName(name)
                .orElseThrow(() -> new LoginException("Client with tabId: " + name + " not found"));
        return mapper.entityToObject(entity);
    }

    @Override
    public List<ClientResponse> getAllClients(int limit) {

        final Iterable<ClientEntity> clientEntities = repository.findAllActiveClients();
        return mapper.entitiesToResponses(clientEntities);
    }

    @Override
    public void deleteUser(Long userId) {
        repository.deleteActiveClient(userId);
    }

    @Override
    public Client createUser(ClientRequest clientRequest) {
        if(clientRequest.login().isEmpty() || clientRequest.secret().isEmpty()){
            throw new CreateUserException("Не указаны обязательные атрибуты");
        }
        if(repository.findActiveClientByName(clientRequest.login()).isPresent()){
            throw new CreateUserException("Клиент с ником: " + clientRequest.login() + " уже зарегистрирован");
        }
        ClientEntity entity = saveClient(clientRequest);

        return mapper.entityToObject(entity);
    }
}
