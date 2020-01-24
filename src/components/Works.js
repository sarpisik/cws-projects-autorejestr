import React from 'react';
import works from '../constants/works.json';

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

const Work = ({ icon, title, description }, index) => (
    <WorkContainer key={index}>
        <WorkContentContainer>
            <header>
                <Icon icon={icon} />
                <Title text={title} />
            </header>
            <Description text={description} />
        </WorkContentContainer>
    </WorkContainer>
);

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
                <div className='highlights'>{works.map(Work)}</div>
            </div>
        </section>
    );
};

export default Works;
