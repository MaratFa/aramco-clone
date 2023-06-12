import "../styles/main.css";


export const Home = () => {
  return (
    <div className="home">
      <section role="navigation" className="main-nav js-main-nav" >
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
              src={require("../images/spacer.gif")}
              srcSet={`${require("../images/affiliateLogo.png")},  ${require("../images/affiliateLogo-2x.png")} 2x`}
              alt="Aramco Logo"
            />
          </a>
        </div>
        <div className="main-nav__container" id="main-nav__container--identifier" aria-live="polite">
          <aside className="main-nav__hygiene">
            <div className="main-nav__hygiene-inner">
              <ul className="main-nav__hygiene-items">
                <li>
                  <div inline-template>
                    <div className="main-nav__hygiene-dropdown">
                      <a href="#" className="main-nav__hygiene-item" role="button">
                        <span>News &amp;Media</span>
                      </a>
                      <ul className="main-nav__hygiene-item-block" >
                        <li>
                          <a href="/en/news-media/news-archive" className="main-nav__hygiene-subitem">Search all news</a>
                        </li>
                        <li>
                          <a href="/en/news-media/news" className="main-nav__hygiene-subitem">Latest news</a>
                        </li>
                        <li>
                          <a href="/en/news-media/speeches" className="main-nav__hygiene-subitem">Speeches</a>
                        </li>
                        <li>
                          <a href="/en/news-media/publications" className="main-nav__hygiene-subitem">Publications</a>
                        </li>
                        <li>
                          <a href="/en/news-media/media-gallery" className="main-nav__hygiene-subitem">Media gallery</a>
                        </li>
                        <li>
                          <a href="/en/news-media/mediaresources" className="main-nav__hygiene-subitem">Resources for journalists</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/en/magazine/elements" className="main-nav__hygiene-item">Elements Magazine
                  </a>
                </li>
              </ul>
              <ul className="main-nav__hygiene-items">
                <li>
                  <a href="/en/website-information/contactus" className="main-nav__hygiene-item">Contact us
                  </a>
                </li>
                <li>
                  <div inline-template>
                    <div className="main-nav__hygiene-dropdown">
                      <a href="#" className="main-nav__hygiene-item" role="button">
                        <span>E-Service Portals</span>
                      </a>
                      <ul className="main-nav__hygiene-item-block" >
                        <li>
                          <a href="https://customer.aramco.com" className="main-nav__hygiene-subitem" target="_blank" rel="noopener">Customer login</a>
                        </li>
                        <li>
                          <a href="https://access.aramco.com" className="main-nav__hygiene-subitem" target="_blank" rel="noopener">E-Services login</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="main-nav__hygiene-dropdown">
                  <a href="#" className="main-nav__hygiene-item" >You are in: Aramco Global
                  </a>
                </li>
                <li>
                  <a href="/ar" className="main-nav__hygiene-item">العربية
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <nav className="main-nav__main">
            <div className="main-nav__main-primary" role="list">                        </div>
            <menu type="search" inline-template>
              <div role="listitem" className="main-nav__main-primary-item main-nav__main-primary-item--search">
                <button className="main-nav__close-btn" aria-controls="main-nav__container--identifier">
                  <span>Close nav - X</span>
                </button>
                <button className="main-nav__main-search-open">
                  <span>Open Search Btn</span>
                </button>
                <div className="main-nav__main-secondary-block main-nav__main-secondary-block--search" aria-live="polite" >
                  <div className="main-nav__main-secondary-block-inner main-nav__main-secondary-block-inner--search">
                    <form className="main-nav__main-search-form" action="/en/search" role="search">
                      <label htmlFor="search-site-bar">
                        <span className="main-nav__main-search-label">Search Bar
                        </span>
                        <span className="main-nav__main-search-text-container">
                          <input name="query" id="search-site-bar" className="main-nav__main-search-text" placeholder="" />
                        </span>
                      </label>
                      <button className="main-nav__main-search-submit">
                        <span aria-label="SEARCH">SEARCH
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </menu>
            <div className="main-nav__main-primary-nav">
              <menu type="submenu" inline-template>
                <div role="listitem" className="main-nav__main-primary-item">
                  <a href="#" role="button" className="main-nav__main-primary-btn" >
                    <span >Who we are</span>
                  </a>
                  <div className="main-nav__main-secondary-block" >
                    <div className="main-nav__main-secondary-block-inner">
                      <div className="row main-nav__main-secondary-block-row">
                        <div className="col-lg-3 main-nav__main-secondary-nav p-0">
                          <div >
                            <ul className="main-nav__main-secondary-items">
                              <li>
                                <a href="/en/who-we-are/overview" className="main-nav__main-secondary-item" >
                                  <span className="main-nav__main-secondary-item-title has-child">Overview</span>
                                  <span className="main-nav__main-secondary-item-desc">Energy security for a sustainable world </span>
                                </a>
                                <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-0">
                                  <div className="col-lg-12 p-0">
                                    <ul className="main-nav__main-secondary-items">
                                      <li>
                                        <a href="/en/who-we-are/overview" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Overview</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/overview/our-perspective" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Our perspective</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/overview/where-we-are-going" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Where we &#39;re going</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/overview/global-presence" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Global presence</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/overview/our-history" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Our history</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/overview/grants-and-sponsorships" className="main-nav__main-secondary-item" >
                                          <span className="main-nav__main-secondary-item-title has-child">Grants and Sponsorships</span>
                                        </a>
                                        <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-5">
                                          <div className="col-lg-12 p-0">
                                            <ul className="main-nav__main-secondary-items">
                                              <li>
                                                <a href="/en/who-we-are/overview/grants-and-sponsorships" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Grants and Sponsorships</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/overview/grants-and-sponsorships/grants" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Grants</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/overview/grants-and-sponsorships/sponsorship" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Sponsorship</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="/en/who-we-are/our-corporate-governance" className="main-nav__main-secondary-item" >
                                  <span className="main-nav__main-secondary-item-title has-child">Our governance</span>
                                  <span className="main-nav__main-secondary-item-desc">High standards, high performance.</span>
                                </a>
                                <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-0">
                                  <div className="col-lg-12 p-0">
                                    <ul className="main-nav__main-secondary-items">
                                      <li>
                                        <a href="/en/who-we-are/our-corporate-governance" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Our governance</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/our-corporate-governance/leadership-team" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Board of directors</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/our-corporate-governance/corporate-management" className="main-nav__main-secondary-item" >
                                          <span className="main-nav__main-secondary-item-title has-child">Corporate management</span>
                                        </a>
                                        <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-2">
                                          <div className="col-lg-12 p-0">
                                            <ul className="main-nav__main-secondary-items">
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Corporate management</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/amin-h-nasser" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Amin H. Nasser</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/nabeel-a-al-mansour" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Nabeel A. Al Mansour</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/mohammed-y-al-qahtani" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Mohammed Y. Al Qahtani</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/ahmad-a-al-saadi" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Ahmad A. Al-Sa’adi</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/ziad-al-murshed" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Ziad T. Al-Murshed </span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/nasir-al-naimi" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Nasir K. Al-Naimi</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/nabeel-al-jama" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Nabeel A. Al-Jama &#39;</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/ashraf-al-ghazzawi" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Ashraf A. Al Ghazzawi</span>
                                                </a>
                                              </li>
                                              <li>
                                                <a href="/en/who-we-are/our-corporate-governance/corporate-management/ahmad-al-khowaiter" className="main-nav__main-secondary-item">
                                                  <span className="main-nav__main-secondary-item-title">Ahmad O. Al-Khowaiter</span>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/our-corporate-governance/ethics-compliance" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Ethics and governance</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/our-corporate-governance/sustainability-governance" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Sustainability governance</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/our-corporate-governance/living-our-values" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Our values</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="/en/who-we-are/mega-projects" className="main-nav__main-secondary-item" >
                                  <span className="main-nav__main-secondary-item-title has-child">Mega projects</span>
                                  <span className="main-nav__main-secondary-item-desc">An unprecedented production powerhouse.</span>
                                </a>
                                <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-0">
                                  <div className="col-lg-12 p-0">
                                    <ul className="main-nav__main-secondary-items">
                                      <li>
                                        <a href="/en/who-we-are/mega-projects" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Mega projects</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/mega-projects/fadhili" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Fadhili</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/mega-projects/manifa" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Manifa</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/mega-projects/sadara" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Sadara</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/mega-projects/shaybah" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Shaybah</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="/en/who-we-are/mega-projects/wasit" className="main-nav__main-secondary-item">
                                          <span className="main-nav__main-secondary-item-title">Wasit</span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="main-nav__main-secondary-divider d1"></div>
                            <div className="main-nav__main-secondary-divider d2"></div>
                            <div className="main-nav__main-secondary-divider d3"></div>
                          </div>
                        </div>
                        <div className="col-lg-9 main-nav__main-secondary-featured-content active">
                          <div className="main-nav__main-secondary-featured-content-wrapper">
                            <h4>Highlights</h4>
                            <div className="row">
                              <div className="col-lg-4">
                                <figure className="main-nav__thumb m-0">
                                  <picture>
                                    <source data-srcset="/-/media/images/who-we-are/mega-projects/shaybah/shaybah---ngl-9374.jpg?cx=0.45&amp;cy=0.27&amp;cw=312&amp;ch=176&amp;hash=A3E538696A430B1F38AE753D101B7FA0E3F417DC" media="(min-width: 1024px)"></source>
                                    <img src={require("../images/spacer.gif")}
                                      alt="Two Saudi Aramco engineers walking around at production plant" />
                                  </picture>
                                  <figcaption className="main-nav__promo-panel-caption">
                                    <span className="main-nav__main-secondary-featured-content-title">Our perspective</span>
                                    <span className="main-nav__main-secondary-featured-content-desc">We believe in the power of energy to transform lives.</span>
                                    <a href="/en/who-we-are/overview/our-perspective" className="main-nav__main-secondary-featured-content-href">Read More</a>
                                  </figcaption>
                                </figure>
                              </div>
                              <div className="col-lg-4">
                                <figure className="main-nav__thumb m-0">
                                  <picture>
                                    <source data-srcset="/-/media/images/who-we-are/values/values-web.jpg?cx=0.5&amp;cy=0.5&amp;cw=312&amp;ch=176&amp;hash=2FD94576F1592E9E0D9AFB17CF473DACE72439C4" media="(min-width: 1024px)"></source>
                                    <img src={require("../images/spacer.gif")} alt="" />
                                  </picture>
                                  <figcaption className="main-nav__promo-panel-caption">
                                    <span className="main-nav__main-secondary-featured-content-title">Our values</span>
                                    <span className="main-nav__main-secondary-featured-content-desc">Our behavior is what defines us.</span>
                                    <a href="/en/who-we-are/our-corporate-governance/living-our-values" className="main-nav__main-secondary-featured-content-href">Read More</a>
                                  </figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </menu>
              <menu type="submenu" inline-template>
                <div role="listitem" className="main-nav__main-primary-item">
                  <a href="#" role="button" className="main-nav__main-primary-btn" >
                    <span >What we do</span>
                  </a>



                </div>
              </menu>




            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};
