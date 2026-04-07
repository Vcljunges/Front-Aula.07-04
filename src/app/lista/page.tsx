import { peopleList } from "../data/peopleList";

export default function Lista() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {peopleList.map((pessoa) => (
            <div key={pessoa.id} > {pessoa.name} - {pessoa.profession}</div>     
        ))}
    </div>
  );
}
