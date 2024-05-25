import Text from "./text";
import Heading from "./heading"; 
import { v4 as uuid } from 'uuid';

function Skills({ skills, heading }) {
    return skills.map((skill, index) => {
      if (index === 0) {
        return (
          <div key={uuid()}>
            <div className="" key={uuid()}>
              <Heading text={heading} className={'heading'}></Heading>
            </div>
            <Text text={skill.name} key={index}></Text>
          </div>
        );
      } else {
        return <Text text={skill.name} key={index}></Text>;
      }
    });
  }

  export default Skills