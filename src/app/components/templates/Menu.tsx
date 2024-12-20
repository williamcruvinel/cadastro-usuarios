import { IconHome, IconUser } from "@tabler/icons-react"
import MenuItem from "./MenuItem"

export default function Menu(){
  return(
    <aside className="w-72 bg-zinc-900 h-screen">
      <nav className="flex flex-col gap-1 py-7">
       <MenuItem icone={IconHome} texto={"Início"} url="/"/>
       <MenuItem icone={IconUser} texto={"Cadastro Usuários"} url="/usuarios"/>
      </nav>
    </aside>
  )
}