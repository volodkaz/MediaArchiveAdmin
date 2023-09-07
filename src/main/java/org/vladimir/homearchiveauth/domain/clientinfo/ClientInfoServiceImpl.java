package org.vladimir.homearchiveauth.domain.clientinfo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.vladimir.homearchiveauth.domain.clienttab.ClientTabMapper;
import org.vladimir.homearchiveauth.model.entity.ClientInfoEntity;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropSettingEntity;
import org.vladimir.homearchiveauth.model.object.ClientInfoWithTabs;
import org.vladimir.homearchiveauth.model.request.ClientInfoRequest;
import org.vladimir.homearchiveauth.model.request.ClientTabRequest;
import org.vladimir.homearchiveauth.repository.ClientInfoRepository;
import org.vladimir.homearchiveauth.repository.ClientTabPropertySettingsRepository;

import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class ClientInfoServiceImpl implements ClientInfoService {
    private final ClientInfoRepository repository;
    private final ClientTabPropertySettingsRepository settingsRepository;
    private final ClientInfoMapper mapper;
    private final ClientTabMapper tabMapper;
    @Override
    public ClientInfoWithTabs getClientInfo(Long userId) {
        final List<ClientInfoEntity> allInfosForClient = repository.getAllInfosForClient(userId);
        return mapper.entityToObject(allInfosForClient);
    }

    @Override
    public ClientInfoWithTabs createUserInfo(ClientTabRequest request) {
        final List<ClientTabPropSettingEntity> settingsIdByTabType = settingsRepository
                .getSettingsIdByTabType(request.tabTypeId());
        settingsIdByTabType.parallelStream().forEach(entity ->
        {
            final ClientInfoEntity clientInfoEntity = mapper.settingsToInfo(entity, request);
            clientInfoEntity.setCreateDate(new Date());
            repository.save(clientInfoEntity);
        });

        return getClientInfo(request.userId());
    }

    @Override
    public ClientInfoWithTabs updateUserInfo(List<ClientInfoRequest> clientRequest) {
        return null;
    }

    @Override
    public void deleteUserInfo(Long userName) {

    }
}
