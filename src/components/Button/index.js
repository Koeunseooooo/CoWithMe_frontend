import React from "react";
import styled, { css } from "styled-components";


const StyledButton = styled.button`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 100px;
    color: black;
    cursor: pointer;
    padding-left: 2rem;
    padding-right: 2rem;

    height: 3.5rem;
    font-size: 1.5rem;

    background: #39E25E;
    &:hover{
        background: white;
    }
    &:active{
        background: #1c7ed6;
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`
function Button({children,...rest}){
    return <StyledButton {...rest}>{children}</StyledButton>
}


export default Button;
