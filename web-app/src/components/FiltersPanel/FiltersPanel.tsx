import React, { FC } from "react";

import { useRecoilState } from "recoil";
import FiltersPane        from "../../atoms/FiltersPane";
import { GraphDataAtom }  from "../../atoms/GraphData";
import { YearsFilterAtom, SeveritiesFilterAtom } from "../../atoms/Filters";
import { Severity } from "../../models/CVE";

import YearsFilter      from "./YearsFilter";
import SeveritiesFilter from "./SeverinitiesFilter";

import { getByFilters } from "../../api/GraphApi";

import {
  FiltersStyles,
  FiltersContainer,
  Footer,
  GenerateGraph,
} from "./styles";

const FiltersPanel: FC = () => {
  const [filtersPane]       = useRecoilState(FiltersPane);
  const [yearsFilter]       = useRecoilState(YearsFilterAtom);
  const [severitiesFilter]  = useRecoilState(SeveritiesFilterAtom);
  const [_, setGraphData]   = useRecoilState(GraphDataAtom);

  const generateGraph = async () => {
    const severities = severitiesFilter.map(severity => severity.severity.toUpperCase() as Severity)

    const { data } = await getByFilters({
      severities: severities,
      year: yearsFilter?.year
    })

    data && setGraphData({ data: data });
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