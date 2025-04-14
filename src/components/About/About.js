import React from "react";
import { stackList } from "../../data/ProjectData";
import profileimg1 from "../../assets/profileimg1.png";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me(Vishnu)</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src={profileimg1}
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Vishnu Singh</strong>. I'm originally from Ghaziabad. I gained valuable experience through various entry-level positions, which significantly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              {/* My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at BCIT, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike. */}
              With over 2.5 years of experience as a WordPress Developer and Web Designer, I specialize in creating responsive, user-friendly websites using HTML, CSS, Bootstrap, and JavaScript. My expertise includes developing custom WordPress themes and plugins, delivering tailored solutions to meet unique client requirements.
              Currently, I am working as a WordPress Developer at Apcomp Infotech in Noida, where I am responsible for designing and developing dynamic websites, optimizing performance, and ensuring mobile responsiveness. Over the course of my career, I have successfully worked on 40+ web development projects, ranging from business websites and eCommerce platforms to custom WordPress solutions for various industries.
              I hold a Master of Computer Applications MCA degree from R.D. Engineering College and am passionate about crafting engaging digital experiences while continuously enhancing my skills in web development.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              {/* Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development. */}
              I am passionate about exploring the latest trends and technologies in WordPress development, including advanced theme customization, plugin development, and website optimization. I look forward to future opportunities where I can contribute to building high-quality, scalable, and user-centric websites using WordPress.
              <div className="tagline2">
              I have hands-on experience with these technologies and continue to refine and expand my skill set to stay aligned with industry best practices and evolving development trends.
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
