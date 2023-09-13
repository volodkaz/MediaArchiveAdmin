package org.vladimir.homearchiveauth.domain.clienttab;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;
import org.vladimir.homearchiveauth.model.object.ClientTab;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.repository.ClientTabRepository;

import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
public class ClientTabServiceImpl implements ClientTabService {

    private final ClientTabRepository repository;
    private final ClientTabMapper mapper;

    @Override
    public List<ClientTab> getTabs() {
        final Iterable<ClientTabEntity> tabEntities = repository.findAll();
        return mapper.entitiesToObjects(tabEntities);
    }
    @Override
    public ClientTab getTab(String name) {

        return mapper.entityToObject(
                repository.getClientTabEntityByName(name)
                        .orElseThrow(() -> new RuntimeException("Не найден таб по имени " + name)));
    }

    @Override
    public List<ClientTab> createTab(ClientTabRequest request) {
        return null;
    }

    @Override
    public List<ClientTab> deleteTab(Long tabId) {
        return null;
    }


}
