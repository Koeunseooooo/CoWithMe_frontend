import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie"
import ReactApexChart from "react-apexcharts"; 
import ApexChart from 'apexcharts'


// 차트 커스텀을 위한 옵션 설정은 디자인 나오면 업데이트
const radardata = {
  series: [{
    name: '코테 합격자 평균 분포도',
    data: [80, 50, 30, 40, 100, 20],
  }, {
    name: '나의 분포도',
    data: [20, 30, 40, 80, 20, 80],
  }, ],
  options: {
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    // dataLabels: {
    //   enabled: true
    // },
    // plotOptions: {
    //   radar: {
    //     size: 140,
    //     polygons: {
    //       strokeColors: '#e9e9e9',
    //       fill: {
    //         colors: ['#f8f8f8', '#fff']
    //       }
    //     }
    //   }
    // },
    title: {
      text: '코테 유형 분포도',
    },
    stroke: {
      width: 2
    },
    fill: {
      // type: 'gradient',
      // gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
      opacity: 0.5
    },
    colors: ['#7EA1C4','#FF4560',],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: ['#7EA1C4','#FF4560',],
      strokeWidth: 2,
    },
    // markers: {
    //   size: 0
    // },
    xaxis: {
      categories: ['그리디/탐색', 'DFS/BFS', 'DP', '문자열', '구현', '기타'],
    },
  },


};

const Chart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    // axios.get(`/problem/${id}`)
    //   .then(res => {})
    setChartData({
      myscore: [80, 50, 30, 40, 100, 20],
      passer_score: [80, 50, 30, 40, 100, 20],
    })
  }, []);
  return (
    <>
      <div>
          <div id="chart">
              <ReactApexChart 
                  options={radardata.options}
                  series={radardata.series}
                  type="radar" 
                  width="1000"
              />
          </div>
      </div>
    </>
  )
}

export default Chart;

