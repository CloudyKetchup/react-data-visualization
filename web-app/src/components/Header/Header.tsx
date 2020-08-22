import React, { FC } from "react";
import styled from "styled-components";

import { useRecoilState } from "recoil";
import FiltersPane        from "../../atoms/FiltersPane";
import { GraphDataAtom, SearchGraphAtom } from "../../atoms/GraphData";

import { ReactComponent as SearchSVG } from "../../assets/icons/search.svg";
import "./header.css";

const HeaderStyles = styled.div`
  top: 0;
  width: 100%;
  height: 50px;
  background: #34aeeb;
  position: fixed;
  z-index: 2;
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55);
`;

const Toggler: FC = () => {
  const [filtersPane, setFiltersPane] = useRecoilState(FiltersPane);

  const onToggle = () => setFiltersPane(!filtersPane);

  return (
    <div className="filter-toggle-button" onClick={onToggle}>
      <div style={{ float: filtersPane ? "right" : "left" }}/>
    </div>
  );
}

const Header: FC = () => {
  const [graphData] = useRecoilState(GraphDataAtom);
  const [__, setSearchGraph] = useRecoilState(SearchGraphAtom);
  let timeout: number;

  const onSearch = async () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const input = document.getElementById("cve-search") as HTMLInputElement;
      const search = input.value;

      if (search.length > 4)
      {
        const cve = graphData?.data.filter(cve => cve.cve.CVE_data_meta.ID === search);

        cve && setSearchGraph({ data: cve });
      } else {
        setSearchGraph(undefined);
      }
    }, 500);
  };

  return (
    <HeaderStyles>
      <div id="header-container">
        <div className="logo">
          <span>CVE Analysis</span>
        </div>
        <div className="search">
          <div>
            <SearchSVG
              fill="gray"
              height="15px"
              width="15px"
            />
          </div>
          <div>
            <input
              id="cve-search"
              type="text"
              onChange={onSearch}
              placeholder="Search by CVE ID"
            />
          </div>
        </div>
        <div className="filter-toggle">
          <div>
            <span>Show/Hide Filters</span>
          </div>
          <div>
            <Toggler/>
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
}

export default Header;