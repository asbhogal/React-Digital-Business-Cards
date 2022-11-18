import profilePicture from "../mockups/Laura-Smith-Pic.png";
import emailIcon from "../mockups/Mail-Icon.svg";
import linkedinMiniIcon from "../mockups/LinkedIn-Mini-Icon.svg";
import FooterLinks from "./FooterLinks";

const Card = () => {
    return (
        <div className="Card">
            <div className="ProfilePicture">
                <img src={ profilePicture }></img>
            </div>
            <section className="ProfileMainSection-Light">
            <div className="ProfileSnapshot-Light">
                <h1 className="ProfileName-Light">Laura Smith</h1>
                <h2 className="ProfileTitle-Light">Frontend Developer</h2>
                <p className="ProfileWebsiteLink-Light">laurasmith.website</p>
            </div>
            <div className="ContactButtons">
                <button className="EmailButton">
                    <img src={ emailIcon }></img>
                    <span className="EmailButtonText">Email</span>
                </button>
                <button className="LinkedInButton">
                <img src={ linkedinMiniIcon }></img>
                <span className="LinkedInButtonText">LinkedIn</span>
                </button>
            </div>
            <div className="ProfileSnapshotInfo-Light">
                <h3 className="ProfileAbout-Light">About</h3>
                <p className="ProfileAboutText-Light">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="ProfileInterests-Light">Interests</h3>
                <p className="ProfileAboutText-Light">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            </section>
            <FooterLinks />
        </div>
    )
}

export default Card;