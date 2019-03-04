//remove post

export function removePost(index){
	return {
		type: "REMOVE_POST",
		index: index
	}
}


//adding post
export function addPost(post){
	return {
		type: "ADD_POST",
		post //ES6 feature
	}
}


//adding comment

export function addComment(comment, postId) {
	return {
		type: "ADD_COMMENT",
		comment,
		postId
	}
}

//removing Comment

export function removeComment(index, id) {
	return {
		type: "REMOVE_COMMENT",
		index,
		id
	}
}