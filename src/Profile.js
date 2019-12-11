import React, { Component } from "react";

class Profile extends Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  // Get user profile data
  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }

  // Render Profile page
  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <>
       <div className="profile-page">
        <div className="content">
        <h1 class="text-color txt-center">Welcome</h1>
        <div className="fl">
           <img
            style={{ maxWidth: 200, maxHeight: 200, borderRadius:50, position:"relative", top:25 }}
            src={profile.picture}
            alt="profile pic"
            />
        </div>
        <div className="fr">
            <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
        </div>
       </div>

      </>
    );
  }
}

export default Profile;
