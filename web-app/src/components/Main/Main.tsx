import React, { FC } from "react";

import styled from "styled-components";
import DataContainer from "../DataContainer/DataContainer";
import FiltersPanel from "../FiltersPanel/FiltersPanel";
import { FiltersProvider } from "../../context/FiltersContext";
import Header from "../Header/Header";

const Main = styled.div`
  background: #e6e9ed;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const MainContainer: FC = () => (
  <Main>
    <Header/>
    <div style={{
      height: "calc(100% - 50px)",
      width: "100%",
      marginTop: "50px",
      paddingTop: "10px",
    }}>
      <FiltersProvider>
        <FiltersPanel />
        <DataContainer />
      </FiltersProvider>
    </div>
  </Main>
);

export default MainContainer;