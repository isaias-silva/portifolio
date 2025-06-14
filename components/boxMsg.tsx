
import Sbox from "../styledComponents/sBox";


export default function Boxmsg({ icon, text,title,onClose }: { icon?: string, text?: string,title?:string ,onClose:()=>{}}) {


    if (icon && text) {
       
            return <Sbox>
                <div className="box" >

                    <img src={icon} alt="" />
                    <h3>{title}:</h3>
                    <p>{text}</p>
                    <button className='close' onClick={onClose}>x</button>
                </div>

            </Sbox>

        

    } return <></>

}