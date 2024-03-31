import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="icons">
                <img className="icon" src="/imagens/fb.png" alt="Facebook Organo" />
                <img className="icon" src="/imagens/ig.png" alt="Instagram Organo" />
                <img className="icon" src="/imagens/tw.png" alt="Twitter Organo" />
            </div>
            <img className="logo" src="/imagens/logo.png" alt="Organo" />
            <p>Feito por <a href="
            https://www.linkedin.com/in/lucas-alkmim-594087277/" target="_blank">Lucas Alkmim Barros</a></p>
        </footer>
    )
}

export default Rodape;