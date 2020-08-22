import { Severity } from "./CVE";

export type ApiFiltersPost = {
  severities?: Severity[],
  year?: string
};