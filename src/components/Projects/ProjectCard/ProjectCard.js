import React from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  BtnGroup,
  CardGridWrapper,
} from "./ProjectCardElements";
import ScrollAnimation from "react-animate-on-scroll";

function ProjectCard() {
  return (
    <CardGridWrapper>
      {ProjectList.map((list, index) => (
        <ScrollAnimation animateIn="fadeInUp" key={index}>
          <Card>
            <CardLeft>
              <img src={list.img} alt={list.name} />
            </CardLeft>
            <CardRight>
              <h4>{list.title}</h4>
              <BtnGroup>
                
                {list.demo_url.length > 0 && (
                  <a
                    className="demobtn"
                    href={list.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo ➜
                  </a>
                )}
              </BtnGroup>
            </CardRight>
          </Card>
        </ScrollAnimation>
      ))}
    </CardGridWrapper>
  );
}

export default ProjectCard;
