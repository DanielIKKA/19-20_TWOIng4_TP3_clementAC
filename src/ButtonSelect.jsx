import React from "react";

function ButtonSelect(props) {
    const {profile, onChangeProfile} = props;

    return (
        <button className={'mx-2'}
                onClick={() => onChangeProfile(profile.id)}>
            {profile.firstName}
        </button>
    );
}

export default ButtonSelect;