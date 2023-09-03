import React from 'react';
import UserDetailsBody from "./UserDetailsBody";
import UserNoteBody from "./UserNoteBody";
import {IUserTab} from "../../../models/IUser";
import {UserNotesTypeNames} from "../../../utils/constants";

interface UserAccordionBodyProps {
    tab: IUserTab;
}

const UserAccordionBody: React.FC<UserAccordionBodyProps> = ({tab}) => {
    switch (tab.tabType.name) {
        case UserNotesTypeNames.USER_DETAILS: {
            return (<UserDetailsBody tabProperties={tab.property}/>)
        }
        case UserNotesTypeNames.USER_NOTES: {
            return (<UserNoteBody data={tab.property[0].infos[0].data}/>)
        }
        default: {
            return <div></div>
        }
    }

}

export default UserAccordionBody;