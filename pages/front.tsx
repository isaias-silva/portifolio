import Project from "../components/project";
import Section from "../components/section";
import { Iproject } from "../interfaces/Iproject";
import projectsData from "../public/locale/projects.json"
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
    linkRepo: string,
    stack: string[]
}
export default function ProjFront() {


    const [projectState, setProjectState] = useState<ProjectRender[]>([])
    useEffect(() => {
        const projectNow: ProjectRender[] = projectsData
            .filter((data) => data.type == "front")
            .map((value) => {
                return {
                    title: value.title,
                    type: "normal",
                    element: <p>{value.resume}</p>,
                    img: value.img,
                    link: value.link,
                    linkRepo: value.linkRepo,
                    stack: value.stack
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
                 {... x}
                />



            })
        }
    </>
}