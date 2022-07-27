import { Dispatch, SetStateAction } from "react";
import { LeftMenuInboxList } from "./LeftMenuInboxList";

type Props = {
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>
    unreadEmails: any;
    starredEmails: any;
    hideRead: boolean;
    setHideRead: React.Dispatch<React.SetStateAction<boolean>>
}

export function LeftMenu({ currentTab, setCurrentTab, unreadEmails, starredEmails, hideRead, setHideRead }: Props) {
    return (
        <nav className="left-menu">

            <LeftMenuInboxList currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} hideRead={hideRead} setHideRead={setHideRead} />

        </nav>
    )
}