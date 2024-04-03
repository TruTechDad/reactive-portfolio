import { useState } from "react";

const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === 'email') {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const message = document.getElementById('invalid');
    if (value.match(regex)) {
      message.style.display = 'none';
    } else {
      message.style.display = 'block';
    }

  }
}

export default function Contact() {
  const [validSubmission, setValidSubmission] = useState(false);
  const [validName, setValidName] = useState('');
  const [validEmail, setValidEmail] = useState('');
  const [validMessage, setValidMessage] = useState('');

  const buttonClick = (e) => {
    e.preventDefault();
    const name = document.getElementById('display1');
    const email = document.getElementById('display2');
    const message = document.getElementById('display3');

    if (validName === '') {
      name.style.display = 'block';
    } else {
      name.style.display = 'none';
    }
    if (validEmail === '') {
      email.style.display = 'block';
    } else {
      email.style.display = 'none';
    }
    if (validMessage === '') {
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
    }

    if (validName !== '' && validEmail !== '' && validMessage !== '') {
      setValidSubmission(true);
      setTimeout(() => {
        setValidSubmission(false);
      }, 5000);
    }

  }
  return (

    <div className="form">
      <h1>Contact</h1>
      <form>
        <label>Name:</label>
        <input className="field" type="text" id="name" name='name' value={validName} onChange={(e) => setValidName(e.target.value)} placeholder='Your Full Name' required />
        <label>Email:</label>
        <input className="field" type="email" id="email" name='email' value={validEmail} onChange={(e) => setValidEmail(e.target.value)} onBlur={handleInputChange} placeholder='Your Email' required />
        <p></p>
        <label>Message:</label>
        <textarea className="field" id="message" name="message" rows="7" value={validMessage} onChange={(e) => setValidMessage(e.target.value)} placeholder='Your Message' required></textarea>
        <p id="invalid" className="display">Your Email is Invalid</p>
        <p id="display1" className="display">Name is required</p>
        <p id="display2" className="display">Email is required</p>
        <p id="display3" className="display">Message is required</p>

        {validSubmission ? (<p>Message Sent</p>) : (<p></p>)}
        <button onClick={buttonClick} type='submit'>Send Message</button>
      </form>
    </div>

  );
}