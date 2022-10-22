import Project from "../../components/project";
import Section from "../../components/section";
import { Iproject } from "../../interfaces/Iproject";
import projectsData from '../../data/projects.json'
export default function Frontend() {

    const projectFront: Iproject[] | any[] = projectsData
        .filter((data) => data.type == 'front')
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

    return <>
        {
            projectFront.map((x, i) => {
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