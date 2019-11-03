import React from 'react';
import { render } from 'react-dom';
import ProfileInfoComponent from './ProfileInfoComponent'
import LastComment from './LastCommentComponent'

class App extends React.Component {

    state = {
        profiles : [
            {
                firstname : 'Bob',
                famillyName : 'Dupont',
                birthday : '11th March 1989'
            },
            {
                firstname : 'Martine',
                famillyName : 'Dupont',
                birthday : '14th July 1995'
            },
            {
                firstname : 'Camille',
                famillyName : 'Miller',
                birthday : '21st September 1996'
            }
        ]
    };

    current = this.state.profiles[0];
    

    render() {
        return (
            <div>
                {this.state.profiles.map((profile, index) =>
                    <button key={index}>{profile.famillyName}</button>
                )}

                <ProfileInfoComponent profile={this.current}/>

                <LastComment profile={this.current}/>
            </div>
        );
    }
}

render(
    <App/>, document.getElementById('root')
);