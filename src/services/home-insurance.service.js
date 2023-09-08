import http from "@/helpers/http-common.helper";

import {httpRequestConfig} from "@/helpers/auth-header";

/**
 * @description Retrieve Home Insurance Periods
 */
export const getInsurancePeriods = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/homeinsurance/periods/`, config);
}

/**
 * @description Retrieve Construction Types
 */
export const getConstructionTypeOptions = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/homeinsurance/construction-types/`, config);
}

/**
 * @description Retrieve Roof Types
 */
export const getRoofTypeOptions = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/homeinsurance/roof-types/`, config);
}

/**
 * @param quoteOptions Quote Options
 * @description Submit Home Insurance Quote Options
 */
export const submitHomeInsuranceQuote = async (quoteOptions) => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.post(`/api/homeinsurance/quote/`, quoteOptions, config);
}

/**
 * @description Get Houses
 */
export const getHouses = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/homeinsurance/get-house/`, config);
}