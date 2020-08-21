import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import FiltersPane from "../../atoms/FiltersPane";

const FiltersStyles = styled.div`
  height: 100%;
  width: 300px;
  float: left;
  background: white;
  transition: 0.2s;
`;

const FiltersPanel = () => {
  const [filtersPane] = useRecoilState(FiltersPane);

  return (
    <FiltersStyles
      className="material-pane"
      style={{ width: filtersPane ? "300px" : "0" }}
    >

    </FiltersStyles>
  );
};

export default FiltersPanel;