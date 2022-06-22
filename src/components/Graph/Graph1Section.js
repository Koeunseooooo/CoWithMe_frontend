import { useState, useEffect } from "react";
import styled from "styled-components";
import Editor, { useMonaco } from "@monaco-editor/react";
import { theme } from "../../styles/theme";


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
  
const Graph1Section = () => {
    const [problem, setProblem] = useState({});
    return (
        <Wrapper >
            <div className="problem">
                <div className="problem-description">
                    코딩 테스트 차트
                </div>
                {problem &&
                    <Content>
                        <p>{problem.problem}</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>순위</th>
                                    <th>당첨 내용</th>
                                </tr>
                            </thead>
                            <tbody>
                                {problem.examples?.map(example => (
                                    <tr>
                                        <td>2</td>
                                        <td>4개 번호가 일치</td>
                                    </tr>

                                ))}
                            </tbody>

                        </table>
                    </Content>}
            </div>
        </Wrapper>
    )
}
export default Graph1Section;

const Wrapper = styled.div`
width: 75.8rem;
min-height: 100%;
border-radius: 30px;
padding: 20px;
background: radial-gradient(50% 50% at 50% 50%, #241D45 1%, #131022 100%);
border-radius: 30px;

// background-color: ${theme.color.black2};
.problem{
    padding: 30px;
}
.problem-name{
    font-weight: 400;
    font-size: 32px;
    line-height: 46px;
    letter-spacing: 0.25px;
    margin-bottom: 36px;
  }

.problem-description{
    color: ${theme.color.green};
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: 0.25px;
}
`

const Content = styled.div`
font-family: 'AppleSDGothicNeoM00';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 28px;
letter-spacing: 0.25px;
`