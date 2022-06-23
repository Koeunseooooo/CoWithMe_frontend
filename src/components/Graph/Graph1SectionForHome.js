import styled from "styled-components";
import ReactApexChart from "react-apexcharts"; 



  
const Graph1SectionForHome = (datas) => {

    console.log(datas)
    const chartformat = {
        series: [{
          name: '코테 합격자 평균 분포도',
          data: datas.chart1Data.passer_score,
        }, {
          name: '나의 분포도',
          data: datas.chart1Data.myscore,
        }, ],
        dataLabels: {
            enabled: true
          },
        options: {
            yaxis: {
                show: false,
                // showAlways: true,
                showForNullSeries: false,
                seriesName: undefined,
                opposite: false,
                reversed: false,
                logarithmic: false,
                logBase: 10,
                tickAmount: 6,
                min: 0,
                max: 100,
            },
          chart: {
            height: 100,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 10,
              left: 1,
              top: 1
            },
            toolbar: {
                show: false
              }
          },
          plotOptions: {
            radar: {
              polygons: {
                strokeColor:  '#C9C9C9',
                fill: {
                    colors: ['#16122C', '#241852']
                }
              }
            }
          },
          stroke: {
            width: 2
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
            type: "gradient",
            gradient: {
                shade: 'dark',
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.5,
                stops: [0, 90, 100]
            }
          },
          colors: ['#FF7A00','#39E25E'],
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
         
        </Wrapper>
    )
}
export default Graph1SectionForHome;

const Wrapper = styled.div`
    margin-bottom:25px;
    width: 34rem;
    height: 48%;
    // margin-left:15px;
    border-radius: 30px;
    padding: 30px;
    background: radial-gradient(50% 50% at 50% 50%, #241D45 1%, #131022 100%);
    border-radius: 30px;

    .title{
        padding: 10px;
    }


    .description{
        font-family: 'AppleSDGothicNeoM00';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.25px;
        color: #C5C5C5;
    }

      
    `
