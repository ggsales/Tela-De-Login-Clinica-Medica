
import FormLogin from "../Elements/Form/FormPages/FormLogin";
import { useRouter } from "next/router"
import FormForgotPassword from "../Elements/Form/FormPages/FormForgotPassword";
import FormRegister from "../Elements/Form/FormPages/FormRegister";



export default function Layout({ children }) {
    const router = useRouter()
    const { slug } = router.query


    return (

        <>
            <div className="video-box">
                <video id='videoBG' muted autoPlay playsInline loop preload="none">
                    <source src='assets/videos/bg.mp4' type='video/mp4'  />
                </video>

                <div className="overlay-bg">
                    <div className="box-title__2 desktop-hide container">
                        <i className="fas fa-notes-medical"></i>
                        <h2>Portal de Exames</h2>
                    </div>
                </div>
                <div className="mobile-hide">
                  {slug === undefined && <FormLogin/>}
                  {slug === "esqueci-senha" && <FormForgotPassword/>}
                  {slug === "cadastro" && <FormRegister/>}
                </div>

                <div className="layout-form-mobile desktop-hide">
                {slug === undefined && <FormLogin />}
                {slug === "esqueci-senha" && <FormForgotPassword />}
                {slug === "cadastro" && <FormRegister />}
            </div>

            </div>


        </>
    )
}