import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Button} from "react-bootstrap";

import TvTemplate from "./media/images/tv.png"

import "./styles/App.css"

const App = () => {
    const [inputVal, setInputVal] = React.useState("");
    const [switchText, setSwitchText] = React.useState("ВКЛ");

    React.useEffect(() => {
        //setTvContent(<img className="tv-content" src="https://belikebill.ga/billgen-API.php?default=1&name=yourname&sex=f" alt="no"/>)
    }, [])

    const changeInput = React.useCallback((e) => {
        console.log("changed")
        setInputVal(e.target.value);
    }, [])

    const changeSwitch = React.useCallback(() => {
        if (switchText === "ВКЛ") {
            setSwitchText("ВЫКЛ")
        } else {
            setSwitchText("ВКЛ")
        }
    }, [switchText])

    return (
        <div>
            <img className="tv-template" src={TvTemplate} alt="o"/>
            <Button className="tv-switch" variant="dark" onClick={changeSwitch}
            >{switchText}</Button>

            {switchText === "ВКЛ" ?
                <div>
                    <div className="square_black">a</div>
                    <input className="tv-enter" value={inputVal} onChange={changeInput}/>
                </div>
                :
                <img className="tv-content" src={`https://belikebill.ga/billgen-API.php?default=1&name=${inputVal}&sex=f`} alt="no"/>
            }
        </div>
    )
}

export default App;