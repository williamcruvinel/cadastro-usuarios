'use client'

import Pagina from "@/app/components/templates/Pagina";
import Titulo from "@/app/components/templates/Titulo";
import ListaUsuario from "@/app/components/usuaio/ListaUsuario";
import FormularioUsiario from "@/app/data/constants/FormularioUsuario";
import usuarios from "@/app/data/constants/usuarios";
import { Usuario } from "@/core/model/Usuario";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page(){
  const [ usuario, setUsuario ] = useState<Usuario>(usuarios[0])
  function salvar(){
    //salvar no DB
  }
  return(
    <Pagina className="flex flex-col gap-5">
      <Titulo principal="Usuários:" secundario="Cadastro de usuários" icone={IconUser}/>
      {/* <ListaUsuario/> */}
      <FormularioUsiario 
        usuario={usuario} 
        onChange={setUsuario}
        cancelar={() => {}}
        salvar={() => {}}
      />
    </Pagina>
  )
}