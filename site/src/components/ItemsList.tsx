import React from 'react'

import { Button, Col, Row } from 'react-bootstrap'
import { ItemType } from '../models'


export type ItemsListProps = {
  items: ItemType[]
  showButtons: boolean
  onButtonClick?: (item: ItemType) => void
}


const ItemsList: React.FC<ItemsListProps> = ({
  items,
  showButtons,
  onButtonClick
}) => {
  return (
    <div className='container'>
      {items.map((item, index) =>
        <div
          key={index}
          className='List__item'
        >
          <hr />
          <Row>
            <Col>
              <div>
                <b>{item.name}</b>
              </div>
              <div>
                {item.price}₽
              </div>
            </Col>
            <Col className='d-flex flex-row justify-content-end'>
              {showButtons &&
                <Button
                  onClick={() => onButtonClick?.(item)}
                >
                  Добавить
                </Button>
              }
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}


export default ItemsList
