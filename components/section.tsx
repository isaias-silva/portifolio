/* eslint-disable @next/next/no-img-element */
import Ssection from "../styledComponents/sSection";

import Image from "next/image";
import perfil from '../public/perfil.jpeg'
import Ipost from "../interfaces/Ipost";
import langsJson from "../public/locale/langs.json"
import Boxmsg from "./boxMsg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SminSection from "../styledComponents/sMinSection";

type Stack = { img?: string, desc?: string, name?: string }

export default function Section(post: Ipost) {
        const { t, ready, i18n } = useTranslation()

        const langs: Array<Stack> = t('langs', { returnObjects: true })


        const [text, setText] = useState<string>()
        const [icon, setIco] = useState<string>()
        const [title, setTitle] = useState<string>()
        const [vis, setVis] = useState<boolean>()

        function check(index: number) {
                setText(langs[index].desc)
                setTitle(langs[index].name)
                setIco(langs[index].img)
                setVis(true)
        }
        if (post.type == 'about') {
                const hardskills = langs.map((language, i) => {
                        return <div className="conhecimento" key={i} onClick={() => { check(i) }}><img src={language.img} alt="image" title={language.name} /></div>
                })

                const softskills: Array<String> = t('pharses.softskillItems', { returnObjects: true })
                const languages: Array<String> = t('pharses.languagesItems', { returnObjects: true })
                return <> <SminSection>

                        <h2>{t("key")}:</h2>
                        <div className="perfil" >
                                <Image src={perfil} width={400} height={400} alt='perfil' />

                        </div>
                        <p>{t('pharses.presentation')}</p>

                        <h2>{t('pharses.hardskill')}:</h2>
                        <div className="stack">
                                {hardskills}


                        </div>



                        <h2>
                                {t('pharses.softskill')}:
                        </h2>
                        <ul>
                                {softskills.map((value) => <li key={value.toString()}>{value}</li>)}
                        </ul>
                        <h2>{t('pharses.languages')}</h2>
                        <ul>
                                {languages.map((value) => <li key={value.toString()}>{value}</li>)}

                        </ul>
                        <h2>{t('pharses.contact')}:</h2>
                        <div className="contacts">


                                <a href="mailto:isaiasgarraeluta@gmail.com?" target={'_blank'} rel="noreferrer"> <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail" /></a>
                                <a href="https://www.linkedin.com/in/isa%C3%ADas-santos-b8b2181a3/" target={'_blank'} rel="noreferrer">
                                        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" />
                                </a>
                                <a href="https://www.instagram.com/isaias.sanntoss/" target={'_blank'} rel="noreferrer"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" /></a>
                                <a href="https://twitter.com/IsaasSa00147683" target={'_blank'} rel="noreferrer"><img src="https://img.shields.io/badge/x.com-%23000000.svg?style=for-the-badge&logo=X&logoColor=white" alt="X" /></a>
                                <a href="https://github.com/isaias-silva" target={'_blank'} rel="noreferrer"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github" /></a>

                        </div>
                </SminSection>
                        {
                                vis ? <Boxmsg onClose={async () => setVis(false)} text={text} icon={icon} title={title}></Boxmsg> : null
                        }

                </>
        } else {
                return <Ssection>
                        <>
                                <h2>{post?.title}</h2>
                                <img className="wall" src={post?.img} alt="" />
                                <div className="legend">
                                        {post.element}
                                </div>
                        </>
                </Ssection>

        }
}