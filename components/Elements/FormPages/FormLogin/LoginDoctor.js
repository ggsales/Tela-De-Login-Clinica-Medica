



export default function LoginDoctor({show, handleClick}) {
    return (
        <>
            <input
                type="text"
                placeholder="Insira seu e-mail corporativo"
            />
            <div className="password-group">
                <input
                    type={show ? "text" : "password"}
                    placeholder="Senha"
                />
                {show ? (
                    <i className="fas fa-eye" onClick={handleClick}/>
                )  : (
                    <i className="fas fa-eye-slash" onClick={handleClick}/>
                )}
            </div>

            <button type="submit">Entrar</button>
            <div className="links-content">
                <div className="links-position">
                    <a href="#">Esqueci minha senha</a>
                </div>
            </div>
        </>
    )
}