import React from 'react';

const RenderContent = ({ tag: Component, content }, index) => {
    if (Component)
        return (
            <Component key={index}>
                {Array.isArray(content) ? content.map(RenderContent) : content}
            </Component>
        );

    return content;
};

const Section = ({ id, title, contents }) => (
    <section id={id} className='wrapper'>
        <div className='inner'>
            <header className='special'>
                <h2>{title}</h2>
                {contents.map(RenderContent)}
            </header>
        </div>
    </section>
);

export default Section;
