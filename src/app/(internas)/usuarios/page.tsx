'use client'

import Pagina from "@/app/components/templates/Pagina";
import Titulo from "@/app/components/templates/Titulo";
import ListaUsuario from "@/app/components/usuaio/ListaUsuario";
import FormularioUsiario from "@/app/data/constants/FormularioUsuario";
import useUsuarios from "@/app/data/hooks/useUsuarios";
import { IconPlus, IconUser } from "@tabler/icons-react";


export default function Page(){

  const {usuarios, usuario, alterarUsuario, salvar, excluir, cancelar} = useUsuarios()

  return(
    <Pagina className="flex flex-col gap-5">
      <Titulo principal="Usuários:" secundario="Cadastro de usuários" icone={IconUser}/>
      
      {usuario ? (
        <FormularioUsiario 
          usuario={usuario} 
          onChange={alterarUsuario}
          cancelar={() => alterarUsuario(null)}
          salvar={salvar}
          excluir={excluir}
        />
      ) : ( 
      <>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" onClick={() => alterarUsuario({})}>
            <IconPlus />
            <span>Novo Usúario</span>
          </button>
        </div>
        <ListaUsuario usuarios={usuarios} onClick={alterarUsuario}/> 
      </>
      )}
    </Pagina>
  )
}