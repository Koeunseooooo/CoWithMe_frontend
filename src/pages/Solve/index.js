import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Solve = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState({});
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");

  const handleAnswerChange = ({ target: { value } }) => setAnswer(value);

  useEffect(() => {
    // axios.get(`/problem/${id}`)
    //   .then(res => {})

    setProblem({
      title: 'A + B',
      category: 'DP',
      problem: '두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.',
      input: '첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)',
      output: '첫째 줄에 A+B를 출력한다.',
      examples: [{
        input: '1 2',
        output: '3'
      }, {
        input: '4 6',
        output: '10'
      }]
    })
  }, []);

  const submit = () => {
    // axios.post(`/`)

    setResult("정답입니다!")
  }

  return (
    <>
      {problem && 
      <>
        <div>{`문제 #${id}(${problem.category})`}</div>
        <div>{problem.title}</div>
        <div>{problem.problem}</div>
        <div>{problem.input}</div>
        <div>{problem.output}</div>
        
        {problem.examples?.map(example => (
          <>
            <div>{example.input}</div>
            <div>{example.output}</div>
          </>
        ))}

        <input
          name="answer"
          value={answer}
          onChange={handleAnswerChange}
        />

        <button onClick={submit}>제출하기</button>

        {result !== "" && <>{result}</>}
      </>}
    </>
  )
}

export default Solve