/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Iproject } from "../interfaces/Iproject";
import Ssection from "../styledComponents/sSection";

export default function Project(project: Iproject) {

        return <Ssection>
                <>
                        <h2>{project.title}</h2>
                        <br />



                        <img className="wall" src={project.img} alt="" />
                        <div className="legend">
                                {project.element}
                                {
                                        project.link ? <div className="exp" >
                                                <h3>link:</h3>
                                                <a href={project.link} target={'_blank'} rel="noreferrer">{project.link}</a>
                                        </div> : null
                                }
                                <div className="exp" >
                                        <h3>repositório:</h3>
                                        <a href={project.linkRepo} target={'_blank'} rel="noreferrer">{project.linkRepo}</a>
                                </div>
                        </div>
                </>
        </Ssection>

}