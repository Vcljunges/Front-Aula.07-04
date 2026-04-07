type Props = {
    name: string;
    avatar: string;
    roles: string[];
    address?: string; //? = parâmetro opcional
    phone: string;
}

export const Person = (props: Props) => {
    return (
        <>
        nome: {props.name} <br/>
        avatar: {props.avatar} <br/>
        phone: {props.phone} <br/>
        roles: {props.roles} <br/>
        address: {props.address} <br/>
        <br/>
        </>
    )
}
