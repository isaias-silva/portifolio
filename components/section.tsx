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
                        <p>my name is Isaiah, better known as Zack, i am a student of computer science and fullstack developer!</p>

                        <h2>my hardskills:</h2>
                        <div className="stack">
                                {hardskills}


                        </div>



                        <h2>
                                Softskills:
                        </h2>
                        <ul>
                                <li>
                                        self-taught
                                </li>
                                <li>
                                        dedicated
                                </li>
                                <li>
                                        communicative
                                </li>
                        </ul>
                </Ssection>
                        {
                                vis ? <Boxmsg onClose={async () => setVis(false)} text={text} icon={icon} title={title}></Boxmsg>  : null
                        }

                </>
        } else {
                return <Ssection>
                        <h2>{post?.title}</h2>
                        <img src={post?.img} alt="" />
                        <p>{post?.text}</p>
                </Ssection>
        }
}