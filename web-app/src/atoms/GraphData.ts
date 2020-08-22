import { atom } from "recoil";
import { CVE } from "../models/CVE";

type IGraphData = { data: CVE[] };

const GraphDataAtom = atom<IGraphData | undefined>({
  key: "GraphData",
  default: undefined
})

const SearchGraphAtom = atom<IGraphData | undefined>({
  key: "SearchGraph",
  default: undefined
});

export { GraphDataAtom, SearchGraphAtom };