



export default function Login({ show, handleClick, errors, register, currentLogin }) {
    return (
        <>
            <input
                type="text"
                placeholder={currentLogin === "paciente" ? "E-mail ou número de protocolo" : "Insira seu e-mail corporativo"}
                className={`${errors.email && "invalid"}`}
                {...register("email", {
                    required: true,
                    pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
                })}
            />
            {errors?.email?.type === "required" && <p className="errorMsg">*Campo obrigatório!</p>}
            {errors?.email?.type === "pattern" && <p className="errorMsg">Insira um formato de E-mail válido.</p>}

            <div className="password-group">
                <input
                    type={show ? "text" : "password"}
                    placeholder="Senha"
                    className={`${errors.password && "invalid"}`}
                    {...register("password",{
                        required:true,
                        minLength: 8
                    })}
                />
                {show ? (
                    <i className="fas fa-eye" onClick={handleClick} />
                ) : (
                    <i className="fas fa-eye-slash" onClick={handleClick} />
                )}
            </div>
            {errors?.password?.type ==="required" && <p className="errorMsg">*Campo obrigatório</p>}
            {errors?.password?.type ==="minLength" && <p className="errorMsg">A senha deve conter no mínimo 8 caracteres</p>}

            <button type="submit">Entrar</button>
            <div className="links-content">
                {currentLogin === "paciente" ? <h5> Não tem cadastro?</h5> : ""}
                <div className="links-position">
                    {currentLogin==="paciente"  ? <a href="#">Cadastre-se</a> : ""}
                    <a href="#">Esqueci minha senha</a>
                </div>
            </div>
        </>
    )
}