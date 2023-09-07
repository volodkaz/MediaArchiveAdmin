package org.vladimir.homearchiveauth.domain.clienttab;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.vladimir.homearchiveauth.model.entity.ClientTabTypeEntity;
import org.vladimir.homearchiveauth.model.object.ClientTabType;
import org.vladimir.homearchiveauth.model.request.ClientTabTypeRequest;
import org.vladimir.homearchiveauth.repository.ClientTabTypeRepository;

import java.util.ArrayList;
import java.util.List;
@Service
@RequiredArgsConstructor
public class ClientTabTypeServiceImpl implements ClientTabTypeService {
    private final ClientTabTypeRepository repository;
    private final ClientTabTypeMapper mapper;
    @Override
    public List<ClientTabType> getTabTypes() {
        final Iterable<ClientTabTypeEntity> entities = repository.findAll();
        final ArrayList<ClientTabType> clientTabTypes = new ArrayList<>();
        entities.forEach(entity -> clientTabTypes.add(mapper.entityToObject(entity)));
        return clientTabTypes;
    }

    @Override
    public List<ClientTabType> createTabType(ClientTabTypeRequest request) {
        return getTabTypes();
    }

    @Override
    public List<ClientTabType> deleteTabType(Long tabId) {
        return getTabTypes();
    }
}
