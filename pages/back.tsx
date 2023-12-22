import Project from "../components/project";
import Section from "../components/section";
import { Iproject } from "../interfaces/Iproject";
import projectsData from '../data/projects.json'
import { Router, useRouter } from "next/router";
import Head from "next/head";
import Erro from "../components/erro";
import { useEffect, useState } from "react";
import Ssection from "../styledComponents/sSection";
type ProjectRender = {
    title: string,
    type: 'normal' | 'about',
    element: JSX.Element,
    img: string,
    link?: string,
    linkRepo: string
}
export default function ProjBack() {
  

    const [projectState, setProjectState] = useState<ProjectRender[]>([])
    useEffect(() => {
        const projectNow: ProjectRender[] = projectsData
            .filter((data) => data.type == "back")
            .map((value) => {
                return {
                    title: value.title,
                    type: "normal",
                    element: <p>{value.resume}</p>,
                    img: value.img,
                    link: value.link,
                    linkRepo: value.linkRepo
                }
            })

        setProjectState(projectNow)
    }, [])

    return <>
        <Head>
            <title>
                projetos backend
            </title>
        </Head>
    
        {

            projectState.map((x, i) => {
                return <Project
                    linkRepo={x.linkRepo}
                    type={x.type}
                    title={x.title}
                    element={x.element}
                    img={x.img}
                    key={i}
                    link={x.link} />



            })
        }
    </>
}