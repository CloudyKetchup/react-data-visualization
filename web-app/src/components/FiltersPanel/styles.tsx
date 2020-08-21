import styled from "styled-components";

const FiltersStyles = styled.div`
  height: 100%;
  width: 300px;
  float: left;
  background: white;
  transition: 0.2s;
  position: relative;
`;

const FiltersContainer = styled.div`
  display: grid;
  top: 0;
  height: calc(100% - 100px);
  width: 100%;
  position: absolute;
`;

const Filter = styled.div`
  padding: 20px;
  padding-left: 50px;
  width: calc(100% - 40px);
`;

const FilterTitle = styled.div`
  width: 100%;
`;

const Footer = styled.div`
  width: 100%;
  height: 100px;
  padding: 40px;
  padding-top: 0;
  padding-bottom: 0;
  bottom: 0;
  position: absolute;
`;

const GenerateGraph = styled.button`
  background: #34aeeb;
  height: 40px;
  width: calc(100% - 80px);
  color: white;
  font-weight: 500px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.25);
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.25);
  }
`;

export {
  FiltersStyles,
  FiltersContainer,
  Filter,
  FilterTitle,
  Footer,
  GenerateGraph,
};