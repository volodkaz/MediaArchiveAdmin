package org.vladimir.homearchiveauth.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.vladimir.homearchiveauth.model.entity.ClientTabPropSettingEntity;

import java.util.List;

public interface ClientTabPropertySettingsRepository extends CrudRepository<ClientTabPropSettingEntity, Long> {
    @Query(value = """
            select distinct ctps.* from client_tab_prop_setting ctps\s
            join client_tab ct on ct.tab_id = ctps.tab_id\s
            where ct.tab_type = :typeId""",
            nativeQuery = true
    )
    List<ClientTabPropSettingEntity> getSettingsIdByTabType(@Param("typeId") Long tabTypeId);
}
