import { Link } from "react-router-dom";

const ProblemCard = ({ problem }) => {
  console.log(problem);

  return (
    <>
      <Link to={`/solve/${problem.id}`}>
        <div>{`title: ${problem.title}`}</div>
        <div>{`category: ${problem.category}`}</div>
      </Link>
    </>
  )
}

export default ProblemCard;