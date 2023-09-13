package org.vladimir.homearchiveauth.domain.clientinfo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.model.entity.ClientEntity;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;
import org.vladimir.homearchiveauth.model.entity.ClientInfoPropertyEntity;
import org.vladimir.homearchiveauth.model.entity.ClientInfoTabEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabEntity;
import org.vladimir.homearchiveauth.model.object.ClientInfoTab;
import org.vladimir.homearchiveauth.model.request.ClientInfoContainerRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.repository.ClientInfoPropertyRepository;
import org.vladimir.homearchiveauth.repository.ClientInfoRepository;
import org.vladimir.homearchiveauth.repository.ClientInfoTabRepository;
import org.vladimir.homearchiveauth.repository.ClientTabRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional(isolation = Isolation.READ_COMMITTED)
public class ClientInfoServiceImpl implements ClientInfoService {
    private final ClientInfoTabRepository repository;
    private final ClientTabRepository clientTabRepository;
    private final ClientInfoPropertyRepository propertyRepository;
    private final ClientInfoRepository clientInfoRepository;
    private final ClientInfoMapper mapper;

    @Override
    public List<ClientInfoTab> getClientInfo(Long userId) {
        final List<ClientInfoTabEntity> allInfosForClient = repository.getAllActiveTabsByClient(userId);
        return mapper.tabEntitiesToTabObjects(allInfosForClient);
    }

    @Override
    public List<ClientInfoTab> createUserInfo(ClientTabRequest request) {
        final ClientTabEntity clientTab = clientTabRepository.getClientTabEntityById(request.tabId())
                .orElseThrow(() -> new RuntimeException("Не найден таб по tabId " + request.tabId()));
        final ClientEntity clientEntity = new ClientEntity(request.userId());
        ClientInfoTabEntity entity = mapper.tabToInfoTab(clientTab, request, clientEntity);
        entity.setCreateDate(new Date());
        final ClientInfoTabEntity tabEntity = repository.save(entity);
        return getClientInfo(request.userId());
    }

//    @Override
//    public List<ClientInfoTab> createUserInfo(ClientTabRequest request) {
//        final ClientTabEntity clientTab = clientTabRepository.getClientTabEntityById(request.tabId())
//                .orElseThrow(() -> new RuntimeException("Не найден таб по tabId " + request.tabId()));
//        final ClientEntity clientEntity = new ClientEntity(request.userId());
//        ClientInfoTabEntity entity = mapper.tabToInfoTab(clientTab, request, clientEntity);
//        entity.setCreateDate(new Date());
//        final ClientInfoTabEntity tabEntity = repository.save(entity);
//        final List<ClientInfoPropertyEntity> clientInfoPropertyEntities = mapper
//                .propertiesToInfoProperties(new ArrayList<>(clientTab.getProperties()));
//        entity.setCreateDate(new Date());
//
//        for (ClientInfoPropertyEntity clientInfoPropertyEntity : clientInfoPropertyEntities) {
//            clientInfoPropertyEntity.setInfoTabId(tabEntity.getId());
//            final ClientInfoPropertyEntity infoPropertyEntity = propertyRepository.save(clientInfoPropertyEntity);
//            final ClientInfoEntity clientInfoEntity = new ClientInfoEntity(infoPropertyEntity.getId());
//            clientInfoRepository.save(clientInfoEntity);
//        }
//        return getClientInfo(request.userId());
//    }

    @Override
    public List<ClientInfoTab> updateUserInfo(ClientInfoContainerRequest request) {
        request.infos().parallelStream().forEachOrdered(info -> {
            clientInfoRepository.findActiveInfo(info.id()).ifPresent(entity -> {
                entity.setModifyDate(new Date());
                entity.setData(info.data());
                clientInfoRepository.save(entity);
            });
        });
        return getClientInfo(request.userId());
    }

    @Override
    public List<ClientInfoTab> deleteUserInfo(Long userId, Long infoTabId) {
        repository.deleteActiveTab(infoTabId);
        return getClientInfo(userId);
    }
}
