import express from "express";
import { CVE, Severity } from "../models/CVE";

const path 		= "/cve";
const router 	= express.Router();

/**
 * Get CVE records by year and severities filters
 *
 * @param {Severity} severities		severities list
 * @param {string} year 					which year CVE records to get
 * @return {Array} of CVE models
 * */
const byYearAndSeverity = async (severities: Severity[], year?: string) => {
  const cveItems = (require("../../assets/CVE.json").CVE_Items as CVE[]);

  if (severities.length > 0)
  {
		// get severities by filter list
    const bySeverities = cveItems.filter(item => {
      return severities.includes(item.impact?.baseMetricV2?.severity);
    });

		// filter records from the year if it's present
    if (year)
    {
      return bySeverities.filter(item => item.publishedDate?.substring(0, 4) === year);
    }
    return bySeverities;
  }
  if (year)
  {
    return cveItems.filter(item => item.publishedDate?.substring(0, 4) === year);
  }
  return (await all());
};

const all = async () => {
  const { CVE_Items } = require("../../assets/CVE.json");

  return (CVE_Items as CVE[]);
}

router.post("/", async (req, res) => {
  const { severities, year } = req.body;

  return res.status(200).json(await byYearAndSeverity(severities || [], year));
});

router.get("/all", async (_req, res) => res.status(200).json(await all()));

module.exports = { router, path };
