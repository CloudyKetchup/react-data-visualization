import React, { FC } from "react";

import { useRecoilState } from "recoil";
import { GraphDataAtom, SearchGraphAtom } from "../../atoms/GraphData";

import { AgGridReact } from 'ag-grid-react';

import styled from "styled-components";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const TableGraphStyles = styled.div`
  height: 40vh;
  width: 100%;
  overflow: auto;
`;

const TableGraph: FC = () => {
  const [graphData] = useRecoilState(GraphDataAtom);
  const [searchGraph] = useRecoilState(SearchGraphAtom);
	// display search data as priority
  const dataSource = searchGraph || graphData;
  const columns = [
    { headerName: "CVE ID", field: "id", sortable: true },
    { headerName: "PUBLISHED DATE", field: "published_date", sortable: true },
    { headerName: "SEVERITY", field: "severity", sortable: true },
    { headerName: "DESCRIPTION", field: "description" }
  ];
	// populate rows with cve data
  const rows = dataSource?.data.map(({ cve, impact, publishedDate }) => ({
    id: cve.CVE_data_meta.ID,
    published_date: publishedDate,
    severity: impact.baseMetricV2?.severity,
    description: cve.description.description_data[0].value
  }));
 
  return (
    <TableGraphStyles className="ag-theme-alpine">
      <AgGridReact
        columnDefs={columns}
        rowData={rows}
      />
    </TableGraphStyles>
  );
}

export default TableGraph;
