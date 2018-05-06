import styled from 'styled-components';

export const StyledLink = styled.a`
  color: #ccc;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    font-size: 18px;
    font-weight: 900;
  }
`
export const Wrapper = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const NavContianer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`
