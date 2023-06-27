import {AiFillCloseSquare} from 'react-icons/ai'

import Popup from 'reactjs-popup'

import './index.css'

import {Container, CloseButton, PopupImage} from './styledComponents'

const ReactPopup = () => (
  <Container>
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          RULES
        </button>
      }
    >
      {close => (
        <>
          <div className="image-container">
            <div className="close-button-container">
              <CloseButton type="button" onClick={() => close()}>
                <AiFillCloseSquare className="react-icon" />
              </CloseButton>
            </div>
            <PopupImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
        </>
      )}
    </Popup>
  </Container>
)

export default ReactPopup
