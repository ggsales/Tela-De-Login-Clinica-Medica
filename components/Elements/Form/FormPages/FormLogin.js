import Link from "next/link"
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";



export default function FormLogin() {
    const [currentLogin, setCurrentLogin] = useState("paciente");
    const {register, handleSubmit, formState: {errors} } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const onSubmit = data => {
        alert(JSON.stringify(data));
        setPassword("")
        setEmail("")
    }
    const handleClick = (e) => {
        setShow(!show)
        e.preventDefault()
     
    }


    useEffect(() => {
        const HandleCurrentLogin = (login) => {
            setCurrentLogin(login)
        }
    });



    return (
        <div className="formWrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="box-title  container">
                    <i className="fas fa-notes-medical mobile-hide"></i>
                    <h2 className="mobile-hide">Portal de Exames</h2>
                    <h4 className>Para ter acesso ao portal de exames, informe abaixo suas credenciais como paciente ou como médico.</h4>
                </div>

                <div className="btn-grouping">
                    <button
                        onClick={() => setCurrentLogin("paciente")}
                        type="button"
                        className={currentLogin === "paciente" ? "actived" : undefined}>
                        <i className="fas fa-user"></i>
                        Paciente
                    </button>
                    <button
                        onClick={() => setCurrentLogin("medico")}
                        type="button"
                        className={currentLogin === "medico" ? "actived" : undefined}>
                        <i className="fas fa-user-md"></i>
                        Médico
                    </button>
                </div>
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
                        {...register("password", {
                            required: true,
                            minLength: 8
                        })}
                    />
                    {show ? (
                        <i className="fas fa-eye" onClick={handleClick} />
                    ) : (
                        <i className="fas fa-eye-slash" onClick={handleClick} />
                    )}
                </div>
                {errors?.password?.type === "required" && <p className="errorMsg">*Campo obrigatório</p>}
                {errors?.password?.type === "minLength" && <p className="errorMsg">A senha deve conter no mínimo 8 caracteres</p>}

                <button type="submit">Entrar</button>
                <div className="links-content">
                    {currentLogin === "paciente" ? <h5> Não tem cadastro?</h5> : ""}
                    <div className="links-position">
                        {currentLogin === "paciente" ? <Link href="/cadastro">Cadastre-se</Link> : ""}
                        <Link href="/esqueci-senha">Esqueci minha senha</Link>
                    </div>
                </div>
            </form>
        </div>

    )
}