import ImageHero from "../../images/illustration-hero.svg";

export default function Home() {
  return (
    <section id="home">
      <div className="home-text">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <button className="btn-chrome">Get it on Chrome</button>
        <button className="btn-firefox">Get it on Firefox</button>
      </div>

      <div className="home-img">
        <img src={ImageHero} alt="Image Hero" />
      </div>
    </section>
  );
}
