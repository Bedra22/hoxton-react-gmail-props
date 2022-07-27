import { Dispatch, SetStateAction } from "react";
import { Email } from "../data/emails";

type Props = {
    index: any;
    email: any;
    toggleRead: (targetEmail: Email) => void
    toggleStar: (targetEmail: Email) => void
}

export function MainUlLi({ index, email, toggleRead, toggleStar }: Props) {
    return (
        <li
            key={index}
            className={`email ${email.read ? "read" : "unread"}`}
        >
            <div className="select">
                <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                />
            </div>

            <div className="star">
                <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
        </li>
    )
}