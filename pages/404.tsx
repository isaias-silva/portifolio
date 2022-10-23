import Erro from "../components/erro";

export default function notFound(){
    return <Erro status={404} message={' a página solicitada não foi encontrada!'}/>
}