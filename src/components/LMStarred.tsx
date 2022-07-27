import { Dispatch, SetStateAction } from "react";

type Props = {
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<string>>
    starredEmails: Dispatch<SetStateAction<boolean>>
}


export function LMStarred({ currentTab, setCurrentTab, starredEmails }: Props) {
    return (

        <li
            className={`item ${currentTab === "starred" ? "active" : ""}`}
            onClick={() => setCurrentTab("starred")}
        >



            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
        </li>
    )
}