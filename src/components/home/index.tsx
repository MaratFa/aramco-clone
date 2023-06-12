import "../../styles/main.css";

export const Home = () => {
  return (
    <div className="home">
      <section role="navigation" className="main-nav js-main-nav">
        <a href="#saudi-app" className="main-nav__skip-nav">
          Skip to content
        </a>
        <img
          src={require("../../images/spacer.gif")}
          srcSet={`${require("../../images/affiliateLogo.png")},  ${require("../../images/affiliateLogo-2x.png")} 2x`}
          alt="Aramco Logo"
        />
      </section>

    </div>
  );
};


/*
export const Home = () => {
  return (
    <div className="home">
      <section role="navigation" className="main-nav js-main-nav">
        <div className="main-nav__dummy" ref="dummy"></div>
        <div className="main-nav__float-wrap" ref="floating">
          <a href="#saudi-app" className="main-nav__skip-nav">
            Skip to content
          </a>
          <div className="main-nav__control-bar"></div>
          <button
            className="main-nav__open-btn"
            aria-controls="main-nav__container--identifier"
          >
            Menu
          </button>
          <div className="main-nav__logo-small">
            <a href="/en/">
              <img
                src={require("../../images/spacer.gif")}
                srcSet={`${require("../../images/affiliateLogo.png")},  ${require("../../images/affiliateLogo-2x.png")} 2x`}
                alt="Aramco Logo"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
*/