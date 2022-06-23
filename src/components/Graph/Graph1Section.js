import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";
import ReactApexChart from "react-apexcharts"; 
import ApexChart from 'apexcharts'



  
const Graph1Section = (props) => {
    console.log(props.chart1Data.myscore)

    const chartformat = {
        series: [{
          name: '코테 합격자 평균 분포도',
          data: props.chart1Data.myscore,
        }, {
          name: '나의 분포도',
          data: props.chart1Data.passer_score,
        }, ],
        options: {
          chart: {
            height: 100,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 10,
              left: 1,
              top: 1
            }
          },
          stroke: {
            width: 2
          },
          fill: {
            type: "gradient",
            gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [0, 90, 100]
            }
          },
          colors: ['#FF7A00','#39E25E',],
          markers: {
            size: 2,
            colors: ['#fff'],
            strokeColor: ['#fff','#fff',],
            strokeWidth: 2,
          },
          xaxis: {
            type: 'category',
            categories: ['그리디/탐색', 'DFS/BFS', 'DP', '문자열', '구현', '기타'],
        },

            legend: {
                show: true,
                showForSingleSeries: false,
                showForNullSeries: true,
                showForZeroSeries: true,
                position: 'bottom',
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
                offsetX: -20,
                offsetY: 0,
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
                    코딩 테스트 차트
                </div>
                
            <div id="chart">
                <ReactApexChart 
                    options={chartformat.options}
                    series={chartformat.series}
                    type="radar" 
                    height="400"
                />
            </div>
            <div className="description">
                6가지 영역을 통해 나만의 코딩 능력을 테스트 진행했습니다.<br/>
                알맞은 개발 능력을 통해 그래프의 영역을 넓혀보세요!
            </div>
            </div>
         
        </Wrapper>
    )
}
export default Graph1Section;

const Wrapper = styled.div`
    width: 50rem;
    min-height: 100%;
    border-radius: 30px;
    padding: 20px;
    background: radial-gradient(50% 50% at 50% 50%, #241D45 1%, #131022 100%);
    border-radius: 30px;

    .title{
        padding: 20px;
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
        text-align: center;
        letter-spacing: 0.25px;
        color: #C5C5C5;
    }
    `
