import Heading from "./heading";
import monthToNumber from "./dataFormatFunction";
import { extractYear } from "./dataFormatFunction";
import Text from "./text";

function Project({ title, heading }) {
  return title.map((project, index) => {
    if (index === 0) {
      return (
        <div key={index} className="second-section mb-2">
          <div>
            <Heading text={heading} className={'heading'}></Heading>
          </div>
          <div className="company">
            <div className="company-box">
              <div className="company-name">{project.name}</div>

              <div className="date flex gap-1">
                <div className="startDate">
                  {monthToNumber(project.startDate.month) +
                    '/' +
                    extractYear(project.startDate.year)}
                </div>
                <div>-</div>
                <div className="endDate">
                  {monthToNumber(project.endDate.month) +
                    '/' +
                    extractYear(project.endDate.year)}
                </div>
              </div>
            </div>
            <div className="job-name">{project.other}</div>
            <Text
              className={'prev-job text-left'}
              text={project.details}
            ></Text>
          </div>
        </div>
      );
    } else {
      return (
        <div key={index} className="second-section mb-2">
          <div className="company">
            <div className="company-box">
              <div className="company-name">{project.name}</div>
              <div className="date flex gap-1">
                <div className="startDate">
                  {monthToNumber(project.startDate.month) +
                    '/' +
                    extractYear(project.startDate.year)}
                </div>
                <div>-</div>
                <div className="endDate">
                  {monthToNumber(project.endDate.month) +
                    '/' +
                    extractYear(project.endDate.year)}
                </div>
              </div>
            </div>
            <div className="job-name">{project.other}</div>
            <Text
              className={'prev-job text-left'}
              text={project.details}
            ></Text>
          </div>
        </div>
      );
    }
  });
}
export default Project;
