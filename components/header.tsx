/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SHeader from "../styledComponents/sHeader";
import Image from "next/image"
import logo from "../public/logo.png"
import { useState } from "react";
export default function Header() {
    const [visibleMenu, setVisible] = useState<boolean>(false)

    const toogle = () => {
        setVisible(!visibleMenu)
    }
    return <SHeader>
        <div className="title">
            <Link href={'/'}>
                <a>           <img src={logo.src} alt="logo" />
                    <h1><span className="txt white">I</span>saías <span className="txt white">s</span>antos</h1>

                </a>

            </Link>
        </div>
        <div className="menu">
            <div className="menuhamburguer">

                <label htmlFor="burguer">
                    <input type="checkbox" id="burguer" onClick={toogle} />
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <ul className={visibleMenu ? 'normal' : 'invisible'}>
                <li>
                    <Link href={"/"}>home</Link>
                </li>
                <li>
                    <Link href={"/projetos/front"}>projetos frontend</Link>
                </li>
                <li>
                    <Link href={"/projetos/back"}>projetos backend</Link>
                </li>
                <li>
                    <Link href={"/projetos/auto"}> projetos de automação</Link>
                </li>
            </ul>


        </div>

    </SHeader>
}