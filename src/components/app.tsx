import * as React from 'react';
import * as router from 'react-router';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import * as Login from './login';

import Main from './main';

export default class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.getTokenFromLocalStorage();
    }

    public componentDidMount(): void {
        this.setState({
            logged: false
        })
    }

    private getTokenFromLocalStorage(): void {
        console.log('getting token from local storage');
        //load token from local stroage
    }

    private onClickNav(): void {
        console.log('Clicking navbar');
    }

    public render() {
        console.log('state here is ', this.state);
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                    <AppBar
                        title="Robert Smith"
                        iconElementRight={<Login.Login/>}
                    />
                </MuiThemeProvider>
                <Main></Main>
            </div>
        );
    }
}
