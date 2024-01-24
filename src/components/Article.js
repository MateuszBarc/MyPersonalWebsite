import React from 'react';

const Article = (props) => {

    const styles = {
        marginTop: 40
    }
    return (
        <article style={styles}>
            <h2 style={{
                marginBottom: 3,
                textTransform: "uppercase",
                textAlign: 'center',
            }}>{props.title}</h2>

            <p style={{
                fontSize: 15,
                textAlign: 'center'
            }}>{props.text}</p>
        </article>
    );
}

export default Article;
