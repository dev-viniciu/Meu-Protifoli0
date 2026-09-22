function Header (){
    return(
        <header className = "header" >
        <div
            className = "logo">
            <img className = "logo-icon"src="#" alt="logo"></img>
            <span className="logo-text">Studio Alfa</span>
        </div>
        <nav className="nave"> Nave</nav>
        <a href="#">Inicio</a>
        <a href="#">Servicos</a>
        <a href="#">Sobre</a>
        <a href="#" className="btn-contatos">Contato</a>
        </header>
    )
}
export default Header