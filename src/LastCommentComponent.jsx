import React from 'react'

function LastCommentComponent(props) {
    return (
        <article id={'last-comment-wrapper'}
             className={'my-2 p-2 border'}>

            <p className={"text-justify"}>
                Est superbus habena, cesaris.Est salvus secula, cesaris. Est superbus habena, cesaris.Est salvus secula ,
                cesaris.
            </p>

            <button>C'est super</button>
        </article>
    );
}

export default LastCommentComponent;