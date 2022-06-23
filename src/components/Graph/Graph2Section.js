import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";
import ReactApexChart from "react-apexcharts"; 
import ApexChart from 'apexcharts'



  
const Graph2Section = (props) => {
    // console.log(props.chart2Data.dp_score)

    const chartformat = {
        series: [{
          name: 'DP 영역',
          data: props.chart2Data.dp_score
        }, {
          name: 'DFS 영역',
          data: props.chart2Data.dfs_score,
        }, ],
        options: {
            colors: ['#FF7A00','#39E25E',],
            fill: {
                type: "gradient",
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.7,
                    stops: [0, 90, 100]
                }
              },
            chart: {
              height: 350,
              type: 'area',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 2,
              curve: 'straight'
            },
            xaxis: {
              type: 'category',
              categories: ["12월","1월","2월","3월","4월","5월","6월"]
            },
            yaxis: {
                show: false,
            },
            grid: {
                show: true,
                borderColor: '#90A4AE',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },   
                yaxis: {
                    lines: {
                        show: false
                    }
                },  
            },
            markers: {
                size: 2,
                colors: ['#fff'],
                strokeColor: ['#fff','#fff',],
                strokeWidth: 2,
              },
              legend: {
                show: true,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'top',
                horizontalAlign: 'center', 
                floating: false,
                fontSize: '14px',
                fontFamily: 'AppleSDGothicNeoB00',
                fontWeight: 400,
                formatter: undefined,
                inverseOrder: false,
                width: undefined,
                height: undefined,
                tooltipHoverFormatter: undefined,
                customLegendItems: [],
                offsetX: 0,
                offsetY: 10,
                labels: {
                    colors: ['#fff'],
                    useSeriesColors: false
                },
            
                itemMargin: {
                    horizontal: 10,
                    vertical: 0
                },
                onItemClick: {
                    toggleDataSeries: true
                },
                onItemHover: {
                    highlightDataSeries: true
                },
            }
    }
      };

    // console.log(chartformat.series)
    return (
        <Wrapper >
            <div className="title">
                <div className="title-description">
                    개발 영역 추이
                </div>
                <div className="description">
                    
                최근 5개월간의 코딩 능력을 점검합니다.<br/>
                DF 영역과 DFS 영역의 상승이 두드러집니다. 주의하세요!
            </div>
            </div>
                
            <div id="chart">
                <ReactApexChart 
                    options={chartformat.options}
                    series={chartformat.series}
                    type="area" 
                    height="250"
                />
            </div>
            
            
         
        </Wrapper>
    )
}
export default Graph2Section;

const Wrapper = styled.div`
    width: 50rem;
    height: 40%;
    border-radius: 30px;
    padding: 30px;
    padding-bottom:5px;
    background: radial-gradient(50% 50% at 50% 50%, #241D45 1%, #131022 100%);
    border-radius: 30px;

    .title{
        padding: 10px;
        display:flex;
        justify-content: space-between;
    }
  

    .title-description{
        color: ${theme.color.green};
        font-weight: 600;
        font-size: 20px;
        line-height: 33px;
        letter-spacing: 0.25px;
    }

    .description{
        font-family: 'AppleSDGothicNeoM00';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: #C5C5C5;
    }
    `
