import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='inner'>
                <div className='content'>
                    <section>
                        <h3>Skontaktuj się z nami</h3>
                        <p>Nasze biuro jest czynne:</p>
                        <ul>
                            <li>od poniedziałku do piątku od 8:00-18:00</li>
                            <li>
                                Soboty od 8:00-14:00 w pozostałych dniach i
                                godzinach po wcześniejszym umówieniu
                            </li>
                        </ul>
                    </section>
                    <section>
                        <p>al. Grunwaldzka 56, lokal 210, 80-241 Gdańsk</p>
                    </section>
                    <section>
                        <h4>Magna sed ipsum</h4>
                        <ul className='plain'>
                            <li>
                                <a href='#'>
                                    <i className='icon fa-twitter'>&nbsp;</i>
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i className='icon fa-facebook'>&nbsp;</i>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i className='icon fa-instagram'>&nbsp;</i>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <i className='icon fa-github'>&nbsp;</i>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className='copyright'>&copy;{year} Autorejestr</div>
                <div className='copyright'>
                    <a
                        href='https://sarpisik.com'
                        className='smooth-bottom'
                        title='Web Developer'>
                        Made By SARP IŞIK
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
