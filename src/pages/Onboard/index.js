import axios from "axios"
import { useEffect, useState } from "react"

const Onborad = () => {
  const [problemNumber, setProblemNumber] = useState(1);
  const [problem, setProblem] = useState(null);

  const loadProblem = async (number) => {
    const resp = await axios.get(`/tests/${number}`);

    setProblem(resp.data);
  }

  useEffect(() => {
    loadProblem(1);
  }, []);

  const markProblem = async () => {
    const resp = await axios.post(`/tests/mark/${problem.id}`, {
      answer: '1'
    });

    console.log(resp);
    loadProblem(problemNumber + 1);
    setProblemNumber(problemNumber + 1);
  }

  return (
    <>
      {problem && 
        <>
          <div>{`${problemNumber}/5`}</div>
          <div>{problem.title}</div>
          <div>{problem.choice1}</div>
          
          <button onClick={markProblem}>제출하기</button>
        </>
      }
    </>
  )
}

export default Onborad