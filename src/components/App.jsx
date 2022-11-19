import "../scss/index.scss";
import Card from "./Card";

const App = () => {
    return (
        <div className="Container">
            <Card 
                ProfileMainSectionStyle="ProfileMainSection"
                ProfileSnapshotStyle="ProfileSnapshot"
                ProfileNameStyle="ProfileName"
                ProfileTitleStyle="ProfileTitle"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink"

                ProfileSnapshotInfoStyle="ProfileSnapshotInfo"
                ProfileAboutHeadingStyle="ProfileAbout"
                ProfileAboutTextStyle="ProfileAboutText"
                ProfileInterestsHeadingStyle="ProfileInterests"
                ProfileInterestsTextStyle="ProfileAboutText"
            />
            <Card 
                ProfileMainSectionStyle="ProfileMainSection"
                ProfileSnapshotStyle="ProfileSnapshot"
                ProfileNameStyle="ProfileName"
                ProfileTitleStyle="ProfileTitle"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink"
                
                ProfileSnapshotInfoStyle="ProfileSnapshotInfo"
                ProfileAboutHeadingStyle="ProfileAbout"
                ProfileAboutTextStyle="ProfileAboutText"
                ProfileInterestsHeadingStyle="ProfileInterests"
                ProfileInterestsTextStyle="ProfileAboutText"
            />
            <Card 
                ProfileMainSectionStyle="ProfileMainSection-Light"
                ProfileSnapshotStyle="ProfileSnapshot-Light"
                ProfileNameStyle="ProfileName-Light"
                ProfileTitleStyle="ProfileTitle-Light"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink-Light" 

                ProfileSnapshotInfoStyle="ProfileSnapshotInfo-Light"
                ProfileAboutHeadingStyle="ProfileAbout-Light"
                ProfileAboutTextStyle="ProfileAboutText-Light"
                ProfileInterestsHeadingStyle="ProfileInterests-Light"
                ProfileInterestsTextStyle="ProfileAboutText-Light"
            />
            <Card 
                ProfileMainSectionStyle="ProfileMainSection-Light"
                ProfileSnapshotStyle="ProfileSnapshot-Light"
                ProfileNameStyle="ProfileName-Light"
                ProfileTitleStyle="ProfileTitle-Light"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink-Light" 

                ProfileSnapshotInfoStyle="ProfileSnapshotInfo-Light"
                ProfileAboutHeadingStyle="ProfileAbout-Light"
                ProfileAboutTextStyle="ProfileAboutText-Light"
                ProfileInterestsHeadingStyle="ProfileInterests-Light"
                ProfileInterestsTextStyle="ProfileAboutText-Light"
            />
        </div>
    )
}

export default App;

