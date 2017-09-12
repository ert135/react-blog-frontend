//Libs
import * as React from "react";

//Stylesheets
import "./header.scss";

interface HeaderProps { }

interface HeaderState {
    openModal: boolean
}

export default class Header extends React.Component<HeaderProps, HeaderState> {

    constructor() {
        super();
        this.state = {
            openModal: false
        }
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="main-header">
                <h1 className="main-header__title"> Robert Smith </h1>
                <ul className="main-header__links">
                    <li className="main-header__link-item">
                    Projects
                    </li>
                    <li className="main-header__link-item">
                    Posts
                    </li>
                </ul>
                <div className="main-header__user-buttons-container">
                Log In
                </div>
                <div className="main-header__user-dropdown">

                </div>
            </div>
        )
    }
}

