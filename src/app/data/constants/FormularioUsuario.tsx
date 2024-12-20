import InputTesto from "@/app/components/shared/InputTexto";
import { Usuario } from "@/core/model/Usuario";

export interface FormularioUsiarioProps {
  usuario: Usuario
  onChange: (usuario: Usuario) => void
  salvar: () => void
  cancelar: () => void
}

export default function FormularioUsiario(props: FormularioUsiarioProps){
  return(
    <div className="flex flex-col gap-2">
      <InputTesto label="Nome" 
        type="text" 
        value={props.usuario.nome} 
        onChange={(e) => props.onChange?.({...props.usuario, nome: e.target.value})}
      />
      <InputTesto label="E-mail"
        type="email" 
        value={props.usuario.email}
        onChange={(e) => props.onChange?.({...props.usuario, email: e.target.value})}
      />
      <InputTesto label="Senha" 
        type="password" 
        value={props.usuario.senha}
        onChange={(e) => props.onChange?.({...props.usuario, senha: e.target.value})}
      />
      <div className="flex gap-5">
        <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={props.salvar}>Salvar</button>
        <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.cancelar}>Cancelar</button>
      </div>
    </div>
  )
}