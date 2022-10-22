import { ReactElement } from "react"

export default interface Ipost{
    type:'about'|'normal'
    title?:string,
    img?:string,
    element?:ReactElement | ReactElement[]

}