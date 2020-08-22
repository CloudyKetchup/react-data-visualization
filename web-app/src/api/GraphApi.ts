import axios from "axios";

import { API_URL }        from "./api.config";
import { ApiResponse }    from "../models/ApiResponse";
import { CVE }            from "../models/CVE";
import { ApiFiltersPost } from "../models/ApiFiltersPost";

export const all = async (): Promise<ApiResponse<CVE[]>> => (
  axios.get(`${API_URL}/cve/all`)
    .then(response => ({ data: response.data }))
    .catch(error => ({ error: error }))
)

export const getByFilters = async (filters: ApiFiltersPost): Promise<ApiResponse<CVE[]>> => (
  axios.post(`${API_URL}/cve`, filters)
    .then(response => ({ data: response.data }))
    .catch(error => ({ error: error }))
)