import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comment extends Component {
  state = {
    count: 0,
    commentsList: [],
    name: '',
    description: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({description: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {name, description} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      description,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      description: '',
    }))
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  render() {
    const {name, description, commentsList, count} = this.state
    return (
      <div className="main">
        <div className="details-section">
          <div className="Comment-section">
            <h1 className="heading">Comments</h1>
            <p className="tech">Say something about 4.0 Technologies</p>
            <form>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={this.changeName}
              />
              <textarea
                type="text"
                value={description}
                placeholder="Your Comment"
                onChange={this.changeComment}
              />
              <button className="btn" type="button" onClick={this.addComment}>
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <p className="count">{count} Comments</p>
        <ul className="comments">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsLiked={this.toggleIsLiked}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comment
