import { useState } from "react";
import emailjs from '@emailjs/browser';

// import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form values:", form);

    const serviceID = 'service_wtnfr2a';
    const templateID = 'template_bios5fp'; 
    const publicKEY = '5TAFVijc7pcofLlVF';

    emailjs.send(
      serviceID,
      templateID,
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      publicKEY
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      alert('ສົ່ງຂໍ້ຄວາມສຳເລັດແລ້ວ!!');
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" }); // ລ້າງຟອມ
      
      // ໃຫ້ປຸ່ມກັບມາເປັນປົກກະຕິຫຼັງຈາກ 3 ວິນາທີ
      setTimeout(() => setSubmitted(false), 3000);
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert('ມີບາງຢ່າງຜິດພາດ!!!');
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="noise" />

      <div className="contact-card">
        <div className="card-header">
          <span className="tag">GET IN TOUCH</span>
          <h1 className="heading">
            Let's <em>talk</em>
          </h1>
          <p className="subtext">
            Drop us a message and we'll get back to you.
          </p>
        </div>

        <div className="form-body">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="What's on your mind?"
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button
            className={`submit-btn ${submitted ? "sent" : ""}`}
            onClick={handleSubmit}
            disabled={submitted}
          >
            <span className="btn-text">
              {submitted ? "✓ Message Sent" : "Send Message"}
            </span>
            <span className="btn-glow" />
          </button>
        </div>

        <div className="accent-bar" />
      </div>
    </div>
  );
};

export default ContactForm;