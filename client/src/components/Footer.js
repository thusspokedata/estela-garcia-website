import React, { useContext } from "react";
import { AuthContext } from "../context/auth";

function Footer() {
  const { isLoggedIn, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <footer className="bg-white fixed-bottom  mt-1">
        <div className="border-top">
          <div className="container d-flex flex-column flex-sm-row justify-content-between pt-2">
            <p className="copyright fs-6 fw-lighter">
              <small>
                © 2022 · Made with ❤️ by&nbsp;
                <a
                  // rel="nofollow"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/wen-hsuan-liao-berlin/"
                  target="_blank"
                  className="text-decoration-none text-primary"
                >
                  Wen-Hsuan Liao&nbsp;
                </a>
                &&nbsp;
                <a
                  // rel="nofollow"
                  rel="noreferrer"
                  href="https://thusspokedata.com/"
                  target="_blank"
                  className="text-decoration-none text-primary"
                >
                  ThusSpokeData
                </a>
              </small>
            </p>
            {isLoggedIn ? (
              <span>
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-box-arrow-in-right"
                    viewBox="0 0 16 16"
                    onClick={logoutUser}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </a>
              </span>
            ) : (
              <span>
                <a href="/login">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </a>
              </span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
