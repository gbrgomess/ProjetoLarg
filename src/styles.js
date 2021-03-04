import styled from 'styled-components';

export const Container = styled.div`
    background-color:#999;
    height:200px;
    
    div{
        background-color:black;
        display:flex;
        flex-direction:row;
        align-items:center;
    }

    h1{
        font-size:20px;
        color:#fff
    }

    p{
        font-size:28px;
        color:#fff

    }

`;

export const Text = styled.p`
    font-size:20px;
    font-weight:bold;
    text-align:center;
    
    `;