const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Wahyu Satrio</span>
        <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            Codeefly
          </a>
        </span>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/wahyusatrio/">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/wahyusatrio.exe">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://behance.net/wahyusatrio">
              <i className="fa-brands fa-behance" />
            </a>
          </li>
          <li>
            <a href="https://github.com/wahyu4754">
              <i className="fa-brands fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
