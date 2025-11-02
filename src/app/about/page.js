'use client';

import './style.css';

const Timeline = () => {
  const timelineData = [
    {
      year: "2005",
      title: "Some heading",
      description: "Jelly cotton candy apple pie toffee soufflé tiramisu pastry cupcake lollipop. Jelly beans wafer ice cream pastry topping topping gingerbread gummies. Brownie cotton candy sweet halvah oat cake.",
      image: "https://images.unsplash.com/photo-1753788132128-a6198b5d2f80?w=400",
      alt: "camera on a map on a desk"
    },
    {
      year: "2006", 
      title: "Some other heading",
      description: "Jelly-o chocolate cake sweet fruitcake soufflé. Dessert halvah gummi bears lollipop powder brownie candy bear claw. Jelly-o marshmallow candy candy jujubes croissant fruitcake. Lollipop pudding brownie icing halvah dessert dessert.",
      image: "https://images.unsplash.com/photo-1755371033904-21dd8a9d002b?w=400",
      alt: "mountain landscape"
    },
    {
      year: "2006", 
      title: "Some other heading",
      description: "Jelly-o chocolate cake sweet fruitcake soufflé. Dessert halvah gummi bears lollipop powder brownie candy bear claw. Jelly-o marshmallow candy candy jujubes croissant fruitcake. Lollipop pudding brownie icing halvah dessert dessert.",
      image: "https://images.unsplash.com/photo-1755371033904-21dd8a9d002b?w=400",
      alt: "mountain landscape"
    },
    {
      year: "2006", 
      title: "Some other heading",
      description: "Jelly-o chocolate cake sweet fruitcake soufflé. Dessert halvah gummi bears lollipop powder brownie candy bear claw. Jelly-o marshmallow candy candy jujubes croissant fruitcake. Lollipop pudding brownie icing halvah dessert dessert.",
      image: "https://images.unsplash.com/photo-1755371033904-21dd8a9d002b?w=400",
      alt: "mountain landscape"
    },
    {
      year: "2006", 
      title: "Some other heading",
      description: "Jelly-o chocolate cake sweet fruitcake soufflé. Dessert halvah gummi bears lollipop powder brownie candy bear claw. Jelly-o marshmallow candy candy jujubes croissant fruitcake. Lollipop pudding brownie icing halvah dessert dessert.",
      image: "https://images.unsplash.com/photo-1755371033904-21dd8a9d002b?w=400",
      alt: "mountain landscape"
    },
    {
      year: "2006", 
      title: "Some other heading",
      description: "Jelly-o chocolate cake sweet fruitcake soufflé. Dessert halvah gummi bears lollipop powder brownie candy bear claw. Jelly-o marshmallow candy candy jujubes croissant fruitcake. Lollipop pudding brownie icing halvah dessert dessert.",
      image: "https://images.unsplash.com/photo-1755371033904-21dd8a9d002b?w=400",
      alt: "mountain landscape"
    },
  ];

  return (
    <section className="timeline">
      {timelineData.map((item, index) => (
        <article key={index} className="timeline__article">
          <div className="timeline__content">
            <h1>{item.title}</h1>
            <time dateTime={item.year}>{item.year}</time>
            <hr />
            <p>{item.description}</p>
          </div>
          <img src={item.image} alt={item.alt} />
        </article>
      ))}
    </section>
  );
};

export default Timeline;