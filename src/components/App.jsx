import "../scss/index.scss";
import Card1 from "./Card1";
import Card2 from "./Card2";

const App = () => {
    return (
        <div className="Container">
            <Card1 
                ProfileMainSectionStyle="ProfileMainSection"
                ProfileSnapshotStyle="ProfileSnapshot"
                ProfileNameStyle="ProfileName"
                ProfileTitleStyle="ProfileTitle"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink"

                ProfileContactButtonsStyle="ContactButtons"

                ProfileLinkedInColorStyle="LinkedInButton"
                ProfileLinkedInButtonStyle="LinkedInButtonText"

                ProfileSnapshotInfoStyle="ProfileSnapshotInfo"
                ProfileAboutHeadingStyle="ProfileAbout"
                ProfileAboutTextStyle="ProfileAboutText"
                ProfileInterestsHeadingStyle="ProfileInterests"
                ProfileInterestsTextStyle="ProfileAboutText"

                FooterLinksStyle="FooterLinks"
            />
            <Card2 
                ProfileMainSectionStyle="ProfileMainSection"
                ProfileSnapshotStyle="ProfileSnapshot"
                ProfileNameStyle="ProfileName"
                ProfileTitleStyle="ProfileTitle"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink"

                ProfileFullLengthEmailStyle="EmailButtonCard2"
                
                ProfileSnapshotInfoStyle="ProfileSnapshotInfo"
                ProfileAboutHeadingStyle="ProfileAbout"
                ProfileAboutTextStyle="ProfileAboutText"
                ProfileInterestsHeadingStyle="ProfileInterests"
                ProfileInterestsTextStyle="ProfileAboutText"

                FooterLinksStyle="FooterLinks"
            />
            <Card1 
                ProfileMainSectionStyle="ProfileMainSection-Light"
                ProfileSnapshotStyle="ProfileSnapshot-Light"
                ProfileNameStyle="ProfileName-Light"
                ProfileTitleStyle="ProfileTitle-Light"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink-Light" 

                ProfileContactButtonsStyle="ContactButtons-Light"

                ProfileLinkedInColorStyle="LinkedInButton-Alt"
                ProfileLinkedInButtonStyle="LinkedInButtonText"

                ProfileSnapshotInfoStyle="ProfileSnapshotInfo-Light"
                ProfileAboutHeadingStyle="ProfileAbout-Light"
                ProfileAboutTextStyle="ProfileAboutText-Light"
                ProfileInterestsHeadingStyle="ProfileInterests-Light"
                ProfileInterestsTextStyle="ProfileAboutText-Light"

                FooterLinksStyle="FooterLinks-Light"
            />
            <Card2 
                ProfileMainSectionStyle="ProfileMainSection-Light"
                ProfileSnapshotStyle="ProfileSnapshot-Light"
                ProfileNameStyle="ProfileName-Light"
                ProfileTitleStyle="ProfileTitle-Light"
                ProfileWebsiteLinkStyle="ProfileWebsiteLink-Light" 

                ProfileFullLengthEmailStyle="EmailButtonCard2"

                ProfileSnapshotInfoStyle="ProfileSnapshotInfo-Light"
                ProfileAboutHeadingStyle="ProfileAbout-Light"
                ProfileAboutTextStyle="ProfileAboutText-Light"
                ProfileInterestsHeadingStyle="ProfileInterests-Light"
                ProfileInterestsTextStyle="ProfileAboutText-Light"

                FooterLinksStyle="FooterLinks-Light"
            />
        </div>
    )
}

export default App;

