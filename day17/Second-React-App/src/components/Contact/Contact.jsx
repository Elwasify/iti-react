import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
  subject: "project",
  contactMethod: "email",
  terms: false,
};

export default function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setSent(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setFormData(initialForm);
  }

  function handleReset() {
    setFormData(initialForm);
    setSent(false);
  }

  return (
    <section id="contact">
      <div className="card">
        <div className="card-body p-4">
          <h2 className="h4 mb-3">Contact Me</h2>

          {sent && (
            <div className="alert alert-success py-2">
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="form-control"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="subject">
                Subject
              </label>
              <select
                className="form-select"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="project">Project</option>
                <option value="job">Job Opportunity</option>
                <option value="question">Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <span className="form-label d-block">
                Preferred Contact Method
              </span>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="contact-email"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === "email"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="contact-email">
                  Email
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  id="contact-phone"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === "phone"}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="contact-phone">
                  Phone
                </label>
              </div>
            </div>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-calm" type="submit">
                Submit
              </button>
              <button
                className="btn btn-soft"
                type="button"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
