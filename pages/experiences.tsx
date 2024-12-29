import Head from "next/head"
import { useTranslation } from "react-i18next"
import Section from "../components/section"
import Ssection from "../styledComponents/sSection"
type Experience = {

    "title": string,
    "position": string,
    "period": string,
    "description": string,
    img: string

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

            return <Ssection key={exp.title} size={65} >
                <img src={exp.img} alt="image" className="wall experience" />

                <div className="blox">
                    <h3 className="large">{exp.title}</h3>
                    <span>{exp.period} - </span>
                    <span>{exp.position}</span>
                    <p className="large">{exp.description}</p>
                </div>


            </Ssection>



        })}

    </>
}