import React, { FC, useState } from "react";
import { useRecoilState } from "recoil";
import FiltersPane from "../../atoms/FiltersPane";

import { ReactComponent as ArrowSVG } from "../../assets/icons/down-arrow.svg";

import {
  FiltersStyles,
  FiltersContainer,
  Filter,
  FilterTitle,
  Footer,
  DropdownStyles,
  DropdownItems,
  DropdownItem,
  DropdownHeader
} from "./styles";

type IDropdownItem = {
  title: string,
  selected?: boolean,
  onClick: () => void
};

type IDropdownProps = {
  placeholder: string,
  items: IDropdownItem[],
  selectMultiple?: boolean
};

const Dropdown: FC<IDropdownProps> = ({
  placeholder,
  items,
  selectMultiple = false
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onItemClick = (item: IDropdownItem) => {
    item.onClick();

    !selectMultiple && setExpanded(false);
  };

  return (
    <DropdownStyles onClick={() => setExpanded(!expanded)}>
      <DropdownHeader>
        <div>
          <span>{placeholder}</span>
        </div>
        <div style={{ marginLeft: "auto", marginTop: "5px" }}>
          <ArrowSVG fill="gray" height="20px" width="20px"/>
        </div>
      </DropdownHeader>
      {
        expanded
        &&
        <DropdownItems>
          {items.map(item =>
            <DropdownItem key={item.title} onClick={() => onItemClick(item)}>
              <span style={{
                fontWeight: item.selected ? "bold" : "normal"
              }}>
                {item.title}
              </span>
            </DropdownItem>
          )}
        </DropdownItems>
      }
    </DropdownStyles>
  )
};

const FiltersPanel: FC = () => {
  const [filtersPane] = useRecoilState(FiltersPane);

  //TODO: actions and selected
  const years: IDropdownItem[] = [
    {
      title: "2016",
      selected: true,
      onClick: () => {}
    },
    {
      title: "2017",
      onClick: () => {}
    },
    {
      title: "2018",
      onClick: () => {}
    }
  ];
  const severinites: IDropdownItem[] = [];

  return (
    <FiltersStyles
      className="material-pane"
      style={{ marginLeft: filtersPane ? "0" : "-300px" }}
    >
      <FiltersContainer>
        <Filter>
          <FilterTitle>
            <h5>Select a single year</h5>
          </FilterTitle>
          <Dropdown placeholder="Select year" items={years} />
        </Filter>
        <Filter>
          <FilterTitle>
            <h5>Select multiple severities</h5>
          </FilterTitle>
          <Dropdown
            placeholder="Select severity"
            items={severinites}
            selectMultiple
          />
        </Filter>
      </FiltersContainer>
      <Footer/>
    </FiltersStyles>
  );
};

export default FiltersPanel;