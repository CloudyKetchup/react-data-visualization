import styled from "styled-components";

const DropdownStyles = styled.div`
  width: 70%;
  display: block;
  position: relative;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #c2c5c8;
  }
`;

const DropdownItems = styled.div`
  position: absolute;
  background: white;
  width: 100%;
  -webkit-box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.35);
  -moz-box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.35);
  box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.35);
`;

const DropdownHeader = styled.div`
  display: flex;
  line-height: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 4px;
  padding-top: 7px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`;

export {
  DropdownStyles,
  DropdownItem,
  DropdownItems,
  DropdownHeader
};