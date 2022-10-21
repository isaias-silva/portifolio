/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SHeader from "../styledComponents/sHeader";
import Image from "next/image"
import logo from "../public/logo.png"
export default function Header() {
    return <SHeader>
            <div className="title">
            <Link href={'/'}>
            <a>           <img src={logo.src} alt="logo" />
            <h1>zack santos</h1>

            </a>
            
            </Link>
        </div>
            <div className="menu"><ul>
                <li>
                    <Link href={"/projetos/"}>projetos frontend</Link>
                </li>
                <li>
                    <Link href={"/projetos/back"}>projetos backend</Link>
                </li>
                <li>
                    <Link href={"/projetos/auto"}> projetos de automação</Link>
                </li>
            </ul></div>
     
    </SHeader>
}