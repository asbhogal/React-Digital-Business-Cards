import profilePicture from "../mockups/Laura-Smith-Pic.png"
import FooterLinks from "./Social-Links";

const Card = () => {
    return (
        <div className="Card">
            <div className="ProfilePicture">
                <img src={ profilePicture }></img>
            </div>
            <section className="ProfileMainSection">
            <div className="ProfileSnapshot">
                <h1 className="ProfileName">Laura Smith</h1>
                <h2 className="ProfileTitle">Frontend Developer</h2>
                <p className="ProfileWebsiteLink">laurasmith.website</p>
            </div>
            <div className="ContactButtons">
                <button className="EmailButton">Email</button>
                <button className="LinkedInButton">LinkedIn</button>
            </div>
            <div className="ProfileSnapshotInfo">
                <h3 className="ProfileAbout">About</h3>
                <p className="ProfileAboutText">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="ProfileInterests">Interests</h3>
                <p className="ProfileAboutText">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            </section>
            <FooterLinks />
        </div>
    )
}

export default Card;