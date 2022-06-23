import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";
import ReactApexChart from "react-apexcharts"; 
import ApexChart from 'apexcharts'



  
const Graph3Section = (props) => {
    

    const chartformat = {
       
        series: [40],
        options: {
          chart: {
            height: 200,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['DFS/BFS'],
        },
      
    };
       

    // console.log(chartformat.series)
    return (
        <Wrapper >
            <div className="title">
                <div className="title-description">
                    오늘의 학습 도달율
                </div>
                <div className="description">
                최근 집중하고 있는 3영역의 집중도를 점검합니다.
{/*             
                {weatherList.map((it) => (
                            <WeatherItem
                                key={it.weather_id}
                                {...it}
                                onClick={handleClickWeather}
                                isSelected={it.weather_id === weather}
                            />
                        ))} */}
                
            <div id="chart">
                <ReactApexChart 
                    options={chartformat.options}
                    series={chartformat.series}
                    type="radialBar" 
                    height="200"
                />
            </div>
            </div>
            </div>
            
            
         
        </Wrapper>
    )
}
export default Graph3Section;

const Wrapper = styled.div`
    width: 50rem;
    height: 30%;
    border-radius: 30px;
    margin-top:20px;
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
        line-height: 32px;
        letter-spacing: 0.25px;
        color: #C5C5C5;
    }
    `
