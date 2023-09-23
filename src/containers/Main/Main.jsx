import React from "react";
import ImgTxt from "../../components/Image&Text/ImgTxt";
import TxtImg from "../../components/Text&Image/TxtImg";
import Idea from "../../assets/images/big-idea.png";
import Rule from "../../assets/images/rules.png";
import Criteria from "../../components/Criteria/Criteria";
import FAQs from "../../components/FAQs/FAQs";
import Privacy from "../../components/Privacy/Privacy";
import Partners from "../../components/Partners/Partners";
import Prizes from "../../components/Prizes/Prizes";
import Timeline from "../../components/Timelines/Timeline";

const Main = () => {
  return (
    <div>
      <ImgTxt
        img={Idea}
        header="Introduction to getlinked"
        colored="tech Hackathon 1.0"
        text="Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!"
      />
      <TxtImg
        img={Rule}
        header="Rules and"
        colored="Guidelines"
        text="Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!"
      />
      <Criteria />
      <FAQs />
      <Timeline />
      <Prizes />
      <Partners />
      <Privacy />
    </div>
  );
};

export default Main;
