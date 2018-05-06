import styled from 'styled-components';

export const Input = styled.input`
         width: auto;
         height: 20px;
         border-radius: 5px;
         color: #2473da;
         font-size: 15px;
         font-weight: 400;
         border-width: 1px;
         opacity: 0.8;
         padding: 8px;
         border-color: #2473da;
         &focus: {
           outline: none;
         }`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${props => props.height} ;
`

export const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #2473da;
  border-radius: 5px
  text-transform: uppercase;
  border: none;
  text-align: center;
`;

export const FromWrapper = styled.div`
  padding: 50px;
  border-radius: 5px;
  color: grey;
  box-shadow: 0px 8px 18px 0px rgba(0,0,0,0.3);
`