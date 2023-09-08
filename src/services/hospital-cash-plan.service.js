import http from "../helpers/http-common.helper";

import {httpRequestConfig} from "../helpers/auth-header";

/**
 * @param currency Currency
 * @description Retrieve Packages by Currency
 */
export const getHCPPackages = async (currency) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/hcp/get-packages/${currency}`, config);
}

/**
 * @param packageId Package ID
 * @description Retrieve Group by Package Id
 */
export const getHCPGroupByPackage = async (packageId) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/hcp/get-groups/${packageId}`, config);
}

/**
 * @param quoteOptions Quote Options
 * @description Submit Quote Options
 */
export const getHCPQuote = async (quoteOptions) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.post(`/api/hcp/get-quote`, quoteOptions, config);
}

/**
 * @description Get HCP dependants
 */
export const getDependents = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/hcp/get-dependants`, config);
}