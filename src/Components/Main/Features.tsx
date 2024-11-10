import { useState } from "react";
import ImageTab1 from "../../images/illustration-features-tab-1.svg";
import ImageTab2 from "../../images/illustration-features-tab-2.svg";
import ImageTab3 from "../../images/illustration-features-tab-3.svg";

export default function Features() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  return (
    <section className="features">
      <div className="features-title">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <ul className="ul-features">
        <li>
          <button
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Simple Bookmarking
          </button>
        </li>
        <li>
          <button
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Speedy Searching
          </button>
        </li>
        <li>
          <button
            className={`tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Easy Sharing
          </button>
        </li>
      </ul>
      {activeTab === 1 && (
        <div className="tab-details" id="tab1Content">
          <div className="tab-text">
            <h3>Bookmark in one click</h3>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="more-info">More Info</button>
          </div>
          <div className="tab-img">
            <img src={ImageTab1} alt="" />
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="tab-details" id="tab2Content">
          <div className="tab-text">
            <h3>Intelligent search</h3>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="more-info">More Info</button>
          </div>
          <div className="tab-img">
            <img src={ImageTab2} alt="" />
          </div>
        </div>
      )}
      {activeTab === 3 && (
        <div className="tab-details" id="tab3Content">
          <div className="tab-text">
            <h3>Share your bookmarks</h3>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className="more-info">More Info</button>
          </div>
          <div className="tab-img">
            <img src={ImageTab3} alt="" />
          </div>
        </div>
      )}
    </section>
  );
}
