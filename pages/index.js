let firstName = document.window.prompt("Por favor, coloque seu nome:");

function Home() {
    return <h1>Oi {{firstName}}, aqui é o Matheus.</h1>;
}

export default Home;