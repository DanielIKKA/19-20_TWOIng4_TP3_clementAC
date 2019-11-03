import React from 'react'

function ProfileInfoComponent(props) {
        return (
            <div id={'profile-wrapper'}
                 className={'my-2 p-2 d-flex flex-column align-items-center border'}>

                <img alt={'profile_pic'}/>

                <div className={'row col-12'} id={"name&familyName"}>
                    <p className={'col-6 my-2 py-2 px-0'}>{props.profile.firstname}</p>
                    <p className={'col-6 my-2 py-2 px-0'}>{props.profile.famillyName}</p>
                </div>

                <p className={'m-0 my-2 col-12'}>{props.profile.birthday}</p>

                <button id={'change_style'}
                        className={'align-self-end'}>Change Style</button>
            </div>
        );
}

export default ProfileInfoComponent;