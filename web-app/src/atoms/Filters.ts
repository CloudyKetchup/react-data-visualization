import { atom } from "recoil";
import { YearFilter, SeverityFilter } from "../models/Filter";

export const SeveritiesFilterAtom = atom<SeverityFilter[]>({
  key: "SeverinityFilters",
  default: []
})

export const YearsFilterAtom = atom<YearFilter | undefined>({
  key: "YearFilters",
  default: undefined
});