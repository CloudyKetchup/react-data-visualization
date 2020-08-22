import React, { useState, FC } from "react";

import {
  DropdownStyles,
  DropdownItems,
  DropdownItem,
  DropdownHeader
} from "./styles";

import { ReactComponent as ArrowSVG } from "../../assets/icons/down-arrow.svg";

export type IDropdownItem = {
  title: string,
  selected?: boolean,
  onClick: () => void
};

type IDropdownProps = {
  placeholder: string,
  items: IDropdownItem[],
  selectMultiple?: boolean
};

export const Dropdown: FC<IDropdownProps> = ({
  placeholder,
  items,
  selectMultiple = false
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

	/***
	 * Dropdown item click action
	 *
	 * @param {IDropdownItem} item		which item was clicked
	 * */
  const onItemClick = (item: IDropdownItem) => {
    item.onClick();

		// dropdown menu doesn't have selectMultiple flag, collapse it
    !selectMultiple && setExpanded(false);
  };

  return (
    <DropdownStyles>
      <DropdownHeader onClick={() => setExpanded(!expanded)}>
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

export default Dropdown;
