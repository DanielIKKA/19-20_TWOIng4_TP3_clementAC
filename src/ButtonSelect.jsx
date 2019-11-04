import React from "react";

function ButtonSelect(props) {
    const {profile, onChangeProfile} = props;

    return (
        <button className={'px-4 text-white'}
                onClick={() => onChangeProfile(profile.id)}>
            {profile.firstName}
        </button>
    );
}

export default ButtonSelect;