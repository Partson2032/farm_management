import http from "../helpers/http-common.helper";

import {httpRequestConfig} from "../helpers/auth-header";

/**
 * @param currency Currency
 * @description Retrieve Packages by Currency
 */
export const getFCPPackages = async (currency) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/fcp/get-packages/${currency}`, config);
}

/**
 * @param packageId Package ID
 * @description Retrieve Group by Package Id
 */
export const getFCPGroupByPackage = async (packageId) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/fcp/get-groups/${packageId}`, config);
}

/**
 * @param quoteOptions Quote Options
 * @description Submit Quote Options
 */
export const getFCPQuote = async (quoteOptions) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.post(`/api/fcp/get-quote`, quoteOptions, config);
}

/**
 * @description Get Piggery dependants
 */
export const getDependents = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/fcp/get-dependants`, config);
}