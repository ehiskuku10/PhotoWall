import React from 'react'
import {Link} from 'react-router-dom'


function Photo(props) {
	const post = props.post
	console.log(props.index)
	return <figure className="figure"> 
				<Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description}/></Link>
				<figcaption><p> {post.description} </p></figcaption>
				<div className="button-container">
					<button onClick = {() => {
						props.removePost(props.index)
						props.history.push('/')
					}}> Remove  <span className="fa fa-close fa-1x"></span> </button>
					<Link className="button" to={`/single/${post.id}`}>
						<div className="comment-count">
							<div className="speech-bubble"></div>
							{props.comments[post.id] ? props.comments[post.id].length : 0}
						</div>
					</Link>
				</div>
		   </figure>
} 



export default Photo