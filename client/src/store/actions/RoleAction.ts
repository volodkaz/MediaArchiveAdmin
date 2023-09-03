import $api, {createAppAsyncThunk} from "../../http/index";
import {asyncThunkBody} from "./action";
import {role} from "../../utils/endpoints";
import {Role} from "../../models/store/role";

export const fetchAllRoles = createAppAsyncThunk(
    'role/fetchAllRoles',
    async (limit:number, {rejectWithValue, dispatch}) => {
        return await asyncThunkBody(limit, dispatch, rejectWithValue,
            () => $api.get<Role[]>(`${role.fetchAllRoles}?limit=${limit}`), 'Ошибка при загрузке Ролей');
    }
)