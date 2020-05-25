import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading/index';
import messages from './messages';
import refreshIcon from '../../assets/refresh.svg';
import { StyledOverlayWrapper, StyledParagraph, StyledButton, StyledModal } from './styled';

const Modal = ({ error }) => (
  <StyledOverlayWrapper>
    <StyledModal>
      <Heading main>{messages.error}</Heading>
      <StyledParagraph>{messages.statement}</StyledParagraph>
      <StyledParagraph>{error}</StyledParagraph>
      <StyledButton src={refreshIcon} onClick={() => window.location.reload()} />
    </StyledModal>
  </StyledOverlayWrapper>
);

export default Modal;

Modal.propTypes = {
  error: PropTypes.string.isRequired,
};
