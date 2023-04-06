import { useState } from "react";
import "./Header.css";

import GithubIcon from "../../Assets/github.png";
import LinkedInIcon from "../../Assets/linkedin.png";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
    setNavOpen(!navOpen);
  };
  const headerLinks = [
    {
      title: "👨🏼‍💻️ Work",
      href: "#work",
    },
    {
      title: "📄 Resume",
      href: "#resume",
    },
    {
      title: "💬 Contact",
      href: "#contact",
    },
  ];
  return (
    <header>
      <div className="container">
        <ul className="header-link">
          <p>
            <strong>Dylan Baker</strong>
          </p>
          <li>
            <a
              href="https://www.linkedin.com/in/dylanmbaker/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedIn logo" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/dbvker"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GithubIcon} alt="GitHub logo" />
            </a>
          </li>
        </ul>
        <nav>
          <ul className="header-link header-link-right">
            {headerLinks.map((link, id) => {
              return (
                <li key={id}>
                  <a href={link.href}>{link.title}</a>
                </li>
              );
            })}
          </ul>
          <svg
            className="nav-btn"
            style={{ cursor: "pointer" }}
            viewBox="0 0 100 80"
            width="20"
            height="20"
            onClick={handleClick}
          >
            <rect width="100" height="10" fill="#ffffff"></rect>
            <rect y="30" width="100" height="10" fill="#ffffff"></rect>
            <rect y="60" width="100" height="10" fill="#ffffff"></rect>
          </svg>
        </nav>
      </div>
      <div className={navOpen ? "menu-nav" : "menu-nav-closed"}>
        <div className="menu-nav-container">
          <div className="menu-nav-header">
            <ul className="header-link">
              <p>
                <strong>Dylan Baker</strong>
              </p>
              <li>
                <a
                  href="https://www.linkedin.com/in/dylanmbaker/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LinkedInIcon} alt="LinkedIn logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dbvker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GithubIcon} alt="GitHub logo" />
                </a>
              </li>
            </ul>
            <nav>
              <ul className="header-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                  height="18"
                  width="16"
                  viewBox="0 0 329.26933 329"
                  onClick={handleClick}
                >
                  <path
                    d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
                    fill="#FFFFFF"
                  />
                </svg>
              </ul>
            </nav>
          </div>
          <div className="menu-nav-links">
            <ul>
              {headerLinks.map((link, id) => {
                return (
                  <li key={id}>
                    <a href={link.href} onClick={() => setNavOpen(false)}>
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
