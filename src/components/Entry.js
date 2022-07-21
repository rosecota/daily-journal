import React from "react";

export const Entry = ({ entry, mood, onEditButtonClick, onDeleteButtonClick }) => {
  const getMessageType = () => {
    if (mood) {
      switch (mood.label) {
        case 'Unconcerned':
          return 'is-primary'
        case 'TIL':
          return 'is-info'
        case 'Happy':
          return 'is-success'
        case 'Ok':
          return 'is-warning'
        case 'Tragic':
          return 'is-danger'
        default:
          break;
      }
    }
  }

  return (
    <article className={`message ${getMessageType()}`} style={{ width: "100%" }}>
      <div className="message-body">
        <p className="entry__concept">{entry.concept}</p>
        <p className="entry__entry">{entry.entry}</p>
        <p className="entry__date">{entry.date}</p>
        <p className="entry__mood">~{mood?.label}~</p>
        <div className="buttons">
          <button className={`button ${getMessageType()} is-outlined`} onClick={
            () => {
              onEditButtonClick(entry.id)
            }
          }>Edit</button>
          <button className={`button ${getMessageType()}`} onClick={
            () => {
              onDeleteButtonClick(entry.id)
            }
          }>Delete</button>
        </div>
      </div>
    </article>
  )
};
