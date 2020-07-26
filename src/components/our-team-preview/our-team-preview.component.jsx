import React from 'react';
import MemberCard from '../member-card/member-card.component';
import UnderlineHeader from '../underline-header/underline-header.component';
class OurTeamPreview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            members:[
                {
                name:"Waleed Khedr",
                job:"CO-Founder" ,
                imgSrc:"member1.jpg",
                link:['fb,inst,linkidin'],
                desc:'establish and direct the activities of a business startup'
            },
            {
                name:"Osama Abdellateif",
                job:"Front-End" ,
                imgSrc:"member2.jpg",
                link:['fb,inst,linkidin'],
                desc:'creating and optimizing interactive, user-friendly, websites'
            },
            {
                name:"Hassan Reda",
                job:"Android-Dev" ,
                imgSrc:"member3.PNG",
                link:['fb,inst,linkidin'],
                desc:' Designing and developing advanced applications for the Android platform. '
            },
            {
                name:"Ahmed Selemani",
                job:"UI&UX Designer" ,
                imgSrc:"member4.jpg",
                link:['fb,inst,linkidin'],
                desc:"creating interactive programs that enhance a customer's experience with a brand ."
            },
            {
                name:"Nour Raafat",
                job:"Software Engineer" ,
                imgSrc:"member5.jpg",
                link:['fb,inst,linkidin'],
                desc:"creating interactive programs that enhance a customer's experience with a brand ."
            },
            {
                name:"Ahmed Abdulrazek",
                job:"Android-Dev" ,
                imgSrc:"member6.PNG",
                link:['fb,inst,linkidin'],
                desc:"Designing and developing advanced applications for the Android platform. "
            }
        ]
        }
    }

    render() {
        return(
            <div className="our-team-preview">
               <div className="container">
               <UnderlineHeader>
            فريق العمل الخاص بنا 
        </UnderlineHeader>
               <div className="row">
              {
                  this.state.members.map(member => (
                      <MemberCard key={Math.random()} 
                      name={member.name} 
                      job={member.job} 
                      imgSrc={member.imgSrc} 
                      link={member.link}  
                      desc={member.desc} />
                  ))
              }
            </div>
               </div>
            </div>
        )
    }

}

export default OurTeamPreview;