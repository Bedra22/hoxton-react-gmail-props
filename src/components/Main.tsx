import { Dispatch, SetStateAction } from "react";
import { Email } from "../data/emails";
import { MainUl } from "./MainUl";

type Props = {
    index: any;
    email: any;
    toggleRead: (targetEmail: Email) => void
    toggleStar: (targetEmail: Email) => void
    getFilteredEmails: () => Array<Email>
}
export function Main({ index, email, toggleRead, toggleStar, getFilteredEmails }: Props) {
    return (
        <main className="emails">
            <MainUl index={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} getFilteredEmails={getFilteredEmails} />
        </main>
    )
}