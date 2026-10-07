import profileImage from "../../assets/wasify.jpg";

export default function Profile() {
  return (
    <section id="home" className="py-5">
      <div className="card">
        <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4">
          <img
            className="profile-avatar"
            src={profileImage}
            alt="Abdallah Elwasify"
          />

          <div className="text-center text-md-start">
            <h1 className="h2 mb-1">Abdallah Elwasify</h1>
            <p className="text-muted mb-2">CS Student | Front-End Developer</p>
            <p>
              I am a Computer Science student and Front-End Developer interested
              in building modern and responsive websites.
            </p>
            <a className="btn btn-calm" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
