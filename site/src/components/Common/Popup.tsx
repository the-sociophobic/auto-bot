import React from 'react'

import { Container, Col, Card } from 'react-bootstrap'


export type PopupProps = {
  children: React.ReactNode
}

const Popup: React.FC<PopupProps> = ({
  children
}) => {
  const { closePopup } = usePopup()

  return (
    <div
      className='PopupBg closable'
      onClick={e => {
        if ((e.target as Element).classList.contains('closable'))
          closePopup()
      }}
    >
      <Container className='h-100 d-flex flex-column justify-content-center align-items-center closable'>
        <Col className='col-8 closable'>
          <Card className='Popup'>
            <Card.Body>
              {children}
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  )
}


export type PopupStateType = {
  contents: React.ReactNode | null
}
export type PopupFnsType = {
  openPopup: (contents: React.ReactNode) => void
  closePopup: () => void
}

const popupInitialState = {
  contents: null,
  openPopup: (contents: React.ReactNode) => { },
  closePopup: () => { }
}

const PopupContext = React.createContext<PopupStateType & PopupFnsType>(popupInitialState)

const PopupWrapper: React.FC<PopupProps> = ({
  children
}) => {
  const [state, setState] = React.useState<PopupStateType>(popupInitialState)
  const stateAndFns = {
    ...state,
    openPopup: (contents: React.ReactNode) => setState({ contents }),
    closePopup: () => setState({ contents: null })
  }

  return (
    <PopupContext.Provider value={stateAndFns}>
      {children}
      {state.contents &&
        <Popup>
          {state.contents}
        </Popup>
      }
    </PopupContext.Provider>
  )
}

const usePopup = () =>
  React.useContext(PopupContext)


export {
  Popup,
  PopupWrapper,
  usePopup
}
