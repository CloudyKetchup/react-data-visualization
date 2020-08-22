import React, { useEffect, useState } from "react";

import { useRecoilState }  from "recoil";
import { YearsFilterAtom } from "../../atoms/Filters";
import { GraphDataAtom, SearchGraphAtom } from "../../atoms/GraphData";

import Highcharts 			from 'highcharts'
import HighchartsReact 	from 'highcharts-react-official'

import styled from "styled-components";

const LineGraphStyles = styled.div`width: 100%;`;

type Series = {
  name: string,
  data: number[]
}

const LineGraph = () => {
  const [graphData]   = useRecoilState(GraphDataAtom);
  const [searchGraph] = useRecoilState(SearchGraphAtom);
  const [yearsFilter] = useRecoilState(YearsFilterAtom);
  const [seriesData, setSeriesData] = useState<Series[]>([])

	// graph data source, in priority is used the search result data
  const dataSource = searchGraph || graphData;
  const years = ["2015", "2016", "2017", "2018", "2019", "2020"];
	// series templates
  const series = [
    {
      name: "Low",
      data: []
    },
    {
      name: "Medium",
      data: []
    },
    {
      name: "High",
      data: []
    },
    {
      name: "Critical",
      data: []
    }
  ] as Series[];

	/***
	 * Will update the graph series based on graph data
	 * Will add every severity count per year for every severity in series list
	 *
	 * @param {boolean} yearsFilter			get only items with the year date present in years list
	 * */
  const updateSeries = (yearsFilter: boolean = true) => {
		const data = dataSource?.data;	// data graph

		// if data present
    if (data) {
			// iterate all series, "Low", "Medium", ...
      for (let i = 0; i < series.length; i++) {
				// uppercase name, "Low" -> "LOW"
        const name = series[i].name.toUpperCase();
				// get all items with severity matching the series name
				const cveItems = data.filter(cve => cve.impact.baseMetricV2?.severity === name);

        if (yearsFilter) {
					// count only the items, which publishedDate year is present in years list
          for (const year of years) {
            const thisYearItems = cveItems.filter(cve => cve.publishedDate.substring(0, 4) === year);
            const count = thisYearItems.length;

            count !== 0 && series[i].data.push(count);
          }
        } else {
					// if filter off, count all items per this year and push to the series data list
          const count = cveItems.length;

          count !== 0 && series[i].data.push(count);
        }
      }
    }
		// update the state
    setSeriesData(series);
  };

	// if search data updated, update the series with years filtering off
  useEffect(() => updateSeries(searchGraph?.data === undefined), [searchGraph]);
	// udpate the series in relation to updated graphData
  useEffect(updateSeries, [graphData]);

  const options = {
    title: {
      text: yearsFilter?.year ? `CVE Analysis for ${yearsFilter.year}` : "CVE Analysis"
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: true
        },
        pointStart: Number(years[0])
      }
    },
    series: seriesData,
    responsive: {
      rules: [{
        condition: {
          maxWidth: 768
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  };
  
  return (
    <LineGraphStyles>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </LineGraphStyles>
  );
}

export default LineGraph;
