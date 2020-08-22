import axios from "axios";

import { API_URL }        from "./api.config";
import { ApiResponse }    from "../models/ApiResponse";
import { CVE }            from "../models/CVE";
import { ApiFiltersPost } from "../models/ApiFiltersPost";

/***
 * Fetch all CVE's
 *
 * @return {ApiResponse} promise with CVE's array
 * */
export const all = async (): Promise<ApiResponse<CVE[]>> => (
  axios.get(`${API_URL}/cve/all`)
    .then(response => ({ data: response.data }))
    .catch(error => ({ error: error }))
)

/***
 * Fetch CVE's by filters
 *
 * @param {ApiFiltersPost} filters	criterias for filtering
 * @return {ApiResponse} promise with CVE's array
 * */
export const getByFilters = async (filters: ApiFiltersPost): Promise<ApiResponse<CVE[]>> => (
  axios.post(`${API_URL}/cve`, filters)
    .then(response => ({ data: response.data }))
    .catch(error => ({ error: error }))
)
