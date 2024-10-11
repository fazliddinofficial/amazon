import React from "react";

type Props = {
  h1: string;
  img: string;
  alt: string;
  text: string;
  a: string;
  linkP: string;
};

const Card = ({ a, alt, h1, img, text, linkP }: Props) => {
  return (
    <div className="card">
      <h1>{h1}</h1>
      <img className="card-img" src={img} alt={alt} />
      <p className="card-p">{text}</p>
      <a className="card-a" href={a}>
        {linkP}
      </a>
    </div>
  );
};

export default Card;
