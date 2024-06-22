import React from 'react'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleIsLiked, deleteComment} = props
  const {id, name, description, isLiked} = commentDetails

  const onClickLike = () => {
    toggleIsLiked(id)
  }
  const onClickDelete = () => {
    deleteComment(id)
  }
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className="comment">
          <div className="comment-header">
            <h1 className="comment-name">{name}</h1>
            <p className="comment-text">{description}</p>
          </div>
          <button type="button" className="like-button" onClick={onClickLike}>
            <img src={likeImgUrl} alt="like" className="like-img" />
          </button>
        </div>
        <button
          className="delete"
          data-testid="delete"
          type="button"
          onClick={onClickDelete}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
