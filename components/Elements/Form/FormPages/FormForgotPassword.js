import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/dist/client/link";


export default function FormForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [formSucess, setSucess] = useState(false)


    const onSubmit = data => {
        setEmail("")
        setSucess(!formSucess)
    }


    return (

        <div className="formWrapper">
            {!formSucess && <form onSubmit={handleSubmit(onSubmit)}>
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
                    className={`mb-30 ${errors.email && "invalid"}`}
                    {...register("email", {
                        required: true,
                        pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
                    })}
                />
                <div className="container">
                    {errors?.email?.type === "required" && <p className="errorMsg">*Campo obrigatório!</p>}
                    {errors?.email?.type === "pattern" && <p className="errorMsg">Insira um formato de E-mail válido.</p>}
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
                        <p>Link encaminhado com sucesso ao e-mail cadastrado! Verifique a caixa de entrada.</p>
                    </div>

                </div>
            }
        </div>
    )
}