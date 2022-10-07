// import axios from "axios";
// import { BASE_URL_SERVER } from "../config/server";

// const API_ENDPOINT = {
//     ACCOUNT_LOGIN: '/api/v1/accounts/login',
//     ACCOUNT_REGISTER: "/api/v1/accounts/register",
//     ACCOUNT_CREATE: "/api/v1/accounts/register",
//     ACCOUNT_LIST: "/api/v1/accounts/list",
// }
// class AccountService {
//     accountLogin = async (data) => {
//         return await axios.post(BASE_URL_SERVER + API_ENDPOINT.ACCOUNT_LOGIN, data)
//     }

//     accountRegister = async (data) => {
//         return await axios.post(BASE_URL_SERVER + API_ENDPOINT.ACCOUNT_REGISTER, data)
//     }

//     accountList = async (data) => {
//         return await axios.get(BASE_URL_SERVER + API_ENDPOINT.ACCOUNT_LIST, data)
//     }

//     accountCreate = async (data) => {
//         return await axios.post(BASE_URL_SERVER + API_ENDPOINT.ACCOUNT_CREATE, data)
//     }
// }

// const accountService = new AccountService();
// export default accountService;