import React from 'react';

const Icon = ({ icon }) => (
    <a href='#' className={`icon ${icon}`}>
        <span className='label'>Icon</span>
    </a>
);

const Title = ({ text }) => <h3>{text}</h3>;

const Description = ({ text }) => <p>{text}</p>;

const WorkContentContainer = ({ children }) => (
    <div className='content'>{children}</div>
);

const WorkContainer = ({ children }) => <section>{children}</section>;

const Work = ({ icon, title, description }) => {
    return (
        <WorkContainer>
            <WorkContentContainer>
                <header>
                    <Icon icon={icon} />
                    <Title text={title} />
                </header>
                <Description text={description} />
            </WorkContentContainer>
        </WorkContainer>
    );
};

const Works = () => {
    return (
        <section id='section2' className='wrapper'>
            <div className='inner'>
                <header className='special'>
                    <h2>Sem turpis amet semper</h2>
                    <p>
                        In arcu accumsan arcu adipiscing accumsan orci ac. Felis
                        id enim aliquet. Accumsan ac integer lobortis commodo
                        ornare aliquet accumsan erat tempus amet porttitor.
                    </p>
                </header>
                <div className='highlights'>
                    <Work
                        icon='fa-vcard-o'
                        title='Feugiat consequat'
                        description='Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.'
                    />
                    <section>
                        <div className='content'>
                            <header>
                                <a href='#' className='icon fa-files-o'>
                                    <span className='label'>Icon</span>
                                </a>
                                <h3>Ante sem integer</h3>
                            </header>
                            <p>
                                Nunc lacinia ante nunc ac lobortis ipsum.
                                Interdum adipiscing gravida odio porttitor sem
                                non mi integer non faucibus.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className='content'>
                            <header>
                                <a href='#' className='icon fa-floppy-o'>
                                    <span className='label'>Icon</span>
                                </a>
                                <h3>Ipsum consequat</h3>
                            </header>
                            <p>
                                Nunc lacinia ante nunc ac lobortis ipsum.
                                Interdum adipiscing gravida odio porttitor sem
                                non mi integer non faucibus.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className='content'>
                            <header>
                                <a href='#' className='icon fa-line-chart'>
                                    <span className='label'>Icon</span>
                                </a>
                                <h3>Interdum gravida</h3>
                            </header>
                            <p>
                                Nunc lacinia ante nunc ac lobortis ipsum.
                                Interdum adipiscing gravida odio porttitor sem
                                non mi integer non faucibus.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className='content'>
                            <header>
                                <a href='#' className='icon fa-paper-plane-o'>
                                    <span className='label'>Icon</span>
                                </a>
                                <h3>Faucibus consequat</h3>
                            </header>
                            <p>
                                Nunc lacinia ante nunc ac lobortis ipsum.
                                Interdum adipiscing gravida odio porttitor sem
                                non mi integer non faucibus.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className='content'>
                            <header>
                                <a href='#' className='icon fa-qrcode'>
                                    <span className='label'>Icon</span>
                                </a>
                                <h3>Accumsan viverra</h3>
                            </header>
                            <p>
                                Nunc lacinia ante nunc ac lobortis ipsum.
                                Interdum adipiscing gravida odio porttitor sem
                                non mi integer non faucibus.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Works;
