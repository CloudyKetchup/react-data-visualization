import { atom } from "recoil";

const FiltersPane = atom<Boolean>({
  key: "FiltersPane",
  default: false
});

export default FiltersPane;