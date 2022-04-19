import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import Login from "../FormPages/Login";






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
        <div id="formWrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="box-title mobile-hide container">
                    <i className="fas fa-notes-medical"></i>
                    <h2>Portal de Exames</h2>
                    <h4>Para ter acesso ao portal de exames, informe abaixo suas credenciais como paciente ou como médico.</h4>
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
                {currentLogin && <Login show={show} handleClick={handleClick} errors={errors} register={register} currentLogin={currentLogin} />}
             
            </form>
        </div>

    )
}