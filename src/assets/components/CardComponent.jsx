import { cardObjects } from '../../HeroesArray';
import barbarianImage from '../../assets/images/barbarian.jpg';
import bardImage from '../../assets/images/bard.jpg';
import clericImage from '../../assets/images/cleric.jpg';
import druidImage from '../../assets/images/druid.jpg';
import fighterImage from '../../assets/images/fighter.jpg';
import gunslingerImage from '../../assets/images/gunslinger.jpg';
import monkImage from '../../assets/images/monk.jpg';
import paladinImage from '../../assets/images/paladin.jpg';
import rangerImage from '../../assets/images/ranger.jpg';
import rogueImage from '../../assets/images/rogue.jpg';
import sorcererImage from '../../assets/images/sorcerer.jpg';
import wizardImage from '../../assets/images/wizard.jpg';


function CardComponent() {
  return (
    <div className="card-container">
      {cardObjects.map(hero => (
        <div key={hero.id} className="card">
          <div className="card-text">
            <h3>{hero.title}</h3>
            <p>{hero.desc}</p>
          </div>
          <div className="card-img">
            {hero.title === "Barbarian" && <img src={barbarianImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Bard" && <img src={bardImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Cleric" && <img src={clericImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Druid" && <img src={druidImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Fighter" && <img src={fighterImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Gunslinger" && <img src={gunslingerImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Monk" && <img src={monkImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Paladin" && <img src={paladinImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Ranger" && <img src={rangerImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Rogue" && <img src={rogueImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Sorcerer" && <img src={sorcererImage} alt={hero.title} className="hero-img" />}
            {hero.title === "Wizard" && <img src={wizardImage} alt={hero.title} className="hero-img" />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;

/* <img src={hero.image} alt={hero.title} />
gave me broken img icons and wouldn't show the iamges
wich is why I started importing them one by one. 
not GeolocationCoordinates. would love to know if there is a better way */