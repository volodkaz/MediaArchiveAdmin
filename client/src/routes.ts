import {IRouts} from "./models/IRouts";
import AdminPage from "./pages/AdminPage";
import {Routs} from "./utils/routs";
import UserDetailsPage from "./pages/UserDetailsPage";
import LoginForm from "./pages/LoginForm";
import MediaForm from "./pages/MediaForm";
import AdminMedia from "./components/admin/AdminMedia";
import AdminUserContainer from "./components/admin/user/AdminUserContainer";

export const authRoutes: IRouts[] = [
    {
        path: Routs.ADMIN_ROUT,
        Component: AdminPage
    },
    {
        path: Routs.USER_DETAILS_ROUT,
        Component: UserDetailsPage
    },
    {
        path: Routs.MEDIA_ROUT,
        Component: MediaForm
    }
]

export const authChildRouts = new Map<string, IRouts[]>()
    .set(Routs.ADMIN_ROUT, [
        {
            path: Routs.ADMIN_USER,
            Component: AdminUserContainer
        },
        {
            path: Routs.ADMIN_MEDIA,
            Component: AdminMedia
        }
        ] )
export const publicRoutes: IRouts[] = [
    {
        path: Routs.LOGIN_ROUT,
        Component: LoginForm
    },
    {
        path: Routs.REGISTRATION_ROUT,
        Component: LoginForm
    },
    {
        path:'*',
        Component: LoginForm
    }
]