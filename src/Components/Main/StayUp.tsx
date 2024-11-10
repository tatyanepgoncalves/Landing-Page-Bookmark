import { ChangeEvent, useState } from "react"

export default function StayUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
      alert("Thank you for subscribing!");
    }
  };


  return (
    <section>
      
      <p>35,000+ already joined</p>
      <h2>Stay up-to-date with what we’re doing</h2>

      <div className="mail-box">
        <div className="mail-input">
          <input type="email" name="mail"  id="mail" placeholder="Enter your email address" value={email} onChange={handleEmailChange} />
          {error  && <small>{error}</small>}
        </div>
        
        <button className="contact-us" onClick={validateEmail}>
          Contact Us
        </button>

      </div>

    </section>
  )
}
