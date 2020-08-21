import React, { FC } from "react";
import styled from "styled-components";
import FiltersPane from "../../atoms/FiltersPane";
import { useRecoilState } from "recoil";

const DataContainerStyles = styled.div`
  height: 100%;
  float: right;
  background: white;
  transition: 0.2s;
`;

const DataContainer: FC = props => {
  const [filtersPane] = useRecoilState(FiltersPane);

  return (
    <DataContainerStyles
      className="material-pane"
      style={{ width: filtersPane ? "calc(100% - 310px)" : "100%" }}
    >

    </DataContainerStyles>
  )
};

export default DataContainer;