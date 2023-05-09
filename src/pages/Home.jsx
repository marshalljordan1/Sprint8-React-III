import home from "../images/starwars-home.png";

const Home = () => {
  return (
    <>
      <img
        className="home-image"
        src={home}
        alt="Welcome to the StarWars Website!"
      ></img>
    </>
  );
};

export default Home;
