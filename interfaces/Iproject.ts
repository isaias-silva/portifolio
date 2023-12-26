import Ipost from "./Ipost";

export interface Iproject extends Ipost{
    link?:string
    linkRepo:string
    stack:string[]
}