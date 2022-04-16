import Link from 'next/link' // enrutar sin recargar pagina

export default function Timeline({
    name // es prop
}) {

    return <>
        <h1>
            Timeline of {name}
        </h1>

        <Link href="/">
            Go home
        </Link>
        <p className='hi'>Hi</p>

        <style jsx>{`
            h1 {
                text-align: center;
            }`}
        </style>
    </>
}

Timeline.getInitialProps = () => { // getInitialProps solo funciona en paginas, o sea en vistas y nó en components
    return fetch('http://localhost:3000/api/hello') // url externa, q en este caso está en carpeta api de este proy
        .then(res => res.json())
        // .then(response => {
        //     console.log(response) // en consola de terminal vsc
        //     const {name} = response // {name} prop
        //     return {name}
        // })
}