

import { useEffect, useRef, useState } from "react";
import { Iproject } from "../interfaces/Iproject";
import Ssection from "../styledComponents/sSection";
import { useTranslation } from "react-i18next";
import Boxmsg from "./boxMsg";

type Stack = { img?: string, desc?: string, name?: string }
export default function Project(project: Iproject) {
        const { t } = useTranslation()
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
        const element = useRef<any>()
        useEffect(() => {
                const elementoAtual = element.current;


                const handleAnimation = (entries: IntersectionObserverEntry[]) => {
                        const [entry] = entries
                        if (entry.isIntersecting) {
                                elementoAtual?.classList.add('neon');
                        }
                };

                const observer = new IntersectionObserver(handleAnimation, { threshold: 0.5 });

                if (elementoAtual) {
                        observer.observe(elementoAtual);
                }


                return () => {
                        if (elementoAtual) {
                                observer.unobserve(elementoAtual);
                        }
                };
        }, [element])
        return <>
                <Ssection size={80}>



                        <div className="wall-block">
                                <img src={project.img} alt="thumb" />
                                <div className="stack-group">
                                        {project.stack.map((stack) => {

                                                const item = langs.find(value => value.name == stack)
                                                if (!item) {
                                                        return <></>
                                                }
                                                return <div className="conhecimento" key={item?.name} onClick={() => { check(langs.indexOf(item)) }}>
                                                        <img src={item?.img} alt="image" title={item?.name} /></div>
                                        })}
                                </div>

                        </div>
                        <div className='blox' ref={element}>

                                <h2>{project.title}</h2>

                                <br />
                                <div className="legend" >
                                        {project.element}
                                        {
                                                project.link ? <div className="exp" >
                                                        <h3>link:</h3>
                                                        <p>

                                                                <a href={project.link}
                                                                        target={'_blank'}
                                                                        rel="noreferrer">{project.link}</a>
                                                        </p>
                                                </div> : null
                                        }
                                        <div className="exp"   >
                                                <h3>repositório:</h3>
                                                <p>
                                                        <a href={project.linkRepo}
                                                                target={'_blank'}
                                                                rel="noreferrer">{project.linkRepo}</a>
                                                </p>
                                        </div>
                                </div>
                        </div>


                </Ssection>
                {
                        vis ? <Boxmsg onClose={async () => setVis(false)} text={text} icon={icon} title={title}></Boxmsg> : null
                }

        </>
}