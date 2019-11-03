import React from 'react';
import { render } from 'react-dom';
import ProfileInfoComponent from './ProfileInfoComponent'
import LastComment from './LastCommentComponent'

class App extends React.Component {

    state = {
        profiles : [
            {
                id : 0,
                firstName : 'Bob',
                familyName : 'Dupont',
                birthday : '11th March 1989',
                img : 'img1',
                lastComment : 'Try decorating the cocktail sauce truffelss with sour ricotta and olive oil, boilled.' +
                    'With zucchinis drink plain vinegar.',
                like : 0,
                currentStyleID : 0
            },
            {
                id : 1,
                firstName : 'Martine',
                familyName : 'Dupont',
                birthday : '14th July 1995',
                img : 'img2',
                lastComment : 'Est superbus habena, cesaris.Est salvus secula, cesaris. Est superbus habena, cesaris.' +
                    'Estsalvus secula , cesaris.',
                like : 0,
                currentStyleID : 0
            },
            {
                id : 2,
                firstName : 'Camille',
                familyName : 'Miller',
                birthday : '21st September 1996',
                img : 'img3',
                lastComment : 'Accelerative, indeed, boldly mineral! Resist finally like a crazy hurq. ' +
                    'Terrifying, spheroid tribbles nosily yearn a mysterious, intelligent space.',
                like : 0,
                currentStyleID : 0
            }
        ],

        currentID : 0
    };

    handleChangeProfile = (id) => {
        this.setState({currentID : id});
    };

    handleChangeStyle = (profile) => {
        const currentStyleID = profile.currentStyleID;
        const newStyle = (currentStyleID+1) > 2 ? 0 : currentStyleID+1;

        const profiles = this.state.profiles.slice();
        profiles[profile.id].currentStyleID = newStyle;

        this.setState({profiles});
    };

    handleLikes = (profileID) => {
        const count = this.state.profiles[profileID].like+1 ;

        const profiles = this.state.profiles.slice();
        profiles[profileID].like = count;

        this.setState(profiles);
    };

    render() {
        const currentProfile = this.state.profiles[this.state.currentID];

        return (
            <div>
                {this.state.profiles.map((profile) =>
                    <button key={profile.id}
                            onClick={() => this.handleChangeProfile(profile.id)}>
                        {profile.familyName}
                    </button>
                )}

                <ProfileInfoComponent profile={currentProfile} onStyleChange={this.handleChangeStyle}/>

                <LastComment profile={currentProfile} onLike={this.handleLikes}/>
            </div>
        );
    }
}

render(
    <App/>, document.getElementById('root')
);