import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Reusable GameCard component
const GameCard = ({ title, imgSrc, link }) => (
  <div className="col-md-3 mb-4">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-decoration-none"
    >
      <div className="card h-100 shadow-lg border-0 hover-shrink">
        <h2 className="h4 card-header bg-primary text-white">{title}</h2>
        <div className="card-body d-flex align-items-center justify-content-center p-3">
          <img
            src={imgSrc}
            className="img-fluid rounded shadow-sm"
            alt={title}
            style={{ maxHeight: '300px', objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
      </div>
    </a>
  </div>
);

ReactDOM.render(
  <div className="container my-5">
    <div className="text-center mb-5">
      <h1 className="display-1">Favourite Games</h1>
      <ul className="list-inline">
        <li className="list-inline-item mx-4">Red Dead Redemption 2</li>
        <li className="list-inline-item mx-4">Witcher 3 Wild Hunt</li>
        <li className="list-inline-item mx-4">Cyberpunk 2077</li>
        <li className="list-inline-item mx-4">Baldur's Gate 3</li>
      </ul>
    </div>
    <div className="row text-center">
      <GameCard
        title="Red Dead Redemption 2"
        imgSrc="https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
        link="https://en.wikipedia.org/wiki/Red_Dead_Redemption_2"
      />
      <GameCard
        title="Witcher 3 Wild Hunt"
        imgSrc="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Witcher_3_cover_art.jpg/220px-Witcher_3_cover_art.jpg"
        link="https://en.wikipedia.org/wiki/The_Witcher_3:_Wild_Hunt"
      />
      <GameCard
        title="Cyberpunk 2077"
        imgSrc="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
        link="https://en.wikipedia.org/wiki/Cyberpunk_2077"
      />
      <GameCard
        title="Baldur's Gate 3"
        imgSrc="https://upload.wikimedia.org/wikipedia/en/1/12/Baldur%27s_Gate_3_cover_art.jpg"
        link="https://en.wikipedia.org/wiki/Baldur%27s_Gate_3"
      />
    </div>
  </div>,
  document.getElementById("root")
);
