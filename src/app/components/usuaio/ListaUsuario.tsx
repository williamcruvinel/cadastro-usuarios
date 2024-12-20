import LinhaUsuario from "@/app/data/constants/LinhaUsuario";
import usuarios from "@/app/data/constants/usuarios";

export default function ListaUsuario(){
  return(
    <div className="flex flex-col gap-4">
      {usuarios.map((usuario) => {
        return (
          <LinhaUsuario key={usuario.id} usuario={usuario}/>
        )
      })}
    </div>
  )
}