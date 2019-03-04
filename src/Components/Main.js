import React, {Component} from "react"
import PhotoWall from "./PhotoWall"
import AddPhoto from "./AddPhoto"
import {Route, Link} from "react-router-dom"
import Single from "./Single"

class Main extends Component {
	render() {
		console.log(this.props)
		return( 
				<div>
					<h1>
						<Link to="/"><span className="fa fa-camera fa-1x"></span>   Photowall</Link>
					</h1>

					<Route exact path="/" render={() => (
						<div>
							<PhotoWall {...this.props}/>   {/*posts=props.post, remove=props.remove*/}
						</div>
					)}/>
					
					<Route path="/AddPhoto" render={(params) => (
						<AddPhoto {...this.props} onHistory={params.history}/>
					)}/>

					<Route path="/single/:id" render={(params) => (
						<Single {...this.props} {...params}/>
					)}/>
				</div>
		)
	}
}


export default Main