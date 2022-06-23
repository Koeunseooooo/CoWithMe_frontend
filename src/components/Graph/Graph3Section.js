import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";
import ReactApexChart from "react-apexcharts"; 
import ApexChart from 'apexcharts'


const ChartFormat = (props) =>{
    const chartformat= {
        series: [props.value],
        options: {
          chart: {
            type: 'radialBar',
            width:250,
            toolbar: {
              show: false
            }
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
               hollow: {
                margin: 0,
                size: '100%',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 2,
                  opacity: 0.24
                }
              },
              track: {
                background: '#000',
                strokeWidth: '100%',
                margin: -15, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.2
                }
              },
          
              dataLabels: {
                show: true,
                name: {
                  offsetY: 0,
                  show: true,
                  color: '#fff',
                  fontSize: '12px'
                },
                series: {
                    offsetY: 0,
                    show: true,
                    color: '#fff',
                    fontSize: '12px'
                  },
              }
            }
          },
          tooltip: {
            enabled: true,
            enabledOnSeries: undefined,
            shared: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            theme: false,
            style: {
              fontSize: '12px',
              fontFamily: undefined
            },
            onDatasetHover: {
                highlightDataSeries: false,
            },
            x: {
                show: true,
                format: 'dd MMM',
                formatter: undefined,
            },
            y: {
                formatter: undefined,
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },
            z: {
                formatter: undefined,
                title: 'Size: '
            },
            marker: {
                show: true,
            },
            fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0,
            },
        },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 1,
              gradientToColors: props.gradient,
              inverseColors: true,
              opacityFrom: 0.8,
              opacityTo: 0.8,
              stops: [0, 100]
            }
          },
          stroke: {
            lineCap: 'round',
          },
          labels: [props.type_name],
        },
      };

      return (
        <ReactApexChart 
        options={chartformat.options}
        series={chartformat.series}
        type="radialBar" 
        />
      )
}
  
const Graph3Section = (props) => {

    const data = props.chart3Data.focus_rate;


    // console.log(chartformat.series)
    return (
        <Wrapper3 >
            <div className="title">
                <div className="title-description">
                    오늘의 학습 도달율
                </div>
                <div className="description">
                최근 집중하고 있는 3영역의 집중도를 점검합니다.
                </div>
            </div>
            <div className="graphs">
                <div id="chart" className="graph">
                    <ChartFormat value={data&&data[0]} type_name={"DFS/BFS"} gradient={['#3ABA58','#2458A6']}/>
                </div>
                <div id="chart" className="graph">
                    <ChartFormat value={data&&data[1]} type_name={"DP"} gradient={['#E84500','#BAA700']}/>
                </div>
                <div id="chart" className="graph">
                    <ChartFormat value={data&&data[2]} type_name={"문자열"} gradient={['#6301DF','#C10074']}/>
                </div>
                </div>

              
         
        </Wrapper3>
    )
}
export default Graph3Section;

const Wrapper3 = styled.div`
    width: 50rem;
    height: 35%;
    border-radius: 30px;
    margin-top:40px;
    padding-top:20px;
    padding-left:30px;
    padding-right:30px;
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
        line-height: 30px;
        letter-spacing: 0.25px;
    }

    .description{
        font-family: 'neoM';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 32px;
        letter-spacing: 0.25px;
        color: #C5C5C5;
    }

    .graphs{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        
    }
    `
