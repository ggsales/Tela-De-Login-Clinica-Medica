import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/dist/client/link";




export default function FormRegister() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const onSubmit = data => {
        alert(JSON.stringify(data));
        setEmail("")
        setPassword("")
    }

    const handleClick = (e) => {
        setShow(!show)
        e.preventDefault()

    }

    return (

        <>
            <div className="formWrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="box-arrow">
                        <Link href={"/"}><a className="fas fa-chevron-left arrow-left"></a></Link>
                    </div>
                    <div className="box-title container">
                        <i className="fas fa-file-alt"></i>
                        <h2>Cadastro</h2>
                        <h4>Cadastre-se agora para ter acesso em nossa area de exames</h4>
                    </div>
                    <input
                        type="text"
                        placeholder="insira seu nome completo"
                        className={`${errors.name && "invalid"}`}
                        {...register("name", {
                            required: true,
                            minLength: 4
                        })}
                    />
                    {errors?.name?.type === "required" && <p className="errorMsg">*Campo obrigatório!</p>}
                    {errors?.name?.type === "minLength" && <p className="errorMsg">*O numero mínimo de caracteres é 4</p>}

                    <input
                        type="text"
                        placeholder="insira seu e-mail"
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
                </form>
            </div>
        </>
    )
}