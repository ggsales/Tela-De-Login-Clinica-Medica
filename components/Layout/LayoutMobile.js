import { useRouter } from "next/router";
import FormLogin from "../Elements/Form/FormPages/FormLogin";
import FormForgotPassword from "../Elements/Form/FormPages/FormForgotPassword";
import FormRegister from "../Elements/Form/FormPages/FormRegister";
import { useState, useEffect } from "react";


export default function LayoutMobile(children) {
    const routers = useRouter()
    const { slugMobile } = routers.route

    console.log(slugMobile)



    return (
        <>
      

        </>
    )
}