import axios  from "axios";

const EURECA_AS = "https://eureca.sti.ufcg.edu.br/as-sig";              //"https://pre.ufcg.edu.br:8443/as_scao/as"; 
const EURECA_DAS_SIG = "https://eureca.sti.ufcg.edu.br/das-sig/v1";

// for Eureca Authentication Service
export const api_EAS = axios.create({
    baseURL: EURECA_AS,
    headers: {
        "Content-Type": "application/json",
    },
});

// for Eureca Data Access Service
export const api_EDAS_SIG = axios.create({
    baseURL: EURECA_DAS_SIG,
    headers: {
        "Content-Type": "application/json",
    },
})