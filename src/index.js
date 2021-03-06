import React from "react"
import ReactDom from "react-dom"
import './styles/font-awesome-4.7.0/css/font-awesome.min.css'
import './styles/stylesheet.css'
import {BrowserRouter} from "react-router-dom"
import {createStore} from "redux"
import rootReducer from "./redux/reducer"
import {Provider} from "react-redux"
import App from "./Components/App"

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 


ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));