import React, { FC } from "react";

import { useRecoilState } from "recoil";
import FiltersPane        from "../../atoms/FiltersPane";

import YearsFilter      from "./YearsFilter";
import SeveritiesFilter from "./SeverinitiesFilter";

import {
  FiltersStyles,
  FiltersContainer,
  Footer,
  GenerateGraph,
} from "./styles";

const FiltersPanel: FC = () => {
  const [filtersPane] = useRecoilState(FiltersPane);

  const generateGraph = () => {
    //TODO: implement
  };

  return (
    <FiltersStyles
      className="material-pane"
      style={{ marginLeft: filtersPane ? "0" : "-300px" }}
    >
      <FiltersContainer>
        <YearsFilter/>
        <SeveritiesFilter/>
      </FiltersContainer>
      <Footer>
        <GenerateGraph className="material-pane" onClick={generateGraph}>
          Generate Graph
        </GenerateGraph>
      </Footer>
    </FiltersStyles>
  );
};

export default FiltersPanel;