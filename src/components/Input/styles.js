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

`;
