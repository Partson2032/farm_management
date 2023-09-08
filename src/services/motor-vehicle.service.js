import http from "../helpers/http-common.helper";

import { httpRequestConfig } from "../helpers/auth-header";

/**
 * @param vehicleType Vehicle type
 * @description Retrieve motor vehicle uses based on type
 */
export const getMotorVehicleUses = async (vehicleType) => {
    const authHeader = await httpRequestConfig();
    const config = { headers: authHeader };
    return http.get(`/api/motor/vehicle_use/?vehicle_type=${vehicleType}`, config);
}

/**
 * @description Retrieve motor vehicle insurance periods
 */
export const getInsuranceDurations = async () => {
    const authHeader = await httpRequestConfig();
    const config = { headers: authHeader };
    return http.get(`/api/motor/periods/`, config);
}

/**
 * @param insuranceOptions Insurance Details
 * @description Get Motor Vehicle licensing third party quote
 */
export const getThirdPartyInsuranceQuote = async (insuranceOptions) => {
    const authHeader = await httpRequestConfig();
    const config = { headers: authHeader };
    return http.post(`/api/motor/thirdparty/`, insuranceOptions, config);
}

/**
 * @param insuranceOptions Insurance Details
 * @description Get Combined Motor vehicle licencing quote
 */
export const getCombinedInsuranceQuote = async (insuranceOptions) => {
    const authHeader = await httpRequestConfig();
    const config = { headers: authHeader };
    return http.post(`/api/motor/combined/`, insuranceOptions, config);
}

/**
 * @param insuranceOptions Insurance Details
 * @description Get Motor Vehicle Licensing quote
 */
export const getVehicleLicensingQuote = async (insuranceOptions) => {
    const authHeader = await httpRequestConfig();
    const config = { headers: authHeader };
    return http.post(`/api/motor/licensing/`, insuranceOptions, config);
}

/**
 * @param insuranceOptions Insurance Details
 * @description Get Motor Vehicle Comprehensive Cover quote
 */
export const getComprehensiveCoverQuote = async (insuranceOptions) => {
    const authHeader = await httpRequestConfig();
    const config = { headers: authHeader };
    return http.post(`/api/motor/comprehensive/`, insuranceOptions, config);
}

/**
 * @param vehicleDetails Motor Vehicle Details
 * @description Save New Motor Vehicle Details
 */
export const registerMotorVehicle = async (vehicleDetails) => {
    const authHeader = await httpRequestConfig();
    const config = { headers: authHeader };
    return http.post(`/api/vehicle/register-vehicle/`, vehicleDetails, config);
}


/**
 * @description Get List of Motor Vehicles
 */
export const getCars = async () => {
    const authHeader = await httpRequestConfig();
    const config = {headers: authHeader};
    return http.get(`/api/vehicle/get-vehicles/`, config);
}
