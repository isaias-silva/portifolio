/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import SHeader from "../styledComponents/sHeader";
import Image from "next/image"
import logo from "../public/logo.png"
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function Header() {
    const [visibleMenu, setVisible] = useState<boolean>(false)
    const { t } = useTranslation()
    const toogle = () => {
        setVisible(!visibleMenu)
    }
    const router = useRouter()

    const refPath = router.pathname


  
    return <SHeader>
        <div className="title" >
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
                <li className={refPath == '/' ? 'active' : 'normal'}>
                    <Link href={"/"} >{t('pharses.home')}</Link>
                </li>
                <li className={refPath == '/projects' ? 'active' : 'normal'}>
                    <Link href={"/projects"} >{t('pharses.projects')}</Link>
                </li>
                <li className={refPath == '/experiences' ? 'active' : 'normal'}>
                    <Link href={'/experiences'}>{t('pharses.experience')}</Link>

                </li>

            </ul>


        </div>

    </SHeader>
}