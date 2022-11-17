import FooterLinks from "./Social-Links";

const Card = () => {
    return (
        <div className="Card">
            <div className="ProfilePicture"></div>
            <div className="ProfileSnapshot">
                <h1 className="ProfileName">Laura Smith</h1>
                <h2 className="ProfileTitle">Frontend Developer</h2>
                <p classname="ProfileWebsiteLink">laurasmith.website</p>
            </div>
            <div className="ContactButtons">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>

            <FooterLinks />
        </div>
    )
}

export default Card;