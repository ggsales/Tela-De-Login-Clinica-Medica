



export default function LoginDoctor() {
    return (
        <>
            <input
                type="text"
                placeholder="Insira seu e-mail corporativo"
            />
            <input
                type="text"
                placeholder="Senha"
            />
            <button>Entrar</button>
            <div className="links-content">
                    <div className="links-position">
                        <a href="#">Esqueci minha senha</a>
                    </div>
                </div>
        </>
    )
}