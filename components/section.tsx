/* eslint-disable @next/next/no-img-element */
import Ssection from "../styledComponents/sSection";

import Image from "next/image";
import perfil from '../public/perfil.jpeg'
import Ipost from "../interfaces/Ipost";
import langs from "../data/langs.json"
import Boxmsg from "./boxMsg";
import { useState } from "react";

export default function Section(post: Ipost) {
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

                return <> <Ssection>

                        <h2>who i am:</h2>
                        <div className="perfil" >
                                <Image src={perfil} width={200} height={200} alt='perfil' />

                        </div>
                        <p>meu nome é Isaías, tenho 20 anos, sou estudante de ciência da computação e desenvolvedor fullstack!</p>

                        <h2>my hardskills:</h2>
                        <div className="stack">
                                {hardskills}


                        </div>



                        <h2>
                                Softskills:
                        </h2>
                        <ul>
                                <li>
                                        autodidata
                                </li>
                                <li>
                                        dedicado
                                </li>
                                <li>
                                        communicativo
                                </li>
                        </ul>
                        <h2>languages:</h2>
                        <ul>
                                <li>
                                        espanhol
                                </li>
                                <li>
                                        inglês
                                </li>
                        </ul>
                        <h2>contact:</h2>
                        <div className="contacts">


                                <a href="mailto:isaiasgarraeluta@gmail.com?" target={'_blank'} rel="noreferrer"> <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail" /></a>
                                <a href="https://www.linkedin.com/in/isa%C3%ADas-santos-b8b2181a3/" target={'_blank'} rel="noreferrer">
                                        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" />
                                </a>
                                <a href="https://www.instagram.com/isaias.sanntoss/" target={'_blank'} rel="noreferrer"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" /></a>
                                <a href="https://twitter.com/IsaasSa00147683" target={'_blank'} rel="noreferrer"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" /></a>
                                <a href="https://github.com/isaias-silva" target={'_blank'} rel="noreferrer"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github" /></a>

                        </div>
                </Ssection>
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