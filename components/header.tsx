import Link from "next/link";
import SHeader from "../styledComponents/styles";
import Image from "next/image"
import logo from "../public/logo.png"
export default function Header() {
    return <SHeader>
            <div className="title">
            <Image src={logo} alt="logo" width={90} height={90}/>
            <h1>zack santos</h1>
        </div>
            <div className="menu"><ul>
                <li>
                    <Link href={"/projetos"}>projetos frontend</Link>
                </li>
                <li>
                    <Link href={"/projetos"}>projetos backend</Link>
                </li>
                <li>
                    <Link href={"/projetos"}> projetos de automação</Link>
                </li>
            </ul></div>
     
    </SHeader>
}