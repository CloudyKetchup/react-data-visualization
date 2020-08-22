export type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
export type DescriptionData = {
  lang: string,
  value: string
};

export type CVE = {
  cve : {
    data_type: string,
    data_format: string,
    data_version: string,
    CVE_data_meta: {
      ID: string,
      ASSIGNER: string
    },
    description: {
      description_data: DescriptionData[]
    }
  },
  impact: {
    baseMetricV2: {
      severity: Severity
    }
  },
  publishedDate: string,
  lastModifiedDate: string
};