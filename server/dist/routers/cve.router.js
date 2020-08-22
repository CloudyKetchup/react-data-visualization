"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = "/cve";
const router = express_1.default.Router();
const byYearAndSeverity = (severities, year) => __awaiter(void 0, void 0, void 0, function* () {
    const cveItems = require("../../assets/CVE.json").CVE_Items;
    if (severities.length > 0) {
        const bySeverities = cveItems.filter(item => {
            var _a, _b;
            return severities.includes((_b = (_a = item.impact) === null || _a === void 0 ? void 0 : _a.baseMetricV2) === null || _b === void 0 ? void 0 : _b.severity);
        });
        if (year) {
            return bySeverities.filter(item => { var _a; return ((_a = item.publishedDate) === null || _a === void 0 ? void 0 : _a.substring(0, 4)) === year; });
        }
        return bySeverities;
    }
    if (year) {
        return cveItems.filter(item => { var _a; return ((_a = item.publishedDate) === null || _a === void 0 ? void 0 : _a.substring(0, 4)) === year; });
    }
    return (yield all());
});
const all = () => __awaiter(void 0, void 0, void 0, function* () {
    const { CVE_Items } = require("../../assets/CVE.json");
    return CVE_Items;
});
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { severities, year } = req.body;
    return res.status(200).json(yield byYearAndSeverity(severities || [], year));
}));
router.get("/all", (_req, res) => __awaiter(void 0, void 0, void 0, function* () { return res.status(200).json(yield all()); }));
module.exports = { router, path };
//# sourceMappingURL=cve.router.js.map