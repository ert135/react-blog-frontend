//Libs
import * as React from "react";

//Stylesheets
import "./header.scss";

interface HeaderProps { }

export default class Header extends React.Component<HeaderProps, undefined> {
    render() {
        return (
            <div className="Header">
                This is the header component
            </div>
        )
    }

    componentDidMount(){

    }
}