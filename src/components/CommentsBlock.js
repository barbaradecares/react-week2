import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import commentsService from "../services/commentsService";
import { isLogged, getUser } from "../services/loginService";

class CommentsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      comments: commentsService.get(this.props.recipeSlug)
    };
  }

  deleteComment = comment => {
    commentsService.delete(this.props.recipeSlug, comment);
    const updatedComments = this.state.comments.filter(c => c !== comment);
    this.setState({ comments: updatedComments });
  };

  renderComment = comment => (
    <div className="Comment media text-muted pt-3">
      <FontAwesomeIcon className="mr-2" size="3x" icon="user-circle" />
      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <strong className="d-block text-gray-dark">{comment.author}</strong>
        {comment.content}
      </p>
      {comment.author === getUser().username && (
        <FontAwesomeIcon
          icon="trash"
          onClick={() => this.deleteComment(comment)}
        />
      )}
    </div>
  );

  handleSubmit = e => {
    e.preventDefault();
    try {
      commentsService.insert(this.props.recipeSlug, {
        content: this.state.input
      });
    } catch (err) {
      alert(err);
    }
    this.setState({
      comments: commentsService.get(this.props.recipeSlug),
      input: ""
    });
  };

  renderForm = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Comment</label>
          <textarea
            disabled={false}
            value={this.state.input}
            onChange={e => {
              this.setState({ input: e.target.value });
            }}
            required="required"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Insert your comment here"
          />
        </div>
        <button disabled={false} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  };

  render = () => {
    return (
      <div className="text-left">
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h6 className="border-bottom border-gray pb-2 mb-0">Comments</h6>
          {this.state.comments.map(comment => this.renderComment(comment))}
        </div>
        {isLogged() && this.renderForm()}
      </div>
    );
  };
}

export default CommentsBlock;
