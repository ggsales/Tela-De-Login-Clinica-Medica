import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/dist/client/link";


export default function FormForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");

    const onSubmit = data => {
        alert(JSON.stringify(data));
        setEmail("")
    }


    return (

            <div className="formWrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="box-arrow">
                        <Link href={"/"}><a className="fas fa-chevron-left arrow-left"></a></Link>
                    </div>
                    <div className="box-title  container">
                        <i className="fas fa-key"></i>
                        <h2>Redefinição de Senha</h2>
                        <h4>informe abaixo o e-mail inicialmente cadastrado em nosso site.</h4>
                    </div>
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

                    <button type="submit">Entrar</button>
                </form>
            </div>
    )
}