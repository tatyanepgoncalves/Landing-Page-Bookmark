import ImageChrome from "../../images/logo-chrome.svg";
import ImageFirefox from "../../images/logo-firefox.svg";
import ImageOpera from "../../images/logo-opera.svg";

export default function Download() {
  return (
    <section className="download">
      <div className="download-title">
        <h2>Download the extension</h2>
        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>

      <div className="browsers">

        <div className="browsers-details chrome-brow">
          <img src={ImageChrome} alt="Chrome logo" />
          <h3>Add to Chrome</h3>
          <p>Minimum version 62</p>
          <button className="add-install">Add & Install Extension</button>
        </div>

        <div className="browsers-details firefox-brow">
          <img src={ImageFirefox} alt="" />
          <h3>Add to Firefox</h3>
          <p>Minimum version 55</p>
          <button className="add-install">Add & Install Extension</button>
        </div>

        <div className="browsers-details opera-brow">
          <img src={ImageOpera} alt="" />
          <h3>Add to Opera</h3>
          <p>Minimum version 46</p>
          <button className="add-install">Add & Install Extension</button>
        </div>
      </div>


    </section>
  )
}
