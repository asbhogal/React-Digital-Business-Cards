import faceBookIcon from "../mockups/Facebook-Icon.svg"
import githubIcon from "../mockups/GitHub-Icon.svg"
import instagramIcon from "../mockups/Instagram-Icon.svg"
import twitterIcon from "../mockups/Twitter-Icon.svg"

const FooterLinks = () => {
    return (
        <div className="FooterLinks">
            <img className="FooterIcons" src={ twitterIcon }></img>
            <img className="FooterIcons" src={ faceBookIcon }></img>
            <img className="FooterIcons" src={ instagramIcon }></img>
            <img className="FooterIcons" src={ githubIcon }></img>
        </div>
    )
}

export default FooterLinks;

// TWITTER FACEBOOK INSTAGRAM GITHUB