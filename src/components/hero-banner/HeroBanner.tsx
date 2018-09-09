import * as React from 'react';
import * as backgroundAnimation from '../../resources/backgroundanimation';
import './heroBanner.scss';
declare const p5: any;

export default class HeroBanner extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        console.log('called here');
        let background = document.getElementById('animated-background-canvas');
        new p5(backgroundAnimation.p5Wrapper, background);
    }

    public render() {
        return (
            <section className="banner">
                <div id="animated-background-canvas"></div>
                <div className="banner__inner">
                    <header className="banner__title">
                        <h1>Robert Smith</h1>
                        <p className='banner__subtitle'>Software Engineer</p>
                    </header>
                    <div className="banner__content">
                        <ul className="banner__actions">
                            <li>
                                <a 
                                    className="banner__icon fab fa-linkedin"
                                    href='https://www.linkedin.com/in/robert-smith-832b7a52/'
                                ></a>
                            </li>
                            <li>
                                <a 
                                    className="banner__icon fab fa-github"
                                    href='https://github.com/ert135'
                                >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
