import React from 'react'
import './Contact.css'
import message from '../../assets/message-alert.png'
import mail from '../../assets/email-marketing.png'
import phone from '../../assets/phone-contact.png'
import location from '../../assets/map.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a04ba764-af5d-4fee-bd27-e201e5f9f73c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className = 'contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={message} alt="" /></h3>
        <p>We'd love to hear from you! For inquiries, support, or feedback, please reach out through the form below or our contact details. Your thoughts and suggestions are important to us, and we’re here to assist you every step of the way.</p>
        <ul>
            <li><img src={mail} alt="" /> Contact@EDUtOWN.dev </li>
            <li><img src={phone} alt="" /> +1 123-456-7890 </li>
            <li><img src={location } alt="" /> 77 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
