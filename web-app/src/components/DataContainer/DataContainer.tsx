import React, { FC, useEffect } from "react";

import { useRecoilState } from "recoil";
import FiltersPane        from "../../atoms/FiltersPane";

import TableGraph from "../TableGraph/TableGraph";
import LineGraph  from "../LineGraph/LineGraph";

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