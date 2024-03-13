import { useState } from "react";

export default function useTabelaOuForm(){
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    const exbibirTabela = () => setVisivel('tabela')
    const exbibirFormulario = () => setVisivel('form')
    return{
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exbibirFormulario,
        exbibirTabela
    }
}