import React from 'react';
import './member-card.style.scss';
import './../../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSpinner, faChevronLeft, faPhoneVolume, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaIconsReact } from 'social-media-icons-react';
const MemberCard = ({ name, job, imgSrc, link, desc }) => (
    <div className="member-card col col-12 col-md-6 col-lg-4 text-center" style={{ overflow: 'hidden' }}>
        <div className="inner-content text-center">
            <div className="img-container">
                <img src={require(`./../../images/member images/${imgSrc}`)} />
            </div>
            <h3 className="text-center">{name}</h3>
            <span className="member-job">{job}</span>
            <p className="text-center">{desc}</p>
            <div className="team-icon-container centerH">
                 <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,119,181,1)" iconSize="1" roundness="50%" url="https://some-website.com/my-social-media-url" size="38" />
                 <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(56,56,56,1)" iconSize="1" roundness="50%" url="https://some-website.com/my-social-media-url" size="38" />
                 <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(69,116,195,1)" iconSize="1" roundness="50%" url="https://some-website.com/my-social-media-url" size="38" />



            </div>
        </div>
    </div>
)

export default MemberCard;