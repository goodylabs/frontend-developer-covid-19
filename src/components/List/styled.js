import styled from 'styled-components';

export const StyledWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledItem = styled.li`
  font-size: 1.4rem;
  padding: 20px;
  margin: 2px;
  border: solid #ddd 2px;
  transition: 0.3s;
  border-radius: 5px;
  flex-basis: calc(20% - 4px);
  text-align: center;

  &:hover {
    background-color: #ddd;
    color: white;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 3px;
  }
`;
