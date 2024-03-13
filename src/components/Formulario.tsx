import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props: FormularioProps){
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')
    const id = props.cliente?.id
    return(
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} className="mb-4"></Entrada>

            ): false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome} className="mb-4"></Entrada>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}></Entrada>
            <div className="flex mt-3 justify-end">
                <Botao cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar': 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}