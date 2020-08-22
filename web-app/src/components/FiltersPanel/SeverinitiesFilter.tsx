import React, { FC } from "react";

import { useRecoilState }       from "recoil";
import { SeveritiesFilterAtom } from "../../atoms/Filters";
import { SeverityFilter }       from "../../models/Filter";

import Dropdown, { IDropdownItem }  from "../Dropdown/Dropdown";
import { Filter, FilterTitle }      from "./styles";

const SeveritiesFilter: FC = () => {
  const [severitiesFilter, setSeveritiesFilter] = useRecoilState<SeverityFilter[]>(SeveritiesFilterAtom);

  /***
   * Update selected filter
   * If found in the list will remove it, overwhise add it
   * 
   * @param {string} title
   * */ 
  const onFilter = (title: string) => {
    const update = [...severitiesFilter];
    const filter = update.filter(s => s.severity === title)[0];

    // add found this filter, delete it
    if (filter)
    {
      const index = update.findIndex(s => s === filter)

      setSeveritiesFilter([...update.splice(0, index)]);
    // else push to the list
    } else
    {
      update.push({ severity: title } as SeverityFilter);

      setSeveritiesFilter([...update]);
    }
  };

  const severities = ([
    {
      title: "Low",
      onClick: () => onFilter("Low")
    },
    {
      title: "Medium",
      onClick: () => onFilter("Medium")
    },
    {
      title: "High",
      onClick: () => onFilter("High")
    },
    {
      title: "Critical",
      onClick: () => onFilter("Critical")
    }
  ] as IDropdownItem[]).map(severity => {
    severity.selected = severitiesFilter.find(s => s.severity === severity.title) !== undefined;

    return severity;
  });


  return (
    <Filter>
      <FilterTitle>
        <h5>Select multiple severities</h5>
      </FilterTitle>
      <Dropdown placeholder="Select severity" items={severities} selectMultiple/>
    </Filter>
  )
};

export default SeveritiesFilter;