import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import {BrowserRouter, Route, Switch} from "react-router-dom"

import {useHistory} from "react-router-dom";

const Auth = () => {
    const history = useHistory()

    const HomeClick = useCallback(()=>{
        history.push("/")
    }, [history])

    return (<div>
        <div>
            <button type={"submit"} onClick={HomeClick} style={{height:"100px"}}>Home</button>
        </div>
    </div>)
}

const NotFound = () => {
    return (<div>404 Not Found</div>)
}

const Header = () => {
    return (
        <div style={{width:"400px", color:"red", position:"absolute"}}>HEADER</div>
    )
}

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <Switch>
              <Route exact path={"/"} component={App}/>
              <Route exact path={"/auth"} component={Auth}/>
              <Route path={"*"} component={NotFound}/>
          </Switch>
      </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
);

