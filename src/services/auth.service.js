import http from "../helpers/http-common.helper";
import {httpRequestConfig} from "@/helpers/auth-header";

/**
 * @param payload Registration Data
 * @description Register new user
 */
export const registerUser = async (payload) => {
    return http.post(`/api/auth/register/`, payload, {});
}

/**
 * @param payload Login details
 * @description Login an existing user
 */
export const loginUser = async (payload) => {
    return http.post(`/api/auth/login/`, payload, {});
}

/**
 * @param payload Reset Password Details
 * @description Reset Password Request
 */
export const forgotPassword = async (payload) => {
    return http.post(`/api/auth/reset_password/`, payload, {});
}

/**
 * @param payload Password reset details
 * @description New user password reset
 */
export const userPasswordReset = async (payload) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.post(`/api/auth/update_password/`, payload, config);
}