import React from 'react'

function LastCommentComponent(props) {

    const {profile, onLike} = props;

    return (
        <article id={'last-comment-wrapper'}
             className={'my-2 p-2 border'}>

            <p className={"text-justify"}>
                {props.profile.lastComment}
            </p>

            <button onClick={() => onLike(props.profile.id)}>C'est super {profile.like}</button>
        </article>
    );
}

export default LastCommentComponent;