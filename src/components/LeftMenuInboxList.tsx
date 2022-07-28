import { LMInbox } from "./LMInbox";
import { LMHideRead } from "./LMHideRead";
import { LMStarred } from "./LMStarred";
import { Dispatch, SetStateAction } from "react";


type Props = {
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>
    unreadEmails: Dispatch<SetStateAction<boolean>>
    starredEmails: Dispatch<SetStateAction<boolean>>
    hideRead: boolean;
    setHideRead: React.Dispatch<React.SetStateAction<boolean>>
}

export function LeftMenuInboxList({ currentTab, setCurrentTab, unreadEmails, starredEmails, hideRead, setHideRead }: Props) {
    return (
        <ul className="inbox-list">

            <LMInbox currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} />

            <LMStarred currentTab={currentTab} setCurrentTab={setCurrentTab} starredEmails={starredEmails} />

            <LMHideRead hideRead={hideRead} setHideRead={setHideRead} />

        </ul>
    )
}