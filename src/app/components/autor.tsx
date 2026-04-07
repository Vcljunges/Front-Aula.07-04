import { ReactNode } from "react";

type Props = {
    frase: string;
    autor?: string;
}

/* Utilizando if/else para verificar se o autor existe!!
//Método If/Else.
export const Autor = ({ frase, autor }: Props) => {
    if (autor) {
        return (
            <>
            Frase: {frase} <br/>
            Autor: {autor}
            </>
        )
    }

    return (
            <>
            Frase: {frase} <br/>
            Autor: Desconhecido
            </>
        )
}
*/

/* Utilizando operador ternário para verificar se o autor existe!!
Método Ternário.
export const Autor = ({ frase, autor }: Props) => {
    return (
        <>
        Frase: {frase} <br/>
        Autor: {autor ? autor : "Desconhecido"}
        </>
    );
}
*/

//Utilizando operador nullish coalescing para verificar se o autor existe!!
//Método Nullish Coalescing.
export const Autor = ({ frase, autor }: Props) => {
    return (
        <>
        Frase: {frase} <br/>
        Autor: {autor ?? "Desconhecido"}
        </>
    );
}
