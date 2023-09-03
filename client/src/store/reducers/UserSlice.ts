import {UserState} from "../../models/store/user";
import {ActionAndInitStateAction, ActionResult} from "../../models/store/index";
import {createSliceApp} from "./ReducerCreator";
import {IUser} from "../../models/IUser";
import {createUser, deleteUser, fetchAllUsers} from "../actions/UserAction";

const initialState:UserState = {
    users: [] as IUser[],
    isLoading: false
}

const  initStateForFetchAll = (state: UserState, result:ActionResult<IUser[]>) => {
    state.isLoading = result.isLoading || false;
        state.users = result.data ? result.data :  state.users;
}

const actionArray:  ActionAndInitStateAction<UserState>[] =
    [
        {action: fetchAllUsers, initStateAction: initStateForFetchAll},
        {action: createUser, initStateAction: initStateForCreateUser},
        {action: deleteUser, initStateAction: initStateForDeleteUser}
    ]

function initStateForCreateUser(state: UserState, result:ActionResult<IUser>) {
    state.isLoading = result.isLoading || false;
    state.users = result.data ? [...state.users, result.data] : state.users;
}

function initStateForDeleteUser(state: UserState, result:ActionResult<IUser>) {
    state.isLoading = result.isLoading || false;
    state.users = result.data ? state.users.filter(user => user.id !== result.data?.id) : state.users;
}

const userSlice = createSliceApp<UserState>('user', initialState, actionArray)

export default userSlice.reducer;
// export {} = userSlice.actions;