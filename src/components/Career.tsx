import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Software Engineer</h4>
                <h5>
                  <img src="/images/monetunes.png" alt="Monetunes" className="company-logo" />
                  Monetunes
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Aug 2026 – Present. Contributing as a Full Stack Software Engineer to AI-powered solutions for music publishing using Python, FastAPI, Django, PostgreSQL, and modern machine learning frameworks. Building optimized backend APIs, automating content processing &amp; metadata workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>
                  <img src="/images/songdew.png" alt="Songdew" className="company-logo" />
                  Songdew
                </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Jun 2026 – Jul 2026. Contributed to scalable web apps using Python, Django, PostgreSQL, JavaScript, HTML, and CSS. Developed backend modules, RESTful APIs, role-based access control, and optimized database queries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Intern</h4>
                <h5>
                  <img src="/images/instahyre.jpg" alt="Instahyre" className="company-logo" />
                  Instahyre
                </h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Feb 2026 – Apr 2026. Resolved production issues in REST APIs, backend validation, and data pipelines, improving system reliability by 30%. Developed scalable full-stack features using Django, Python, and JavaScript, reducing API latency by 20% for high-concurrency environments (10K+ req/day).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering Intern</h4>
                <h5>
                  <img src="/images/indianoil.jpg" alt="Indian Oil" className="company-logo" />
                  Indian Oil Corporation Ltd.
                </h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Nov 2025 – Feb 2026. Designed a machine learning-based fuel demand forecasting system, improving prediction accuracy by 15%. Analyzed 10K+ records using EDA and feature engineering, boosting model performance by 20% using ensemble techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI/ML)</h4>
                <h5>VIT Bhopal University · CGPA 9.03</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              Aug 2022 – Jun 2026. Specialized in Artificial Intelligence and Machine Learning.
              Core CS Foundation: Data Structures &amp; Algorithms, OOP's, Operating Systems,
              Computer Networks, DBMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
