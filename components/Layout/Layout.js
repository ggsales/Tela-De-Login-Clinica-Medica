import FormLogin from "../Elements/Form/FormLogin/FormLogin";




export default function Layout({ children }) {
    return (

        <>
            <div className="video-box">
                <video id='videoBG' autoPlay muted loop >
                    <source src='assets/videos/bg.mp4' type='video/mp4' />
                </video>

                <div className="overlay-bg">
                    <div className="box-title desktop-hide container">
                        <i className="fas fa-notes-medical"></i>
                        <h2>Portal de Exames</h2>
                        <h4>Para ter acesso ao portal de exames, informe abaixo suas credenciais como paciente ou como médico.</h4>
                    </div>
                </div>
                <div className="mobile-hide">
                    <FormLogin/>
                </div>
               
            </div>


        </>
    )
}