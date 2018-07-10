import * as React from 'react';
import * as backgroundAnimation from '../../resources/backgroundanimation';
import './heroBanner.scss';
declare const p5: any;

export default class HeroBanner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        let background = document.getElementById('animated-background-canvas');
        new p5(backgroundAnimation.p5Wrapper, background);
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
                        <ul className="banner__actions">
                            <li>
                                <i className="banner__icon fab fa-linkedin"></i>
                            </li>
                            <li>
                                <i className="banner__icon fab fa-github"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
