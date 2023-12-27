import Project from "../components/project";

import projectsData from "../public/locale/projects.json"

import Head from "next/head";
import Erro from "../components/erro";
import { useEffect, useState } from "react";

type ProjectRender = {
    title: string,
    type: 'normal' | 'about',
    element: JSX.Element,
    img: string,
    link?: string,
    linkRepo: string,
    stack: string[]
}
export default function ProjAuto() {


    const [projectState, setProjectState] = useState<ProjectRender[]>([])
    useEffect(() => {
        const projectNow: ProjectRender[] = projectsData
            .filter((data) => data.type == "auto")
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
                automation
            </title>
        </Head>

        {

            projectState.map((x, i) => {
                return <Project
                    {...x}
                />



            })
        }
    </>
}