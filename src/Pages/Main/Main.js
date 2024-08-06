import React from 'react'
import './Main.css'

import student from '../../assets/student.png'
import youth_edu_icon from '../../assets/youth_edu_icon.png'
import higher_edu_icon from '../../assets/higher_edu_icon.png'
import vocational_edu_icon from '../../assets/vocational_edu_icon.png'
import university_logo_1 from '../../assets/university-logo-1.png'
import university_logo_2 from '../../assets/university-logo-2.png'
import university_logo_3 from '../../assets/university-logo-3.png'
import university_logo_4 from '../../assets/university-logo-4.png'
import westbridge_college from '../../assets/Westbridge College.png'
import check_icon from '../../assets/check icon.png'

const Main = () => {
  return (
    <div className='main'>
       <div className='contents-wrapper1'>
            <div className="contents-wrapper1-left">
                <p className="paragraph1">AMPLIFYNG AWESOMENESS</p>
                <p className="paragraph2">
                    You.To the Power of the EduCore Learning Management Platform.
                </p>
                <p className="paragraph3">Educators are powerful people doing important, life-changing things. Canvas doesn't get in the way of that—it just makes those important, life-changing things easier to do and easier to share.</p>
                <div className="button-box">
                    <button className="request-info">REQUEST</button>
                    <button className="try-it-free">TRY IT FREE ➔</button>
                </div>
            </div>
            <div class="contents-wrapper1-right">
                <div class="img-box">
                    <img src={student} alt=""></img>
                </div>
            </div>
       </div>    
       <div className='contents-wrapper2'>
            <div className="contents-wrapper2-top">
                <p className="paragraph1">EDUCORE IS FOR EVERY LEARNER</p>
                <p className="paragraph2">EduCore LMS solutions for school and beyond.</p>
                <p className="paragraph3">EduCore is built to make teaching and learning easier for everyone, from the littlest learners to college faculty to business leaders. Learn more about how Canvas works with your institution.</p>
            </div>
            <div className="contents-wrapper2-bottom">
                <div className="edu-curriculum">
                    <div className="img-box">
                        <img src={youth_edu_icon} alt=""></img>
                    </div>
                    <p className="paragraph1">LMS for Youth</p>
                    <p className="paragraph2">With its easy-to-use LMS and integrations for all your favorite Youth apps, the EduCore platform helps you create a custom Youth online learning environment.</p>
                    <div className="link-wrapper">
                        <a href="#" className="learn-more">LEARN MORE ➔</a>
                    </div>
                </div> 
                <div className="edu-curriculum">
                    <div className="img-box">
                        <img src={higher_edu_icon} alt=""></img>
                    </div>
                    <p className="paragraph1">Higher Ed LMS</p>
                    <p className="paragraph2">With learning tools that support instructor innovation and student engagement, EduCore is more than higher education software. It's a platform for student success.</p>
                    <div className="link-wrapper">
                        <a href="#" className="learn-more">LEARN MORE ➔</a>
                    </div>
                </div> 
                <div className="edu-curriculum">
                    <div className="img-box">
                        <img src={vocational_edu_icon} alt=""></img>
                    </div>
                    <p className="paragraph1"> LMS for Vocational Education</p>
                    <p className="paragraph2">Institutions are expanding their blended and online learning programs, and EduCore’ open architecture provides the most engaging, reliable, extensible learning ecosystem.</p>
                    <div className="link-wrapper">
                        <a href="#" className="learn-more">LEARN MORE ➔</a>
                    </div>
                </div> 
            </div>
       </div>    
       <div className='contents-wrapper3'>
            <p className="paragraph">We Work With The Best</p>
            <div className="university-logo-wrapper">
                <div className="university-logo">
                    <img src={university_logo_1} alt=""></img>
                </div>
                <div className="university-logo">
                    <img src={university_logo_2} alt=""></img>
                </div>
                <div className="university-logo">
                    <img src={university_logo_3} alt=""></img>
                </div>
                <div className="university-logo">
                    <img src={university_logo_4} alt=""></img>
                </div> 
            </div>
       </div>    
       <div className='contents-wrapper4'>
            <div className="contents-wrapper4-top">
                <p className="paragraph1">THE DIFFERENCE-MAKERS</p>    
                <p className="paragraph2">What makes EduCore such a powerful online learning tool?</p>    
                <p className="paragraph3">There's a lot we can say about the EduCore learning ecosystem, which includes the user-friendly Canvas LMS, but we only have so much space. Here are just a few of EduCore' education-boosting benefits:</p>    
            </div>
            <div className="contents-wrapper4-bottom">
                <div className="service-features">
                    <p className="paragraph1">Integrations</p>
                    <p className="paragraph2">EduCore supports custom integration with SIS and open LTI integrations with your favorite education apps. Keep using your tired-and-true content and tools, and try some new ones, too.</p>
                    <div className="link-wrapper">
                        <a href="" className="learn-more">LEARN MORE →</a>
                    </div>
                </div>
                <div className="service-features">
                    <p className="paragraph1">Community</p>
                    <p className="paragraph2">EduCore is powered by one of the largest, most active, most connected educator communities on the planet. These folks are an endless source of innovation, information, and support.</p>
                    <div className="link-wrapper">
                        <a href="" className="learn-more">LEARN MORE →</a>
                    </div>
                </div>
                <div className="service-features">
                    <p className="paragraph1">Partners</p>
                    <p className="paragraph2">Our partners are thoroughly vetted technology, service, and content providers who share our commitment to providing stellar teaching and learning experience.</p>
                    <div className="link-wrapper">
                        <a href="" className="learn-more">LEARN MORE →</a>
                    </div>
                </div>
            </div>
       </div>    
       <div className='contents-wrapper5'>
            <div className="statistical-description">
                <p className="paragraph1">STATISTICALLY SPEAKING</p>
                <p className="paragraph2">EduCore Stats</p>
                <p className="paragraph3">The numbers don't lie. EduCore is reliable, secure, and educator-loved at every level.</p>
            </div>
            <div className="statistical-figures-wrapper">
                <div className="statistical-figures1">
                    <p className="paragraph1">99.9%</p>
                    <p className="paragraph2">system uptime</p>
                </div>
                <div className="statistical-figures2">
                    <p className="paragraph1">100%</p>
                    <p className="paragraph2">native cloud</p>
                </div>
                <div className="statistical-figures3">
                    <p className="paragraph1">#1</p>
                    <p className="paragraph2">LMS in the world</p>
                </div>
            </div>
       </div>    
       <div className='contents-wrapper6'>
            <div class="contents-wrapper6-left">
                <p class="paragraph1">CUSTOMER STORY</p>
                <p class="paragraph2">Westbridge College: Transforming Education with EduCore LMS</p>
                <p class="paragraph3">Learn how Westbridge in Australia doubled down on online learning to achieve a significant increase in student engagement using EduCore LMS.</p>
                <div class="paragrah-wrapper">
                    <div class="img-box">
                        <img src={check_icon} alt=""></img>
                    </div>
                    <p>1,500% increase in student participation during the transition</p>
                </div>
                <div class="paragrah-wrapper">
                    <div class="img-box">
                        <img src={check_icon} alt=""></img>
                    </div> 
                    <p>Today, EduCore is the “spine for all digital teaching and learning” and has taken a responsive online learning approach.</p> 
                </div>
                <button>READ THE CASE STUDY →</button>
            </div>
            <div class="contents-wrapper6-right">
                <div class="img-box">
                    <img src={westbridge_college} alt=""></img>
                </div>
            </div>
       </div>    
    </div>
  )
}

export default Main