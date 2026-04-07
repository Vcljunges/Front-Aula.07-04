import { Autor } from "../components/autor"

export default function Renderizar() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
       <Autor frase="LESGO" autor="Eu mesmo"/>
    </div>
  );
}
