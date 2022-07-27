import { Email } from "../data/emails";
import { MainUlLi } from "./MainUlLI";

type Props = {
    index: any;
    email: any;
    toggleRead: (targetEmail: Email) => void
    toggleStar: (targetEmail: Email) => void
    getFilteredEmails: () => Array<Email>
}
export function MainUl({ index, email, toggleRead, toggleStar, getFilteredEmails }: Props) {
    return (
        <ul>

            {getFilteredEmails().map((email: any, index: number) => (
                <MainUlLi index={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar} />
            ))}
        </ul>
    )
}