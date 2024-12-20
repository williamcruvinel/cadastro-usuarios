import LinhaUsuario from "@/app/data/constants/LinhaUsuario";
import { Usuario } from "@/core/model/Usuario";

export interface ListaUsuarioProps{
  usuarios: Usuario[]
  onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: ListaUsuarioProps){
  return(
    <div className="flex flex-col gap-4">
      {props.usuarios.map((usuario) => {
        return (
          <LinhaUsuario 
            key={usuario.id} 
            usuario={usuario}
            onClick={props.onClick}
          />
        )
      })}
    </div>
  )
}