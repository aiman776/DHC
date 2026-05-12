import { useState } from "react";
import "./Contact.css";

export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // handle input
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  // ✅ handle form submission (updated)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      const data = await response.json();
      console.log("Server response:", data);

      if (response.ok) {
        alert("Message sent successfully!");
        setContact({ username: "", email: "", message: "" }); // reset form
      } else {
        alert("Failed to send message: " + data.msg);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
    
      <div className="contact-page ">
        {/* Left Side - Info Section */}
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>    Have questions or need support?  <br/>
    The Elegant Picks team is always here to help you with a smooth and <br/> elegant shopping experience.</p>

          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h4>Address</h4>
              <p> Lahore, Pakistan  <br/>
                   Elegant Picks – Online Store</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <h4>Phone</h4>
              <p>+92 300 1234567
               <br/>Available Monday–Friday, 9 AM – 5 PM</p>
            </div>
          </div>

          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>support@elegantpicks.com </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="right-contain">
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  placeholder=""
                  required
                />
                <label htmlFor="username">Username</label>
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  placeholder=""
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                  placeholder=""
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>

      {/* Google Map Section */}
      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          
        ></iframe>
      </section>
    </>
  );
};
