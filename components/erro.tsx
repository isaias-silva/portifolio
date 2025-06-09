import Link from "next/link";
import Ssection from "../styledComponents/sSection";
import SminSection from "../styledComponents/sMinSection";

export default function Erro(ErroHttp:{status:number,message:string}){

    return <SminSection>
                                   <h2> erro {ErroHttp.status}</h2>
                                <img className="wall-min" src="https://cdn-icons-png.freepik.com/256/14605/14605574.png" alt="" />
                                <div className="legend">
                                       <p>{ErroHttp.message}</p>
                                       <Link href={'/'}><a>voltar</a></Link>
                                </div>
                        </SminSection>
                       
                      
            
        
     
   
   
}