import { useState } from 'react'

function Home(){
    return (
        <>
            <div>Olá, Mundo! </div>
            <Contador />
        </>
    )
}

function Contador(){
    const [contador,setContador] = useState(0)

    function adicionarContador(){
        setContador(contador + 1)
    }
    return (
        <>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </>
    )
}

export default Home