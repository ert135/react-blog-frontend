import * as React from 'react';
import config from '../../../config/config';
import * as backgroundAnimation from '../../resources/backgroundanimation';

import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import './heroBanner.scss';

export default class HeroBanner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        console.log('backgroudn animation is ', backgroundAnimation);
    }

    public componentDidMount() {
        console.log('backgroudn animation jghfjghfis ', backgroundAnimation);
    }

    public render() {
        return (
            <section className="banner">
                <div id="animated-background-canvas"></div>
                <div className="banner__inner">
                    <header className="banner__title">
                        Robert Smith
                    </header>
                    <div className="banner__content">
                        <p>
                            Software Engineer
                        </p>
                        <ul className="banner__actions">
                            <li>
                                <a 
                                    href="#one" 
                                    className="icon alt fa-github"
                                >
                                Github
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#one" 
                                    className="icon alt fa-linkedin"
                                >
                                Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
