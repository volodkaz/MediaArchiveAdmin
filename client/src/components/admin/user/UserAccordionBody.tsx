import React from 'react';
import UserNoteBody from "./UserNoteBody";
import {IUserTab} from "../../../models/IUser";
import {UserNotesTypeNames} from "../../../utils/constants";
import UserDetailsBodyContainer from "./UserDetailsBodyContainer";

interface UserAccordionBodyProps {
    tab: IUserTab;
    userId: number;
}

const UserAccordionBody: React.FC<UserAccordionBodyProps> = ({tab, userId}) => {
    switch (tab.tab.id) {
        case UserNotesTypeNames.USER_DETAILS: {
            return (<UserDetailsBodyContainer tab={tab} userId={userId}/>)
        }
        case UserNotesTypeNames.USER_NOTES: {
            return (<UserNoteBody data={tab.properties[0].infos[0].data}/>)
        }
        default: {
            return <div></div>
        }
    }

}

export default UserAccordionBody;