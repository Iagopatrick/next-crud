import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useCliente from "../hooks/useClientes";

export default function Home() {
  const {
    clientes,
    cliente,
    tabelaVisivel,
    novoCliente,
    selecionarCliente, 
    excluirCliente,
    salvarCliente,
    exbibirTabela
  } = useCliente()

  return (

      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <Layout titulo="Cadastro simples">
          {tabelaVisivel?(
            <>
              <div className="flex justify-end">
                <Botao cor="green" className="mb-4" 
                onClick={novoCliente}
                >Novo Cliente</Botao>
                
  
              </div>
              <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}> </Tabela>
            </>
          ):(
            <Formulario cliente={cliente} cancelado={exbibirTabela} clienteMudou={salvarCliente}> </Formulario> 

          )}
        </Layout>
      </div>
   
  );
}
