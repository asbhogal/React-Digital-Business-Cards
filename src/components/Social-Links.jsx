import faceBookIcon from "../mockups/Facebook-Icon.svg"
import githubIcon from "../mockups/GitHub-Icon.svg"
import instagramIcon from "../mockups/Instagram-Icon.svg"
import twitterIcon from "../mockups/Twitter-Icon.svg"

const FooterLinks = () => {
    return (
        <div className="FooterLinks">
            <img src={ faceBookIcon }></img>
            <img src={ githubIcon }></img>
            <img src={ instagramIcon }></img>
            <img src={ twitterIcon }></img>
        </div>
    )
}

export default FooterLinks;