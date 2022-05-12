import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/dist/client/link";




export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [formSucess, setSucess] = useState(false)

    const onSubmit = data => {
        setEmail("")
        setPassword("")
        setSucess(!formSucess)
    }

    const handleClick = (e) => {
        setShow(!show)
        e.preventDefault()

    }

    return (

        <>
            <div className="formWrapper">
                {!formSucess && <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="box-arrow">
                        <Link href={"/"}><a className="fas fa-chevron-left arrow-left"></a></Link>
                    </div>
                    <div className="box-title container">
                        <i className="fas fa-file-alt"></i>
                        <h2>Cadastro</h2>
                        <h4>Cadastre-se agora para ter acesso em nossa área de exames.</h4>
                    </div>
                    <input
                        type="text"
                        placeholder="insira seu nome completo"
                        className={`mb-30 ${errors.name && "invalid"}`}
                        {...register("name", {
                            required: true,
                            minLength: 4
                        })}
                    />
                    <div className="container">
                        {errors?.name?.type === "required" && <p className="errorMsg">*Campo obrigatório!</p>}
                        {errors?.name?.type === "minLength" && <p className="errorMsg">*O numero mínimo de caracteres é 4</p>}
                    </div>

                    <input
                        type="text"
                        placeholder="insira seu e-mail"
                        className={` mb-30 ${errors.email && "invalid"}`}
                        {...register("email", {
                            required: true,
                            pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
                        })}
                    />
                    <div className="container">
                        {errors?.email?.type === "required" && <p className="errorMsg">*Campo obrigatório!</p>}
                        {errors?.email?.type === "pattern" && <p className="errorMsg">Insira um formato de E-mail válido.</p>}
                    </div>

                    <div className="password-group-2">
                        <input
                            type={show ? "text" : "password"}
                            placeholder="Senha"
                            className={`mb-30 ${errors.password && "invalid"}`}
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
                    <div className="container">
                        {errors?.password?.type === "required" && <p className="errorMsg">*Campo obrigatório</p>}
                        {errors?.password?.type === "minLength" && <p className="errorMsg">A senha deve conter no mínimo 8 caracteres</p>}
                    </div>


                    <button type="submit">Entrar</button>
                </form>}
                {formSucess &&
                    <div className="box-sucess">
                        <div className="box-arrow">
                            <Link href={"/"}><a className="fas fa-chevron-left arrow-left"></a></Link>
                        </div>
                        <i className="fas fa-check-circle" />
                        <div className="container">
                            <p>Cadastro realizado com sucesso! retorne para fazer o login.</p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}