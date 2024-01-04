import Project from "../components/project";
import Section from "../components/section";
import { Iproject } from "../interfaces/Iproject";

import { Router, useRouter } from "next/router";
import Head from "next/head";
import Erro from "../components/erro";
import { useEffect, useState } from "react";
import Ssection from "../styledComponents/sSection";
import { useTranslation } from "react-i18next";
type ProjectRender = {
    title: string,
    type: 'normal' | 'about',
    element: JSX.Element,
    img: string,
    link?: string,
    linkRepo: string,
    stack: string[]
}
export default function Proj() {
    const { t } = useTranslation()

    const projectsData:any[]=t('projects',{returnObjects:true})
  

        const projectNow: ProjectRender[] = projectsData
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

    
   


    return <>
        <Head>
            <title>
                {t('pharses.projects')}
            </title>
        </Head>

        {

            projectNow.map((x, i) => {
                return <Project key={x.title}
                    {...x}
                />



            })
        }
    </>
}