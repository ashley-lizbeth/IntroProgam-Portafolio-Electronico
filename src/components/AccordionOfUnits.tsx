import Accordion from "react-bootstrap/Accordion";
import units from "../units";

export default function AccordionOfUnits() {
  return (
    <Accordion>
      {units.map((unit, unit_index) => {
        return (
          <Accordion.Item eventKey={unit_index.toString()}>
            <Accordion.Header>{unit.title}</Accordion.Header>
            <Accordion.Body>
              <ul>
                {unit.activities.map((activity, activity_index) => (
                  <li>
                    <a
                      href={`/IntroProgam-Portafolio-Electronico/${
                        unit_index + 1
                      }/${activity_index + 1}`}
                    >
                      {activity}
                    </a>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}
