import { Dispatch, SetStateAction } from "react";

type Props = {
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>
    unreadEmails: Dispatch<SetStateAction<boolean>>
}


export function LMInbox({ currentTab, setCurrentTab, unreadEmails }: Props) {
    return (

        <li
            className={`item ${currentTab === "inbox" ? "active" : ""}`}
            onClick={() => setCurrentTab("inbox")}
        >

            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
        </li>
    )
}