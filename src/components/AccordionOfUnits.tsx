import Accordion from "react-bootstrap/Accordion";
import units from "../units";

export default function AccordionOfUnits() {
  return (
    <Accordion>
      {units.map((unit, unit_index) => {
        return (
          <Accordion.Item key={unit_index} eventKey={unit_index.toString()}>
            <Accordion.Header>{unit.title}</Accordion.Header>
            <Accordion.Body>
              <ul className="p-0 text-start">
                {unit.activities.map((activity, activity_index) => (
                  <li className="my-2" key={`${unit_index}.${activity_index}`}>
                    <a
                      href={`/IntroProgam-Portafolio-Electronico/${
                        unit_index + 1
                      }/${activity_index + 1}`}
                    >
                      {unit_index + 1}.{activity_index + 1}. {activity}
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
