import { peopleList } from "../data/peopleList";

export default function Filter() {
  const profession = peopleList.filter((pessoa) => pessoa.profession === "Jogador");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {profession.map((pessoa) => (
            <div key={pessoa.id} > {pessoa.name} - {pessoa.profession}</div>     
        ))}
    </div>
  );
}
