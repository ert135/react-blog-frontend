import * as React from 'react';
import * as router from 'react-router';
import './header.scss';

export default class Header extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <header className="header reveal alt">
                <a href="index.html" className="header__logo"></a>
            </header>
        );
    }
}