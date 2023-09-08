import http from "../helpers/http-common.helper";
import {httpRequestConfig} from "../helpers/auth-header";

/**
 * @param paymentOptions Payment details
 * @description Payment details to initiate PayNow
 */
export const initiatePayment = async (paymentOptions) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.post(`/api/pay/initiate/`, paymentOptions, config);
}

/**
 * @description Retrieve Policy Transactions for a user
 */
export const getTransactions = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/policy/get-transactions/`, config);
}