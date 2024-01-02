import Head from "next/head"
import { useTranslation } from "react-i18next"
import Section from "../components/section"
import Ssection from "../styledComponents/sSection"
type Experience = {

    "title": string,
    "position": string,
    "period": string,
    "description": string,
    img:string

}
export default function Exp() {
    const { t } = useTranslation()
    const experiences: Array<Experience> = t('experience', { returnObjects: true })

    return <>
        <Head>
            <title>
                {t('pharses.experience')}
            </title>
        </Head>
        {experiences.reverse().map((exp) => {

            return <Ssection key={exp.title} >

                    <h3>{exp.title}</h3>
                <div className="blox">
                    <span>{exp.period} - </span>
                    <span>{exp.position}</span>
                    <p>{exp.description}</p>
                </div>
                <img src={exp.img} alt="image" className="wall experience" />

            </Ssection>



        })}

    </>
}