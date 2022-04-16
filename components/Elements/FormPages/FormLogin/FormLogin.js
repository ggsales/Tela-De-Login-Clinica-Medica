import { useEffect, useState } from "react"
import LoginDoctor from "./LoginDoctor";
import LoginPatient from "./LoginPatient";





export default function FormLogin() {
    const [currentLogin, setCurrentLogin] = useState("paciente")

    useEffect(() => {
        const HandleCurrentLogin = (login) => {
            setCurrentLogin(login)
        }

    });
    return (
        <div id="formWrapper">
            <form>
                <div className="box-title">
                    <i className="fas fa-notes-medical"></i>
                    <h2>Portal de Exames</h2>
                    <h4>Para ter acesso ao portal de exames, <br />informe abaixo suas credenciais<br /> como paciente ou como médico.</h4>
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
                {currentLogin === "paciente" && <LoginPatient />}
                {currentLogin === "medico" && <LoginDoctor />}
                <div className="links-content">
                    <div className="box-links">
                        <h5>Não tem cadastro?</h5>
                        <div className="links-position">
                            <a href="#">Cadastre-se</a>
                            <a href="#">Esqueci minha senha</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}