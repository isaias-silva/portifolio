

import { useEffect, useRef } from "react";
import { Iproject } from "../interfaces/Iproject";
import Ssection from "../styledComponents/sSection";
import langs from '../public/locale/langs.json'
export default function Project(project: Iproject) {

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
        return <Ssection>
                <img className="wall" src={project.img} alt="thumb" />
                <div className='blox' ref={element}>

                        <h2>{project.title}</h2>
                        <div className="stack-group">
                                {project.stack.map((stack) => {
                                        const item = langs.find(value => value.name == stack)
                                        return <div className="image" key={stack}>
                                                <img src={item?.img} />

                                        </div>
                                })}
                        </div>
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

}