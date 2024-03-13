import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useCliente(){
    const repo: ClienteRepositorio = new ColecaoCliente()
    const {tabelaVisivel, exbibirFormulario, exbibirTabela} = useTabelaOuForm()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
  
    useEffect(obterTodos, [])
  
    function obterTodos(){
        repo.obterTodos().then((clientes) => {
          setClientes(clientes)
          exbibirTabela()
        })
    }
  
    function selecionarCliente(cliente:Cliente){
      setCliente(cliente)
      exbibirFormulario()
    } 
    async function excluirCliente(cliente:Cliente){
      await repo.excluir(cliente)
      obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exbibirFormulario()
    }
  
    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      obterTodos()
    }

    return {
        clientes,
        cliente,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exbibirTabela,

    }
}