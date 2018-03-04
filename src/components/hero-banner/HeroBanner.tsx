import * as React from 'react';
import config from '../../../config/config';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import './heroBanner.scss';

export default class HeroBanner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <section className="banner">
                <div className="banner__inner">
                    <header className="banner__header">
                        <h1>Robert Smith</h1>
                    </header>
                    <div className="banner__content">
                        <p>
                            Software Engineer
                        </p>
                        <ul className="banner__actions">
                            <li>
                                <a 
                                    href="#one" 
                                    className="button next scrolly"
                                >
                                Get Started
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
