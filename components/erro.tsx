import Link from "next/link";
import Ssection from "../styledComponents/sSection";

export default function Erro(ErroHttp:{status:number,message:string}){

    return <Ssection>
            <h2 className="center"> erro {ErroHttp.status}</h2>
            <p className="center">{ErroHttp.message}</p>
            <div  className="center">
            <Link href={'/'}><a>voltar</a></Link>

            </div>
    </Ssection>
   
}