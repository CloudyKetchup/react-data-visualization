import React, { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { GraphDataAtom }  from "../../atoms/GraphData";

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import styled from "styled-components";

const LineGraphStyles = styled.div`
  width: 100%;
`;

type Series = {
  name: string,
  data: number[]
}

const LineGraph = () => {
  const [graphData] = useRecoilState(GraphDataAtom);
  const [seriesData, setSeriesData] = useState<Series[]>([])

  const years = ["2015", "2016", "2017", "2018", "2019", "2020"];
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

  useEffect(() => {
    const data = graphData?.data;

    if (data)
    {
      for (let i = 0; i < series.length; i++) {
        const name = series[i].name.toUpperCase();

        const cveItems = data.filter(cve => cve.impact.baseMetricV2?.severity === name);

        for (const year of years) {
          const thisYearItems = cveItems.filter(cve => cve.publishedDate.substring(0, 4) === year);
          const count = thisYearItems.length;

          count !== 0 && series[i].data.push(count);
        }
      }
    }
    setSeriesData(series);
  }, [graphData]);

  const options = {
    title: {
      text: `CVE Analysis for `
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