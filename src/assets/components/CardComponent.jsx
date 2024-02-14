import { cardObjects } from '../../HeroesArray';

function CardComponent() {
  return (
    <div className="card-container">
      {cardObjects.map(hero => (
        <div key={hero.id} className="card">
          <h3>{hero.title}</h3>
          <p>{hero.desc}</p>
          <img src={hero.image} alt={hero.title} />
        </div>
      ))}
    </div>
  );
}

export default CardComponent;