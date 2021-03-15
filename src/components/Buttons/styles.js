import styled from 'styled-components';

export const Container = styled.div`
 input{
      padding: 7px 10px;
      border:1px solid #000;
      border-radius:5px;
      margin-top:15px;
      font-size:20px;

        & + input {
            margin-bottom:10px;

        }
    }


    button{
        border:0;
        background-color:#000;
        color:#fff;
        padding:10px 20px;
        font-size: 20px;
        border-radius:5px;
        margin: 10px;

    }

`;
