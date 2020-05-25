import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 40vw;
  height: 250px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  padding-top: 20px;
`;

export const StyledOverlayWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledParagraph = styled.p`
  margin: 20px;
`;

export const StyledButton = styled.img`
  position: absolute;
  bottom: 6%;
  right: 3%;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
`;
