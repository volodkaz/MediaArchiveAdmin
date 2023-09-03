package org.vladimir.homearchiveauth.domain.clientinfo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;
import org.vladimir.homearchiveauth.model.object.ClientInfoWithTabs;
import org.vladimir.homearchiveauth.model.request.ClientInfoRequest;
import org.vladimir.homearchiveauth.repository.ClientInfoRepository;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class ClientInfoServiceImpl implements ClientInfoService {
    private final ClientInfoRepository repository;
    private final ClientInfoMapper mapper;
    @Override
    public ClientInfoWithTabs getClientInfo(Long userId) {
        final List<ClientInfoEntity> allInfosForClient = repository.getAllInfosForClient(userId);
        return mapper.entityToObject(allInfosForClient);
    }

    @Override
    public ClientInfoWithTabs createUserInfo(List<ClientInfoRequest> clientRequest) {
        return null;
    }

    @Override
    public ClientInfoWithTabs updateUserInfo(List<ClientInfoRequest> clientRequest) {
        return null;
    }

    @Override
    public void deleteUserInfo(Long userName) {

    }
}
