import React, { FC } from "react";

import { useRecoilState }   from "recoil";
import { YearsFilterAtom }  from "../../atoms/Filters";

import Dropdown, { IDropdownItem }  from "../Dropdown/Dropdown";
import { Filter, FilterTitle }      from "./styles";

const YearsFilter: FC = () => {
  const [yearFilter, setYearFilter] = useRecoilState(YearsFilterAtom);

  const years = ([
    {
      title: "2016",
      selected: yearFilter?.year === "2016",
      onClick: () => setYearFilter({ year: "2016" })
    },
    {
      title: "2017",
      selected: yearFilter?.year === "2017",
      onClick: () => setYearFilter({ year: "2017" })
    },
    {
      title: "2018",
      selected: yearFilter?.year === "2018",
      onClick: () => setYearFilter({ year: "2018" })
    },
    {
      title: "2019",
      selected: yearFilter?.year === "2019",
      onClick: () => setYearFilter({ year: "2019" })
    },
    {
      title: "2020",
      selected: yearFilter?.year === "2020",
      onClick: () => setYearFilter({ year: "2020" })
    }
  ] as IDropdownItem[]);

  return (
    <Filter>
      <FilterTitle>
        <h5>Select a single year</h5>
      </FilterTitle>
      <Dropdown placeholder="Select year" items={years} />
    </Filter>
  )
};

export default YearsFilter;