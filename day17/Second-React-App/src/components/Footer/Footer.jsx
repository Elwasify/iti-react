export default function Footer() {
  return (
    <footer className="site-footer mt-4 py-4">
      <div className="container text-center">
        <address className="mb-2">
          <p className="mb-1">
            Email:{" "}
            <a href="mailto:abdallahelwasify0@gmail.com">
              abdallahelwasify0@gmail.com
            </a>
          </p>
          <p className="mb-0">Location: Sharqia, Egypt</p>
        </address>

        <div className="mb-2">
          <a
            href="https://github.com/Elwasify"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abdallah-elwasify-7b604a379"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <small>&copy; 2026 Abdallah Elwasify. All rights reserved.</small>
      </div>
    </footer>
  );
}
