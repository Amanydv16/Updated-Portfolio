import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact &amp; Details</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:amanyadavji1616@gmail.com"
                data-cursor="disable"
              >
                Email — amanyadavji1616@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+918299572188"
                data-cursor="disable"
              >
                Phone — +91-8299572188
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech CSE (AI/ML), VIT Bhopal University — 2022–2026 (CGPA: 9.03/10)
            </p>
            <h4>Certifications</h4>
            <p>
              AWS Cloud Practitioner | Oracle Agentic AI | Google Data Analytics | Microsoft AI/ML &amp; SQL | IBM Generative AI
            </p>
          </div>
          <div className="contact-box">
            <h4>Social &amp; Links</h4>
            <a
              href="https://github.com/aman-ydvv16"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/Amanydv16/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: "1.5rem" }}>Achievements</h4>
            <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
              • Research Paper published in Springer Nature (Cardio-Oncology)<br />
              • Inter VIT Hackathon AdVITya '24 Podium Finish<br />
              • Adobe India Hackathon 2025 Round 2 Qualifier<br />
              • 1st Place: AARAMBH Basketball Championship '23
            </p>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aman Yadav</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
