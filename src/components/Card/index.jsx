import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import clearSvg from '../../assets/img/clear.svg';

import './Card.scss';

export const Card = ({cardIndex, columnIndex, children, onRemove}) =>
  typeof cardIndex !== 'undefined' ? (
    <Draggable draggableId={`card-${columnIndex}-${cardIndex}`} index={cardIndex}>
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          <span>{children}</span>
          <div
            onClick={onRemove.bind(this, columnIndex, cardIndex)}
            className="remove-btn">
            <img src={clearSvg} alt="Clear svg icon" />
          </div>
        </div>
      )}
    </Draggable>
  ) : (
    <div className="card">{children}</div>
  );