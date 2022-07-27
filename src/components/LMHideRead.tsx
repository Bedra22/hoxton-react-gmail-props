import { Dispatch, SetStateAction } from "react";

type Props = {
    hideRead: boolean;
    setHideRead: React.Dispatch<React.SetStateAction<boolean>>
}

export function LMHideRead({ hideRead, setHideRead }: Props) {
    return (

        <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
                id="hide-read"
                type="checkbox"
                checked={hideRead}
                onChange={(e) => setHideRead(e.target.checked)}
            />
        </li>
    )
}