import { FaStar } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <section id="education" className="py-10 bg-base-200">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-6xl font-bold text-yellow-200 mb-6">
          Education
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <hr className="border-2 col-span-1 lg:mr-5" />
          <VerticalTimeline className="col-span-1 lg:col-span-11">
            <VerticalTimelineElement
              className="vertical-timeline-element--work text-white"
              contentStyle={{
                background: "rgb(82 82 91)",
                color: "rgb(229, 231, 235)",
              }}
              contentArrowStyle={
                {
                  // borderRight: "7px solid  rgb(33, 150, 243)",
                }
              }
              date="2019 - 2024"
              iconStyle={{ background: "rgb(82 82 91)", color: "#fff" }}
              icon={<IoSchoolSharp />}
            >
              <h3 className="vertical-timeline-element-title">
                B.Sc (Engineering) in Computer Science & Engineering
              </h3>
              <p>Faculty of Engineering and Technology, University of Dhaka</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2016 - 2018"
              contentStyle={{
                background: "rgb(254 249 195)",
                color: "rgb(161 161 170)",
              }}
              iconStyle={{
                background: "rgb(254 249 195)",
                color: "rgb(161 161 170)",
              }}
              icon={<FaSchoolCircleCheck />}
            >
              <h3 className="vertical-timeline-element-title">
                Higher Secondary School Certificate
              </h3>
              <p>Begum Badrunessa Govt. Girls College</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(82 82 91)", color: "#fff" }}
              icon={<FaStar />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Education;
