import http from "../helpers/http-common.helper";
import {httpRequestConfig} from "../helpers/auth-header";

/**
 * @description Retrieve Policy
 */
export const getPolicy = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/policy/get-policy/`, config);
}