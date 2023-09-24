import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import TimelineComp from "../TimelineComp/TimelineComp";
import "./Timeline.css";
import strwhite from "../../assets/images/starwhite.png";
import strpink from "../../assets/images/smallPink.png";
import strgray from "../../assets/images/stargray1.png";

const Timeline = () => {
  return (
    <div className="app__timeline" id="timeline">
      <div className="time-text">
        <HeaderText text="Timeline" />
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="time-comps">
        <div className="outline-div">
          <img className="blink strs-pink" src={strpink}/>
          <img className="blink strs-gray" src={strgray}/>
          <img className="blink strs-wite" src={strwhite}/>
          <div className="time-flex">
            <span className="right">
              <h3>Hackathon Announcement</h3>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <h3 className="mobile-date">November 18, 2023</h3>
            </span>
            <h3 className="left-date">November 18, 2023</h3>
          </div>
          <div className="time-flex">
            <h3 className="right-date">November 18, 2023</h3>
            <span className="left">
              <h3>Hackathon Announcement</h3>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
              <h3 className="mobile-date">November 18, 2023</h3>
            </span>
          </div>
          <div className="time-flex">
            <span className="right">
              <h3>Hackathon Announcement</h3>
              <p className="shrt">Interested Participants are no longer Allowed to register</p>
              <h3 className="mobile-date">November 18, 2023</h3>
            </span>
            <h3 className="left-date">November 18, 2023</h3>
          </div>
          <div className="time-flex">
            <h3 className="right-date">November 18, 2023</h3>
            <span className="left">
              <h3>Hackathon Announcement</h3>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <h3 className="mobile-date">November 18, 2023</h3>
            </span>
          </div>
          <div className="time-flex">
            <span className="right">
              <h3>Hackathon Announcement</h3>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions{" "}
              </p>
              <h3 className="mobile-date">November 18, 2023</h3>
            </span>
            <h3 className="left-date">November 18, 2023</h3>
          </div>
          <div className="time-flex">
            <h3 className="right-date">November 18, 2023</h3>
            <span className="left">
              <h3>Hackathon Announcement</h3>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day{" "}
              </p>
              <h3 className="mobile-date">November 18, 2023</h3>
            </span>
          </div>
        </div>
        <div className="desktopflex">
          <TimelineComp number="1" />
          <TimelineComp number="2" />
          <TimelineComp number="3" />
          <TimelineComp number="4" />
          <TimelineComp number="5" />
          <TimelineComp number="6" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
