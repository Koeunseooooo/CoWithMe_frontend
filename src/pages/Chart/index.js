import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie"
import ReactApexChart from "react-apexcharts"; 
import ApexChart from 'apexcharts'
import Header from '../../components/Header'


const Chart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    // axios.get(`/chart`)
    //   .then(res => {})
    setChartData({
      myscore: [80, 50, 30, 40, 100, 20],
      passer_score: [20, 30, 40, 80, 20, 80],
      coding_status : "",
      recommended_problems:["","","","",""]
    })

  }, []);

  const chartformat = {
  series: [{
    name: '코테 합격자 평균 분포도',
    data: chartData.passer_score
  }, {
    name: '나의 분포도',
    data: chartData.myscore
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
    title: {
      text: '코테 유형 분포도',
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.5
    },
    colors: ['#7EA1C4','#FF4560',],
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColor: ['#7EA1C4','#FF4560',],
      strokeWidth: 2,
    },
    xaxis: {
      categories: ['그리디/탐색', 'DFS/BFS', 'DP', '문자열', '구현', '기타'],
    },
  },
};
  return (
    <>
    <Header isMainHome/>
      <div classname="background">
          <div id="chart">
              <ReactApexChart 
                  options={chartformat.options}
                  series={chartformat.series}
                  type="radar" 
                  width="1000"
              />
          </div>
      </div>
    </>
  )
}

export default Chart;

