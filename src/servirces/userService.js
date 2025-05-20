import { api_EAS } from "./axios";

export async function loginStudent ({username, password}) {
    const body = {
        credentials: {
            username: username,
            password: password
        }
    }
    const res_as_EB = await api_EAS.post("/tokens", body)
    console.log(res_as_EB.data)
    return res_as_EB
}