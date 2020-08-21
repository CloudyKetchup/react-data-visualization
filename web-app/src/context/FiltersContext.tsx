import React, { FC, createContext, useState } from "react";
import { SeverinityFilter, YearFilter } from "../models/Filter";

type IContext = {
  severinityFilters: SeverinityFilter[],
  yearFilter?: YearFilter
};

const FiltersContext = createContext<IContext>({
  severinityFilters: []
});

const FiltersConsumer = FiltersContext.Consumer;

/***
 * Wrapper component for Context Provider,
 * 
 * To use the this context you just wrap consumer components
 * on top with this one and consume context via useContext hook
 */
const FiltersProvider: FC = ({ children }) => {
  const [severinityFilters, setSeverinityFilters] = useState<SeverinityFilter[]>([]);
  const [yearFilter, setYearFilter] = useState<YearFilter | undefined>();

  return (
    <FiltersContext.Provider value={{ severinityFilters, yearFilter }}>
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext, FiltersConsumer, FiltersProvider };