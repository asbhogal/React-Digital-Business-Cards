import profilePicture from "../mockups/Laura-Smith-Pic.png";
import emailIcon from "../mockups/Mail-Icon.svg";
import linkedinMiniIcon from "../mockups/LinkedIn-Mini-Icon.svg";
import FooterLinks from "./FooterLinks";

const Card = (props) => {
    console.log(props);
    return (
        <div className="Card">
            <div className="ProfilePicture">
                <img src={ profilePicture }></img>
            </div>
            <section className={props.ProfileMainSectionStyle}>
            <div className={props.ProfileSnapshotStyle}>
                <h1 className={props.ProfileNameStyle}>Laura Smith</h1>
                <h2 className={props.ProfileTitleStyle}>Frontend Developer</h2>
                <p className={props.ProfileWebsiteLinkStyle}>laurasmith.website</p>
            </div>
            <div className="ContactButtons">
                <button className={props.ProfileFullLengthEmailStyle}>
                    <img src={ emailIcon }></img>
                    <span className="EmailButtonText">Email</span>
                </button>
            </div>
            <div className={props.ProfileSnapshotInfoStyle}>
                <h3 className={props.ProfileAboutHeadingStyle}>About</h3>
                <p className={props.ProfileAboutTextStyle}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className={props.ProfileInterestsHeadingStyle}>Interests</h3>
                <p className={props.ProfileInterestsTextStyle}>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            </section>
            <FooterLinks />
        </div>
    )
}

export default Card;