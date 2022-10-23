import Project from "../../components/project";
import Section from "../../components/section";
import { Iproject } from "../../interfaces/Iproject";
import projectsData from '../../data/projects.json'
import { Router, useRouter } from "next/router";
import Head from "next/head";
import Erro from "../../components/erro";
export default function Proj() {
    const route = useRouter()

    const projects: Iproject[] | any[] = projectsData
        .filter((data) => data.type == route.query.type)
        .map((value) => {
            return {
                title: value.title,
                type: 'normal',
                element: <p>{value.resume}</p>,
                img: value.img,
                link: value.link,
                linkRepo: value.linkRepo
            }
        })
if(projects.length<1){
    return <Erro status={404} message={'acho que não fiz projetos sobre...'}></Erro>
}
   return <>
        <Head>
            <title>
                projetos {route.query.type}
            </title>
        </Head>
        {

            projects.map((x, i) => {
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