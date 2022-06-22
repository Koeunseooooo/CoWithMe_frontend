import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: ${(props) => props.color === 'green' ? theme.color.green : theme.color.white};
        font-weight: 400;
    }
`;

export default (props) => <StyledLink {...props} />;