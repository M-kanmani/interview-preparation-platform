import {
  FaHeadphones,
  FaComments,
  FaUser,
  FaSmile,
  FaShieldAlt,
  FaBookOpen,
  FaClock,
  FaLeaf,
  FaTrophy,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Tips() {
  const navigate = useNavigate();
  return (
    <div className="tips-page">

      {/* ================= COMMUNICATION SECTION ================= */}

      <section className="communication-section">

        <div className="section-heading blue">

          <div className="section-icon">
            <FaHeadphones />
          </div>

          <div>
            <h2>
              Achieve Success with Powerful Communication
            </h2>

            <p>
              You make a perfect first impression with powerful communication.
              <br />
              Choose your words carefully, create a dialogue,
              showcase your skills, and let your personality shine.
            </p>
          </div>

        </div>


        <div className="communication-cards">

          <div className="tip-card">
            <FaHeadphones />
            <p>Listen actively</p>
          </div>


          <div className="tip-card">
            <FaComments />
            <p>Provide clear answers</p>
          </div>


          <div className="tip-card">
            <FaUser />
            <p>
              Maintain good
              <br />
              non-verbal communication
            </p>
          </div>


          <div className="tip-card">
            <FaSmile />
            <p>
              Stay positive and avoid
              <br />
              negative comments
            </p>
          </div>


          <div className="tip-card">
            <FaShieldAlt />
            <p>
              Always maintain a
              <br />
              confident and friendly tone
            </p>
          </div>


          <div className="tip-card">
            <FaBookOpen />
            <p>
              Use examples to
              <br />
              illustrate your skills
            </p>
          </div>


        </div>

      </section>
      {/* ================= STAY CALM SECTION ================= */}


      <section className="calm-section">


        <div className="section-heading green">


          <div className="section-icon">
            <FaLeaf />
          </div>


          <div>

            <h2>
              Stay in Control of Yourself and Your Nerves
            </h2>


            <p>
              It’s completely normal to feel nervous before a job interview,
              but it can negatively impact your performance.
              <br />
              That’s why it’s important to keep your nerves under control.
            </p>


          </div>


        </div>
        <div className="calm-cards">
          <div className="calm-card">

            <FaBookOpen />

            <p>
              Preparation is key, so
              <br />
              ensure excellent
              <br />
              preparation
            </p>

          </div>
          <div className="calm-card">

            <FaClock />

            <p>
              Arrive 10 to 15
              <br />
              minutes early
            </p>

          </div>
          <div className="calm-card">

            <FaLeaf />

            <p>
              Practice mindfulness and
              <br />
              breathing techniques
              <br />
              to stay calm
            </p>

          </div>
          <div className="calm-card">

            <FaTrophy />

            <p>
              Stay confident by
              <br />
              reminding yourself of
              <br />
              your skills and success
            </p>

          </div>
        </div>
      </section>
      {/* ================= INTERVIEWERS SECTION ================= */}

      <section className="interviewers-section">
        <div className="section-heading purple">
          <div className="section-icon">
            <FaUser />
          </div>
          <div>

            <h2>
              Know Your Interviewers
            </h2>
            <p>
              If you know who your interviewers are, you can tailor your
              answers to their background and expectations.
              <br />
              This increases your chances of making a lasting impression.
            </p>
          </div>
        </div>
        <div className="interviewer-cards">
          <div className="interviewer-card">

            <FaUser />

            <div>

              <h3>
                Research your interviewers
              </h3>

              <p>
                Look up your interviewers on LinkedIn to learn more about
                their background and skills.
              </p>

            </div>

          </div>
          <div className="interviewer-card">

            <FaComments />

            <div>

              <h3>
                Prepare questions based on your interviewers
              </h3>

              <p>
                Prepare specific questions that match their experience
                and expectations.
              </p>

            </div>

          </div>
          <div className="interviewer-card">

            <FaSmile />

            <div>

              <h3>
                Prepare questions you can ask
              </h3>

              <p>
                Ask meaningful questions to show your interest and
                enthusiasm.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================= STATISTICS SECTION ================= */}
      <section className="statistics-section">
        <div className="stat-card">
          <h1>
            67%
          </h1>
          <p>
            Of all job interviews turn out more positively when the
            candidate maintains eye contact with the interviewers.
          </p>
        </div>
        <div className="stat-card">
          <h1>
            71%
          </h1>
          <p>
            Of all employers reject candidates who do not dress
            appropriately for their job interview.
          </p>
        </div>
        <div className="stat-card">
          <h1>
            91%
          </h1>
          <p>
            Of all employers strongly prefer candidates with
            relevant work experience.
          </p>
        </div>
      </section>
      {/* ================= DO'S AND DON'TS SECTION ================= */}
      <section className="dos-donts-section">
        <div className="dos-box">
          <h2>
            ✔ Do's
          </h2>
          <ul>
            <li>
              <b>Show your enthusiasm</b>
              <br />
              Show interest in the role and company.
            </li>
            <li>
              <b>Articulate your value</b>
              <br />
              Clearly explain what you bring to the table.
            </li>
            <li>
              <b>Show your initiative</b>
              <br />
              Highlight your problem-solving skills.
            </li>
            <li>
              <b>Ask questions</b>
              <br />
              Show your interest towards the company.
            </li>
          </ul>
        </div>
        <div className="donts-box">
          <h2>
            ✖ Don'ts
          </h2>
          <ul>
            <li>
              <b>Don't be late</b>
              <br />
              Arrive 10-15 minutes early.
            </li>
            <li>
              <b>Don't lie or exaggerate</b>
              <br />
              Be honest about your skills.
            </li>
            <li>
              <b>Don't forget to listen</b>
              <br />
              Understand questions before answering.
            </li>
            <li>
              <b>Don't be too confident</b>
              <br />
              Maintain a professional attitude.
            </li>
          </ul>
        </div>
      </section>
      {/* ================= BOTTOM CTA ================= */}
      <section className="bottom-cta">
        <h2>
          Perfectly Prepare Yourself for Your Next Job Interview?
        </h2>
        <p>
          Let's get started and make your job interview a great success!
        </p>
        <button onClick={() => navigate("/dashboard")}>
          🚀 Go to Dashboard
        </button>
      </section>
    </div>
  );
}
export default Tips;