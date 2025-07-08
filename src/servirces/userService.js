import { api_EAS } from "./axios";

export async function login ({username_digitado, password_digitado}) {
   
    const body = {
        credentials: {
            username: username_digitado,
            password: password_digitado
        }
    }
    console.log(body.credentials.username)
    const res_as_EB = await api_EAS.post("/tokens", body)
    console.log(res_as_EB.data)
    sessionStorage.setItem("token-eureca", res_as_EB.data)

    const profile = await api_EAS.post("/profile")
    return res_as_EB
}