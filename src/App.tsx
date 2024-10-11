import React from "react";
import "./App.css";
import Header from "./components/header";
import Card from "./components/main/index";

function App() {
  return (
    <body>
      <Header />
      <main className="main">
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2024/03/25/17/19/art-8655200_640.jpg"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2024/09/27/09/03/bird-9078403_640.jpg"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2022/09/28/11/31/halloween-7484855_640.jpg"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2024/03/01/18/33/winter-8607009_640.jpg"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2024/09/30/10/43/flowers-9085492_640.jpg"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2024/04/18/10/03/polar-bear-8703952_640.jpg"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2023/07/11/12/21/squash-8120435_640.jpg"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
        <Card
          h1="Gaming accessories"
          img="https://cdn.pixabay.com/photo/2024/03/27/11/18/witch-8658915_640.png"
          alt="img"
          text="Discover more"
          a="See all deals"
          linkP="See all deals"
        />
      </main>
    </body>
  );
}

export default App;
