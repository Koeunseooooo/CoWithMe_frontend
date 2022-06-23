// position: absolute;
// width: 496px;
// height: 257px;
// left: 1264px;
// top: 552px;

// background: #44395B;
// border-radius: 15px;


import React from "react";
import styled, { css } from "styled-components";
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom';


const Wrapper= styled.div`
    &:hover{
        background: #39E25E;
        cursor:pointer;

        .button{
            background: white;
        }
    }

    
    width: 400px;
    height: 220px;
    position: relative;
    margin-bottom:25px;

    
    background: #44395B;
    border-radius: 15px;

    .problem_title{
        font-size: 20px;
        font-family: 'AppleSDGothicNeoEB00';
        font-style: normal;
        padding-top:30px;
        padding-left:30px;
        font-weight: 600;
        line-height: 32px;
        /* identical to box height */
        letter-spacing: 0.25px;
    }

    .problem_source{
        font-size: 18px;
        font-family: 'AppleSDGothicNeoEB00';
        font-style: normal;
        font-weight: 400;
        padding-left:30px;
        line-height: 34px;
        /* identical to box height */
        letter-spacing: 0.25px;
    }

    .img{
        position: absolute;
        height: 170px;
        width: 170px;
        top: 55%;
        left: 75%;
        transform: translate(-50%, -50%);
        
    }

    .button{
        margin-top:70px;
        z-index:1;
        /*공통 스타일*/
        display: inline-flex;
        align-items: center;
        outline: none;
        border: none;
        border-radius: 100px;
        color: black;
        cursor: pointer;
        padding-left: 2.5rem;
        padding-right: 2.5rem;

        height: 3.5rem;
        font-size: 1.5rem;
        font-weight: 600;

        background: #39E25E;
        &:hover{
            background: white;
        }
        /*기타 */
        & + & {
            margin-left: 1rem;
        }
    }

    .buttonWrapper{
        display:flex;
        flex-direction: column;
            align-items: center;
    }

 
`

function Illust({id}){
    return(
        <>{
            id===1?<img className="img" src={require('../../assets/Illust/Coding Test/01.svg').default} alt="" />:
            id===2?<img className="img" src={require('../../assets/Illust/Coding Test/02.svg').default} alt="" />:
            id===3?<img className="img" src={require('../../assets/Illust/Coding Test/03.svg').default} alt="" />:
            id===4?<img className="img" src={require('../../assets/Illust/Coding Test/04.svg').default} alt="" />:
            id===5?<img className="img" src={require('../../assets/Illust/Coding Test/05.svg').default} alt="" />:
            id===6?<img className="img" src={require('../../assets/Illust/Coding Test/06.svg').default} alt="" />:
            <></>
        }
        </>
    )
}
function ProblemBox({problem_title,problem_source,id,...rest}){
    const navigate = useNavigate();
    return (
        <>
          <Wrapper>
              <div className="problem_title">{problem_title}</div>
              <div className="problem_source">{problem_source}</div>
              <Illust id={id}/>
              {/* <img className="img" src={require('../../assets/Illust/Coding Test/01.svg').default} alt=""/> */}
              <div className="buttonWrapper">
                <button className="button" onClick={() => navigate('/solve/'+id)}>테스트하기</button>
              </div>
          </Wrapper>
    
        </>
      )
}


export default ProblemBox;
