import React from 'react'

function LastCommentComponent(props) {

    const {profile, onLike} = props;

    return (
        <article id={'last-comment-wrapper'}
             className={'pb-2 px-3 pt-3 border bg-white ' +
             'offset-lg-3 offset-sm-1 col-lg-6 col-sm-10 col-12 rounded-sm'}>

            <p className={"text-justify"}>
                {profile.lastComment}
            </p>

            <p className={'mt-4 mb-2'}><i className="far fa-thumbs-up"/> {profile.like}</p>
            <hr className={'my-2'}/>
            <button onClick={() => onLike(props.profile.id)}>C'est super <i className="far fa-thumbs-up"/></button>
        </article>
    );
}

export default LastCommentComponent;