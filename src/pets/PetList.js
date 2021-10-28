import Francis from './pics/francis.png';
import Meechum from './pics/meechum.png';
import Harold from './pics/harold.jpg';

import './PetList.css';

// HI CONTRIBUTORS: Add any and all pet bios as new <li> elements within the <ul> below

function PetList() {
  return (
    <ul className="pet-list">
      <li className="pet-list-item">
        <img className="pet-pic" src={Meechum} alt='gray cat inspecting twig' />
        <div>
          <p className="pet-name">
            Meechum
          </p>
          <p className="pet-title">
            Senior Amazon Delivery Box Inspector
          </p>
          <ul>
            <li>Excellent customer service skills</li>
            <li>If he fits, he will sits</li>
            <li>Very punctual and attentive (if food is involved)</li>
          </ul>
        </div>
      </li>
      <li className="pet-list-item francis">
        <img className="pet-pic" src={Francis} alt='light orange cat sitting on keyboard' />
        <div>
          <p className="pet-name">
            Francis
          </p>
          <p className="pet-title">
            Regional Keyboard Warming Specialist
          </p>
          <p>
            Words to live by:
          </p>
          <figure>
            <blockquote>
              "I don't need permission, make my own decisions. That's my prerogative."
            </blockquote>
            <figcaption>- Britney Spears</figcaption>
          </figure>
        </div>
      </li>
      <li className="pet-list-item harold">
        <img className="pet-pic" src={Harold} alt='an old shepherd dog with his eyes closed and a flower booping him on the head' />
        <div>
          <p className="pet-name">
            Harold
          </p>
          <p className="pet-title">
            Senior Gardener
          </p>
          <p>
            Words to live by:
          </p>
          <figure>
            <blockquote>
              "What is a weed? A plant whose virtues have never been discovered."
            </blockquote>
            <figcaption>- Ralph Waldo Emerson</figcaption>
          </figure>
        </div>
      </li>
    </ul>
  );
}

export default PetList;
