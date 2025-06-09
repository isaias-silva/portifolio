import { useEffect, useState } from "react";
import Sselect from "../styledComponents/sSelect";
import i18n from "../config/i18n";

export default function Translate() {

    const [language, setLanguage] = useState<string>('pt')

    useEffect(() => {

        i18n.changeLanguage(language)
    }, [language])
    return <>
        <Sselect >
            <select defaultValue={language} onChange={(ev) => setLanguage(ev.target.value)}>
                <option value="pt">português</option>
                <option value="en">english</option>
            </select>
        </Sselect>
    </>
}