import React from 'react'

const Styles = [
    {
        className : 'bg-transparent text-dark'
    },
    {
        className : 'bg-info text-white'
    },
    {
        className : 'bg-secondary text-white'
    }
];

function ProfileInfoComponent(props) {
    const {profile , onStyleChange } = props;

    return (
        <div id={'profile-wrapper'}
             className={'my-2 p-2 d-flex flex-column align-items-center border ' +
             Styles[profile.currentStyleID].className}>

            <img src={profile.img} alt={'profile_pic'}/>

            <div className={'row col-12'} id={"name&familyName"}>
                <p className={'col-6 my-2 py-2 px-0'}>
                    <span className={'font-weight-bold'}>First name: </span>
                    {profile.firstName}
                </p>
                <p className={'col-6 my-2 py-2 px-0'}>
                    <span className={'font-weight-bold'}>Family name: </span>
                    {profile.familyName}
                </p>
            </div>

            <p className={'m-0 my-2 col-12'}>
                <span className={'font-weight-bold'}>Date of birth: </span>
                {profile.birthday}
            </p>

            <button id={'change_style'}
                    className={'align-self-end'}
                    onClick={() => onStyleChange(profile)}>
                Change Style
            </button>
        </div>
    );
}

export default ProfileInfoComponent;