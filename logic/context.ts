import { type } from "os"

export  interface Data{
    name:String,
    categoria:String,
    imagen?:BinaryData,
    fecha:Date,

}

export type db ={
    title:String
    _id:String,
    description:string,
    markdown:string,
    createdAt:string,
    __v: 0
}

export type Props = {
    data: {
        titulo: string,
        imagen?: string,
        resumen: string,
        categoria: string,
        texto: string
    }[]
}
export type User ={
    name:  String,
    email: String,
    img: String
}