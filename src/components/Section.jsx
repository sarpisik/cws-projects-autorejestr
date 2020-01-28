import React from 'react';

const RenderContent = ({ tag: Tag, content }) => <Tag>{content}</Tag>;

const Section = ({ id, title, contents }) => {
    return (
        <section id={id} className='wrapper'>
            <div className='inner'>
                <header className='special'>
                    <h2>{title}</h2>
                    {contents.map(RenderContent)}
                </header>
            </div>
        </section>
    );
};

export default Section;
