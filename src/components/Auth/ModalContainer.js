import React, { useState } from 'react';
import styled from "styled-components";
import Modal from './Modal';

const ModalContainer = ({ keyword }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [text] = useState(keyword === 'login' ? '회원가입하기' : '이미 계정이 있으신가요?');

    const modalClose = () => {
        setModalOpen(!modalOpen);
        console.log(modalOpen);
    }

    return (
        <>
            <Button onClick={modalClose}>{text}</Button>
            {modalOpen && <Modal modalClose={modalClose} />}
        </>
    )
}

export default ModalContainer;

const Button = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 28px;
letter-spacing: 0.25px;
color: #000000;
`;