import * as React from 'react';
import * as router from 'react-router';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component<any, any> {

    constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <AppBar title="Robert Smith"/>
                {this.props.children}
            </MuiThemeProvider>
        );
    }
}
