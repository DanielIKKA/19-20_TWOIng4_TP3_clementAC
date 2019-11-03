import React from 'react'

function LastCommentComponent(props) {

    const {profile, onLike} = props;

    const h1Style = {
        fontSize : '1.15em',
        color : '#004085'
    };

    const h1SpanStyle = {
        fontSize: '0.7em',
        color : '#6c757d'
    };

    return (
        <article id={'last-comment-wrapper'}
             className={'pb-2 px-3 pt-3 border bg-white ' +
             'offset-lg-3 offset-sm-1 col-lg-6 col-sm-10 col-12 rounded-sm'}>

            <header className={'mb-2 row col-12 align-items-center'}>
                <img className={'rounded-circle'} src={profile.img} height={40} alt={'img_profile'}/>
                <h1 className={'ml-3 my-0'} style={h1Style}>
                    {profile.firstName + ' ' + profile.familyName}
                    <br/>
                    <span style={h1SpanStyle}>6h • <i className={'fas fa-globe-europe'}/></span>
                </h1>
            </header>
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