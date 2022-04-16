



export default function LoginPatient() {
    return (
        <>
            <input
                type="text"
                placeholder="E-mail ou número de protocolo"
            />
            <input
                type="text"
                placeholder="Senha"
            />
            <button>Entrar</button>
            <div className="links-content">
                    <h5>Não tem cadastro?</h5>
                    <div className="links-position">
                        <a href="#">Cadastre-se</a>
                        <a href="#">Esqueci minha senha</a>
                    </div>
                </div>
        </>
    )
}