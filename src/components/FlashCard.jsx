import React from "react";
import "./FlashCard.css";

const FlashCard = () => {
  const cards = [
    { img: '/pictures/space-invaders.jpg', answer: 'Space Invaders' },
    { img: '/pictures/super-mario.jpg', answer: 'Super Mario' },
    { img: '/pictures/pong.webp', answer: 'Pong' },
    { img: '/pictures/breakout.webp', answer: 'Breakout' },
    { img: './pictures/pacman.webp', answer: 'PacMan' }
  ];

  const [isFlipped, setIsFlipped] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const nextCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    if (randomIndex === index) {
      randomIndex = (index + 1) % cards.length;
    }
    setIsFlipped(false);
    setIndex(randomIndex);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const currentCard = cards[index];

  return (
    <>
      <div className="header">
        <div className="text-container">
          <h1 className="title">GUESS RETRO GAME</h1>
          <p className="description">
            Test your retro gaming knowledge by guessing the classic arcade game from its image.
          </p>
          <p className="card-info">Total Cards: {cards.length}</p>
        </div>
      </div>
      <div className="card-container" onClick={handleClick}>
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="card-inner">
            <div className="card-front">
              <img src={currentCard.img} alt="Game Front" className="image" />
            </div>
            <div className="card-back">
              <h1>{currentCard.answer}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button onClick={nextCard}>→</button>
      </div>
    </>
  );
};

export default FlashCard;
