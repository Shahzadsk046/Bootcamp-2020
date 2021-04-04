import React from 'react';

function Book(props) {
    return(
        <div>
            <h1>We are reading <u>{props.name}</u> book and it's <em>Author</em> is <u>{props.author}</u></h1>
        </div>
    )
}

export default Book;