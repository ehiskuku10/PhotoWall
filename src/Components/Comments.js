import React, {Component} from "react"


class Comments extends Component {
	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		const comment = event.target.elements.comment.value
		this.props.addComment(comment, this.props.id )
		event.target.elements.comment.value = ""
	}	

	render() {
		return (
			<div className="comment">
			{
				this.props.comments.map((comment, index) => {
					return(
						<div className="comment-components">
							<p key={index}>{comment}</p>
							<button className="eliminate" onClick={() => {
								this.props.removeComment(index, this.props.id)
							}}><span className="fa fa-close fa-1x"></span></button>
						</div>
					)
				})
			}

				<form className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" placeholder="comment" name="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
		)  
	}
}

export default Comments