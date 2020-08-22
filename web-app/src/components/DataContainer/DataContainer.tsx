import React, { FC, useEffect } from "react";

import { useRecoilState } from "recoil";
import FiltersPane        from "../../atoms/FiltersPane";
import { YearsFilterAtom, SeveritiesFilterAtom } from "../../atoms/Filters";
import { GraphDataAtom } from "../../atoms/GraphData";

import TableGraph from "../TableGraph/TableGraph";
import LineGraph  from "../LineGraph/LineGraph";

import { all } from "../../api/GraphApi";

import styled from "styled-components";

const DataContainerStyles = styled.div`
  display: grid;
  grid-gap: 20px;
  height: 100%;
  padding: 20px;
  float: right;
  background: white;
  transition: 0.2s;
`;

const DataContainer: FC = () => {
  const [filtersPane] = useRecoilState(FiltersPane);
  const [graphData, setGraphData] = useRecoilState(GraphDataAtom);
  const [severitiesFilter] = useRecoilState(SeveritiesFilterAtom);
  const [yearsFilter] = useRecoilState(YearsFilterAtom);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await all();

      if (data)
      {
        setGraphData({ data: data });
      }
    };

    fetch();
  }, []);

  return (
    <DataContainerStyles
      className="material-pane"
      style={{ width: filtersPane ? "calc(100% - 350px)" : "calc(100% - 40px)" }}
    >
      <TableGraph/>
      <LineGraph/>
    </DataContainerStyles>
  )
};

export default DataContainer;