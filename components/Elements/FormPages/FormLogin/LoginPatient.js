



export default function LoginPatient({ show, handleClick }) {
    return (
        <>
            <input
                type="text"
                placeholder="E-mail ou número de protocolo"
            />
            <div className="password-group">
                <input
                    type={show ? "text" : "password"}
                    placeholder="Senha"
                />
                {show ? (
                    <i className="fas fa-eye" onClick={handleClick} />
                ) : (
                    <i className="fas fa-eye-slash" onClick={handleClick} />
                )}
            </div>
            <button type="submit">Entrar</button>
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