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
            <div className="main-nav__main-primary" role="list">
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
                    <div className="main-nav__main-secondary-block" >
                      <div className="main-nav__main-secondary-block-inner">
                        <div className="row main-nav__main-secondary-block-row">
                          <div className="col-lg-3 main-nav__main-secondary-nav p-0">
                            <div>
                              <ul className="main-nav__main-secondary-items">
                                <li>
                                  <a href="/en/creating-value/products" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Energy products</span>
                                    <span className="main-nav__main-secondary-item-desc">We produce high-quality energy, chemical, and refined hydrocarbon products to help keep the world moving.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/creating-value/products" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Energy products</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/products/oil" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Oil</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/products/gas" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Gas Production</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/products/chemicals" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Chemicals</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/products/lubricants" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Lubricants</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-4">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/creating-value/products/lubricants" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Lubricants</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/products/lubricants/orizon" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Orizon</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/products/refined-products" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Refined products</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-5">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/creating-value/products/refined-products" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Refined products</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/products/refined-products/base-oils" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Base oils</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/products/retail-fuels" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Retail fuels</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/products/power-systems" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Power Systems</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/creating-value/sustainable-business-operations" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Sustainable business operations</span>
                                    <span className="main-nav__main-secondary-item-desc">Pursuing low carbon energy solutions, and strategically investing for growth.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Sustainable business operations</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations/exploration" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Exploration</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations/health-and-safety" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Health and safety</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations/energy-efficiency" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Energy efficiency</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations/environmental-performance" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Environmental performance</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations/operationalexcellence" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Operational excellence</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations/humancapitaldevelopment" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Human capital development</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-6">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/humancapitaldevelopment" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Human capital development</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/humancapitaldevelopment/geoscience-train" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Geoscience Train</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/humancapitaldevelopment/ylab" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">YLAB</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/sustainable-business-operations/commercial-ecosystems" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Commercial ecosystems</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-7">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/commercial-ecosystems" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Commercial ecosystems</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/commercial-ecosystems/waed-ventures" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Wa &#39;ed Ventures</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/commercial-ecosystems/taleed" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Taleed</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/commercial-ecosystems/namaat" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Namaat</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/sustainable-business-operations/commercial-ecosystems/iktva" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">IKTVA</span>
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
                                  <a href="/en/creating-value/technology-development" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Technology development</span>
                                    <span className="main-nav__main-secondary-item-desc">Powering the economies of tomorrow </span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/creating-value/technology-development" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Technology development</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/technology-development/globalresearchcenters" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Global research centers</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-1">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/creating-value/technology-development/globalresearchcenters" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Global research centers</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/technology-development/globalresearchcenters/carbon-management" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Carbon management</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/technology-development/in-house-developed-technologies" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">In-house technologies</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-2">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/creating-value/technology-development/in-house-developed-technologies" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">In-house technologies</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/technology-development/in-house-developed-technologies/digitalization" className="main-nav__main-secondary-item" >
                                                    <span className="main-nav__main-secondary-item-title has-child">Digitalization</span>
                                                  </a>
                                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-7">
                                                    <div className="col-lg-12 p-0">
                                                      <ul className="main-nav__main-secondary-items">
                                                        <li>
                                                          <a href="/en/creating-value/technology-development/in-house-developed-technologies/digitalization" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Digitalization</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/creating-value/technology-development/in-house-developed-technologies/digitalization/ai-and-big-data" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">AI and Big Data</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/creating-value/technology-development/in-house-developed-technologies/digitalization/digital-transformation" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Digital Transformation</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/creating-value/technology-development/in-house-developed-technologies/digitalization/digital-technologies" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Digital technologies</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/creating-value/technology-development/in-house-developed-technologies/digitalization/our-digital-innovation-centers" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Our digital innovation centers</span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/technology-development/in-house-developed-technologies/carbon-fiber-solutions" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Carbon fiber solutions</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/technology-development/in-house-developed-technologies/nonmetallic-solutions" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Nonmetallic solutions</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/technology-development/strategic-investments" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Strategic investments</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/technology-development/transport-technologies" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Transport technologies</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-4">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/creating-value/technology-development/transport-technologies" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Transport technologies</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/creating-value/technology-development/transport-technologies/mobile-carbon-capture" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Mobile carbon capture</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/technology-development/f1-and-aramco" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">F1 &amp;Aramco - Real engineering excellence</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/creating-value/technology-development/aramco-and-aston-martin-strategic-partnership" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">The Aramco and Aston Martin Racing strategic partnership </span>
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
                                      <source data-srcset="/-/media/images/creating-value/technology/crude-to-chemicals/crude-to-chemicals-5.jpg?cx=0.53&amp;cy=0.33&amp;cw=312&amp;ch=176&amp;hash=8ED66F8FAC68944DE79CB716360B45A9E42CAE33" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="" />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Crude oil to chemicals</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">Speeding up transformation of crude oil to chemicals</span>
                                      <a href="/en/sustainability/climate-change/supporting-the-energy-transition/crude-to-chemicals" className="main-nav__main-secondary-featured-content-href">Read More</a>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div className="col-lg-4">
                                  <figure className="main-nav__thumb m-0">
                                    <picture>
                                      <source data-srcset="/-/media/images/header-slim/carbon-management.png?cx=0.69&amp;cy=0.49&amp;cw=312&amp;ch=176&amp;hash=A24A9FF9479DA5A93C0E2C09CD654A6C38F16EC4" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="Two male Saudi Aramco employees in safety gear inspect a facility. " />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Carbon management</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">Tackling the global climate issue is the great challenge of our time.</span>
                                      <a href="/en/creating-value/technology-development/globalresearchcenters/carbon-management" className="main-nav__main-secondary-featured-content-href">Read More</a>
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
                      <span >Sustainability</span>
                    </a>
                    <div className="main-nav__main-secondary-block" >
                      <div className="main-nav__main-secondary-block-inner">
                        <div className="row main-nav__main-secondary-block-row">
                          <div className="col-lg-3 main-nav__main-secondary-nav p-0">
                            <div >
                              <ul className="main-nav__main-secondary-items">
                                <li>
                                  <a href="/en/sustainability/our-approach-to-sustainability" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Our approach to sustainability</span>
                                    <span className="main-nav__main-secondary-item-desc">An integral part of Aramco’s approach to business.</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/en/sustainability/climate-change" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Climate change</span>
                                    <span className="main-nav__main-secondary-item-desc">Reducing emissions to address climate change.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/sustainability/climate-change" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Climate change</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/climate-change/managing-our-footprint" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Managing our footprint</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-1">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/climate-change/managing-our-footprint" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Managing our footprint</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/managing-our-footprint/carbon-curing" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Carbon curing</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/managing-our-footprint/circular-carbon-economy" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Circular carbon economy</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/managing-our-footprint/ghg-emissions-management-program" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">GHG emissions management program</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/managing-our-footprint/energy-efficiency" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Energy efficiency</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/managing-our-footprint/carbon-capture-utilization-and-storage" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Carbon capture, utilization &amp;storage</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/climate-change/supporting-the-energy-transition" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Supporting the energy transition</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-2">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/climate-change/supporting-the-energy-transition" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Supporting the energy transition</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/supporting-the-energy-transition/mobile-carbon-capture" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Mobile carbon capture</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/supporting-the-energy-transition/transportation" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Transportation</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/supporting-the-energy-transition/non-metallics" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Nonmetallic solutions</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/supporting-the-energy-transition/blue-hydrogen-and-blue-ammonia" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Blue hydrogen and blue ammonia</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/supporting-the-energy-transition/crude-to-chemicals" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Crude oil to chemicals</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/climate-change/technology" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Technology</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-3">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/climate-change/technology" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Technology</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/climate-change/technology/fostering-collaboration" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Fostering collaboration</span>
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
                                  <a href="/en/sustainability/minimizing-environmental-impact" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Minimizing environmental impact</span>
                                    <span className="main-nav__main-secondary-item-desc">Preserving the natural environment while delivering our business promise.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/sustainability/minimizing-environmental-impact" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Minimizing environmental impact</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/minimizing-environmental-impact/protecting-natural-resources" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Protecting natural resources</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-1">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/protecting-natural-resources" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Protecting natural resources</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/protecting-natural-resources/water-conservation" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Water conservation</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/protecting-natural-resources/waste-management" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Waste management</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/protecting-natural-resources/air-emissions-management" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Air emissions</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Biodiversity and land use</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-2">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Biodiversity and land use</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/site-management-and-rehabilitation" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Site management &amp;rehabilitation</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/biodiversity-commitments-and-protected-areas" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Biodiversity commitments &amp;protected areas</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title has-child">Promoting biodiversity</span>
                                                  </a>
                                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-3-5">
                                                    <div className="col-lg-12 p-0">
                                                      <ul className="main-nav__main-secondary-items">
                                                        <li>
                                                          <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Promoting biodiversity</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity/shaybah-wildlife-sanctuary" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Shaybah wildlife sanctuary</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity/khurais-wetland" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Khurais wetland</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity/artificial-reefs" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Artificial reefs</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity/mangrove-initiatives" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Mangrove initiatives</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity/coastal-collaboration" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Coastal collaboration</span>
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
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/sustainability/responsible-business" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Responsible business</span>
                                    <span className="main-nav__main-secondary-item-desc">Serving the needs of human progress and development.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/sustainability/responsible-business" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Responsible business</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/responsible-business/ethics-and-human-rights" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Ethics and human rights</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-1">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/ethics-and-human-rights" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Ethics and human rights</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/ethics-and-human-rights/ethics-compliance-and-data-security" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Ethics, compliance and data security</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/ethics-and-human-rights/human-rights" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Human rights</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/responsible-business/workforce-empowerment" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Workforce empowerment</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-2">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/workforce-empowerment" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Workforce empowerment</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/workforce-empowerment/women-in-business" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Women in business</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/workforce-empowerment/diversity-and-inclusion" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Diversity and inclusion</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/workforce-empowerment/training-employee-development-and-capacity-building" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Training, employee development and capacity building</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/responsible-business/supporting-communities" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Supporting communities</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-3">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/supporting-communities" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Supporting communities</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/supporting-communities/economic-and-community-projects" className="main-nav__main-secondary-item" >
                                                    <span className="main-nav__main-secondary-item-title has-child">Economic and community projects</span>
                                                  </a>
                                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-5">
                                                    <div className="col-lg-12 p-0">
                                                      <ul className="main-nav__main-secondary-items">
                                                        <li>
                                                          <a href="/en/sustainability/responsible-business/supporting-communities/economic-and-community-projects" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Economic and community projects</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/responsible-business/supporting-communities/economic-and-community-projects/ithra" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">The King Abdulaziz Center (Ithra)</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/responsible-business/supporting-communities/economic-and-community-projects/education-partnerships" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Education Partnerships</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/responsible-business/supporting-communities/economic-and-community-projects/technology-and-innovation" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Technology and innovation</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/responsible-business/supporting-communities/economic-and-community-projects/micro-industries" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Microindustries</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/sustainability/responsible-business/supporting-communities/economic-and-community-projects/donation-programs" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Donation programs</span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <a href="/en/sustainability/responsible-business/supporting-communities/in-kingdom-total-value-add-iktva" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">In-Kingdom Total Value Add (Iktva)</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/sustainability/responsible-business/governance-and-oversight" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Governance and oversight</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/sustainability/sustainability-report" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Our 2021 sustainability report</span>
                                    <span className="main-nav__main-secondary-item-desc"></span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/en/sustainability/our-sustainability-data" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Our sustainability data</span>
                                    <span className="main-nav__main-secondary-item-desc">Presenting Aramco’s ESG KPIs for the years 2021, 2020 and 2019. Reporting boundaries for each KPI and for each year is shown for transparency and, where possible, comparability.</span>
                                  </a>
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
                                      <source data-srcset="/-/media/images/creating-value/sustainable-business-operations/energy-efficiency/hawiyah-co2-6527.jpg?cx=0.6&amp;cy=0.22&amp;cw=312&amp;ch=176&amp;hash=F303DAC00A90AFF237B2AFC883C94D4AE2CEA6BD" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="" />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Circular carbon economy</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">A cyclical model focused on reducing, reusing, recycling and removing carbon from the environment.</span>
                                      <a href="/en/sustainability/climate-change/managing-our-footprint/circular-carbon-economy" className="main-nav__main-secondary-featured-content-href">Read More</a>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div className="col-lg-4">
                                  <figure className="main-nav__thumb m-0">
                                    <picture>
                                      <source data-srcset="/-/media/images/creating-value/sustainable-business-operations/carbon-capture-utilization-and-storage/ccus-tanajib.jpg?cx=0.5&amp;cy=0.5&amp;cw=312&amp;ch=176&amp;hash=563C45342253FCBB08CC621ECD811C79979191DB" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="Tanajib" />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Carbon capture, utilization &amp;storage</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">Global demand for energy is growing, and we are committed to ensuring a sustainable energy future. </span>
                                      <a href="/en/sustainability/climate-change/managing-our-footprint/carbon-capture-utilization-and-storage" className="main-nav__main-secondary-featured-content-href">Read More</a>
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
                      <span >Partnering with us</span>
                    </a>
                    <div className="main-nav__main-secondary-block" >
                      <div className="main-nav__main-secondary-block-inner">
                        <div className="row main-nav__main-secondary-block-row">
                          <div className="col-lg-3 main-nav__main-secondary-nav p-0">
                            <div >
                              <ul className="main-nav__main-secondary-items">
                                <li>
                                  <a href="/en/workingwithus/customers" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Customers</span>
                                    <span className="main-nav__main-secondary-item-desc">Committed to reliably supplying our customers with the quality products they need, when they need them.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/workingwithus/customers" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Customers</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/customers/becoming-a-customer" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Becoming a customer</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-1">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/workingwithus/customers/becoming-a-customer" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Becoming a customer</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/customers/becoming-a-customer/special-requirements" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Special requirements</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/customers/products-and-facilities" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Products and facilities</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-2">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/workingwithus/customers/products-and-facilities" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Products and facilities</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/customers/products-and-facilities/ports-and-terminals" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Ports and terminals</span>
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
                                  <a href="/en/workingwithus/suppliers" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Suppliers</span>
                                    <span className="main-nav__main-secondary-item-desc">A world-class supply chain, focused on delivering greater value and enabling continued growth.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/workingwithus/suppliers" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Suppliers</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/suppliers/become-a-supplier" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Become a supplier</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-1">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/become-a-supplier" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Become a supplier</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/become-a-supplier/international-suppliers" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Out of Kingdom suppliers</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/suppliers/existing-suppliers" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Existing suppliers</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/suppliers/contracting-opportunities" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Contracting opportunities</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-2-3">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Contracting opportunities</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/project-management" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Project Management</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/community-services-o-and-m" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Community Services</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/corporate-maintenance" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Corporate Maintenance</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/marine-department" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Marine Department</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/pipelines-department" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Pipelines Department</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/transportation-department" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Transportation Department</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/new-business-development" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">New Business Development</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/workingwithus/suppliers/contracting-opportunities/environmental-protection-department" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Environmental Protection</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/suppliers/sales" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Sales</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/suppliers/resources" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Resources</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/workingwithus/suppliers/contact-us" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Contact information</span>
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
                                      <source data-srcset="/-/media/images/working-with-us/ced_8681.jpg?cx=0.5&amp;cy=0.5&amp;cw=312&amp;ch=176&amp;hash=2203F716E2B5A8C328EC449F1C1EEEABA43FEBD5" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="" />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Products and facilities</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">Producing the products that drive our economy.</span>
                                      <a href="/en/workingwithus/customers/products-and-facilities" className="main-nav__main-secondary-featured-content-href">Read More</a>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div className="col-lg-4">
                                  <figure className="main-nav__thumb m-0">
                                    <picture>
                                      <source data-srcset="/-/media/images/header-slim/contracting-opportunities2.png?cx=0.5&amp;cy=0.5&amp;cw=312&amp;ch=176&amp;hash=5D19F6BCA01720FFFD09982BC666AE9B64856E2B" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="" />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Contracting opportunities</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">Be part of an accessible, reliable, and innovative world-class supply chain.</span>
                                      <a href="/en/workingwithus/suppliers/contracting-opportunities" className="main-nav__main-secondary-featured-content-href">Read More</a>
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
                      <span >Investors</span>
                    </a>
                    <div className="main-nav__main-secondary-block" >
                      <div className="main-nav__main-secondary-block-inner">
                        <div className="row main-nav__main-secondary-block-row">
                          <div className="col-lg-3 main-nav__main-secondary-nav p-0">
                            <div >
                              <ul className="main-nav__main-secondary-items">
                                <li>
                                  <a href="/en/investors/investors" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Investor overview</span>
                                    <span className="main-nav__main-secondary-item-desc">Summary of key financials and investor information.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-1-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/investors/investors" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Investor overview</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/investors/key-financials" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Key financials</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/investors/company-financial-summary" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Company financial summary</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/investors/reports-and-presentations" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Reports &amp;presentations</span>
                                    <span className="main-nav__main-secondary-item-desc">Download the latest financial reports and presentations from the company.</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/en/investors/annual-report" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Annual report 2022</span>
                                    <span className="main-nav__main-secondary-item-desc"></span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/en/investors/investor-tools" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Shareholder information</span>
                                    <span className="main-nav__main-secondary-item-desc">Access share information and events.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/investors/investor-tools" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Shareholder information</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/investor-tools/stock-information" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Share information</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/investor-tools/bond-information" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Bond information</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/investor-tools/dividends" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Dividends Schedule</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/investor-tools/agm" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">General Assembly Meetings</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/investor-tools/events" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Financial calendar</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/investors/environmental-social-and-governance" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Environmental, social, and governance</span>
                                    <span className="main-nav__main-secondary-item-desc">Integrating sustainability principles and preserving resources.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-5-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/investors/environmental-social-and-governance" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Environmental, social, and governance</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/environmental-social-and-governance/corporate-governance" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Corporate governance</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/environmental-social-and-governance/environment-and-climate-change" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Environment and climate change</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/environmental-social-and-governance/social-responsibility" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Social responsibility</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/environmental-social-and-governance/sustainability-report" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Sustainability report</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/environmental-social-and-governance/sustainability-data" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Sustainability data</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/investors/financial-news" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Investor news</span>
                                    <span className="main-nav__main-secondary-item-desc">Access the latest financial news, and updates.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-6-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/investors/financial-news" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Investor news</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/financial-news/regulatory-announcements" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Regulatory announcements</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/investors/financial-news/subscriptions" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Subscribe to updates</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/investors/ir-contacts" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Investor contacts and FAQs</span>
                                    <span className="main-nav__main-secondary-item-desc">Explore our frequently asked questions (FAQs) and IR contact form.</span>
                                  </a>
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
                                      <source data-srcset="/-/media/images/making-a-difference/shaybah-wildlife-sanctuary/shyb02_jxp_5825.jpg?cx=0.55&amp;cy=0.29&amp;cw=312&amp;ch=176&amp;hash=1C3995EBCE3179BEAC0C19D6E214019FC56B0B4A" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="" />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Environment and climate change</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">We understand the importance of managing precious natural resources.</span>
                                      <a href="/en/investors/environmental-social-and-governance/environment-and-climate-change" className="main-nav__main-secondary-featured-content-href">Read More</a>
                                    </figcaption>
                                  </figure>
                                </div>
                                <div className="col-lg-4">
                                  <figure className="main-nav__thumb m-0">
                                    <picture>
                                      <source data-srcset="/-/media/images/who-we-are/2015c1314_1-1_aei-76.jpg?cx=0.49&amp;cy=0.33&amp;cw=312&amp;ch=176&amp;hash=D3AE860EA920CF0B6AEB1EEE52B7D2E6B4E4B096" media="(min-width: 1024px)" />
                                      <img src={require("../images/spacer.gif")} alt="Saudi Aramco engineer during inspection" />
                                    </picture>
                                    <figcaption className="main-nav__promo-panel-caption">
                                      <span className="main-nav__main-secondary-featured-content-title">Corporate governance</span>
                                      <span className="main-nav__main-secondary-featured-content-desc">Good governance is at the core of how we operate and is fundamental to sustainable success.</span>
                                      <a href="/en/investors/environmental-social-and-governance/corporate-governance" className="main-nav__main-secondary-featured-content-href">Read More</a>
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
                      <span >Careers</span>
                    </a>
                    <div className="main-nav__main-secondary-block" >
                      <div className="main-nav__main-secondary-block-inner">
                        <div className="row main-nav__main-secondary-block-row">
                          <div className="col-lg-3 main-nav__main-secondary-nav p-0">
                            <div >
                              <ul className="main-nav__main-secondary-items">
                                <li>
                                  <a href="/en/careers/careers" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">View Careers</span>
                                    <span className="main-nav__main-secondary-item-desc"></span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/en/careers/investing-in-people" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Investing in our people</span>
                                    <span className="main-nav__main-secondary-item-desc"></span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/en/careers/diversity-and-inclusion" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Diversity and inclusion</span>
                                    <span className="main-nav__main-secondary-item-desc"></span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/en/careers/saudi-applicants" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">Saudi applicants</span>
                                    <span className="main-nav__main-secondary-item-desc">At Aramco, we give our people the opportunity to do the work they dreamed of doing and support them in achieving more than they thought possible.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/careers/saudi-applicants" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Saudi applicants</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/careers/saudi-applicants/apply" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Apply</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-1">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/apply" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Apply</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/apply/graduates" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Graduates</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/apply/experienced-applicants" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Experienced applicants</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/careers/saudi-applicants/our-offer" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Our offer</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-2">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/our-offer" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Our offer</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/our-offer/benefits" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Benefits</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/our-offer/compensation" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Compensation</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/our-offer/employee-training" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Employee training</span>
                                                  </a>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <a href="/en/careers/saudi-applicants/non-employee-programs" className="main-nav__main-secondary-item" >
                                            <span className="main-nav__main-secondary-item-title has-child">Non-employee programs</span>
                                          </a>
                                          <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-3">
                                            <div className="col-lg-12 p-0">
                                              <ul className="main-nav__main-secondary-items">
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/non-employee-programs" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">Non-employee programs</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/non-employee-programs/college-programs" className="main-nav__main-secondary-item" >
                                                    <span className="main-nav__main-secondary-item-title has-child">College programs</span>
                                                  </a>
                                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-4">
                                                    <div className="col-lg-12 p-0">
                                                      <ul className="main-nav__main-secondary-items">
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/college-programs" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">College programs</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/college-programs/college-continuation-program" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">College continuation program</span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/non-employee-programs/high-school-and-diploma-graduates" className="main-nav__main-secondary-item" >
                                                    <span className="main-nav__main-secondary-item-title has-child">High school and diploma graduates</span>
                                                  </a>
                                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-5">
                                                    <div className="col-lg-12 p-0">
                                                      <ul className="main-nav__main-secondary-items">
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/high-school-and-diploma-graduates" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">High school and diploma graduates</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/high-school-and-diploma-graduates/apne" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Apprenticeship program</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/high-school-and-diploma-graduates/cdpne" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">College degree program</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/high-school-and-diploma-graduates/vcgnep" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Vocational Colleges Graduates</span>
                                                          </a>
                                                        </li>
                                                      </ul>
                                                    </div>
                                                  </div>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/non-employee-programs/high-school-students" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title">High school students</span>
                                                  </a>
                                                </li>
                                                <li>
                                                  <a href="/en/careers/saudi-applicants/non-employee-programs/university-and-vocational-college-internship-programs" className="main-nav__main-secondary-item">
                                                    <span className="main-nav__main-secondary-item-title has-child">University and vocational college Internship programs </span>
                                                  </a>
                                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-4-7">
                                                    <div className="col-lg-12 p-0">
                                                      <ul className="main-nav__main-secondary-items">
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/university-and-vocational-college-internship-programs" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">University and vocational college Internship programs </span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/university-and-vocational-college-internship-programs/university-internship-program" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">University Internship Program</span>
                                                          </a>
                                                        </li>
                                                        <li>
                                                          <a href="/en/careers/saudi-applicants/non-employee-programs/university-and-vocational-college-internship-programs/vocational-college-internship-program" className="main-nav__main-secondary-item">
                                                            <span className="main-nav__main-secondary-item-title">Vocational College Internship Program</span>
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
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/careers/non-saudi-applicants" className="main-nav__main-secondary-item" >
                                    <span className="main-nav__main-secondary-item-title has-child">International applicants</span>
                                    <span className="main-nav__main-secondary-item-desc">Employees are drawn by the challenging and rewarding professional opportunities we offer.</span>
                                  </a>
                                  <div className="row main-nav__main-secondary-block-row subnav" data-outer="subnav-5-0">
                                    <div className="col-lg-12 p-0">
                                      <ul className="main-nav__main-secondary-items">
                                        <li>
                                          <a href="/en/careers/non-saudi-applicants" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">International applicants</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/careers/non-saudi-applicants/apply" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Apply</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/careers/non-saudi-applicants/benefits" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Benefits</span>
                                          </a>
                                        </li>
                                        <li>
                                          <a href="/en/careers/non-saudi-applicants/expatriate-schools" className="main-nav__main-secondary-item">
                                            <span className="main-nav__main-secondary-item-title">Expatriate schools</span>
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <a href="/en/careers/global-offices-opportunities" className="main-nav__main-secondary-item">
                                    <span className="main-nav__main-secondary-item-title">Global offices opportunities</span>
                                    <span className="main-nav__main-secondary-item-desc">Explore opportunities at our global offices.</span>
                                  </a>
                                </li>
                              </ul>
                              <div className="main-nav__main-secondary-divider d1"></div>
                              <div className="main-nav__main-secondary-divider d2"></div>
                              <div className="main-nav__main-secondary-divider d3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </menu>
              </div>
              <div className="main-nav__logo-large">
                <a href="/en/">
                  <img src={require("../images/spacer.gif")}
                    srcSet={`${require("../images/affiliateLogo.png")},  ${require("../images/affiliateLogo-2x.png")} 2x`}
                    alt="Aramco Logo" />
                </a>
              </div>
            </div>
          </nav>
        </div>
        {/*<!--start global directory overlay */}
        <div id="myNav" className="overlay">
          <a href="javascript:void(0)" className="closebtn"></a>
          <div className="overlay-sections">
            <div className="nav-tab-block">
              <ul className="nav nav-tabs left-tab-overlay">
                <h4>Global directory</h4>
                <li role="button" data-id="1" className="main-nav-tab">
                  <a data-toggle="tab">Global offices</a>
                </li>
                <li role="button" data-id="2" className="main-nav-tab">
                  <a data-toggle="tab">Our businesses</a>
                </li>
                <li role="button" data-id="3" className="main-nav-tab">
                  <a data-toggle="tab">Production &amp;refineries</a>
                </li>
                <li role="button" data-id="4" className="main-nav-tab">
                  <a data-toggle="tab">Joint ventures</a>
                </li>
                <li role="button" data-id="5" className="main-nav-tab">
                  <a data-toggle="tab">Research centers</a>
                </li>
              </ul>
            </div>
            <div className="tab-content overlay-spacing">
              <div className="fixed-globol-sm-header">
                <h3 className="fixed-header-mobile">Global directory</h3>
              </div>
              <div className="tab-pane">
                <div className="panel panel-default">
                  <div className="panel-heading" data-id="1">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">Global offices
                      </a>
                    </h4>
                  </div>
                  <div id="1" className="panel-collapse collapse">
                    <div className="panel-body">
                      <div className="country-block">
                        <h3>Headquarters</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <div className="country-title-lang">
                                <a className="country-link" target="_blank" href="https://www.aramco.com/en">
                                  <h4>Global - Saudi Arabia </h4>
                                  <span>English</span>
                                </a>
                                <span>
                                  <a href="https://www.aramco.com/ar/" target="_blank">العربية</a>
                                </span>
                              </div>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Saudi Aramco</h4>
                                <p>
                                  P.O. Box 5000<br />
                                  Dhahran 31311<br />Kingdom of Saudi Arabia
                                </p>
                                <p>
                                  <a href="https://www.aramco.com/en/website-information/contactus" className="cta__secondary">CONTACT US</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://twitter.com/Aramco" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__link-social footer__link-social--twitter">
                                      <span>twitter</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/saudi-aramco" target="_blank" rel="noopener noreferrer" title="linkedin" className="footer__link-social footer__link-social--linkedin">
                                      <span>linkedin</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/user/AramcoVideo" target="_blank" rel="noopener noreferrer" title="youtube" className="footer__link-social footer__link-social--youtube">
                                      <span>youtube</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/Aramco/" target="_blank" rel="noopener noreferrer" title="instagram" className="footer__link-social footer__link-social--instagram">
                                      <span>instagram</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.facebook.com/officialsaudiaramco/" target="_blank" rel="noopener noreferrer" title="facebook" className="footer__link-social footer__link-social--facebook">
                                      <span>facebook</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="country-block">
                        <h3>Americas</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://americas.aramco.com/" target="_blank">USA</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Location</h4>
                                <p>
                                  1200 Smith Street<br />Houston, TX 77002
                                </p>
                                <h4>Mailing Address</h4>
                                <p>
                                  Aramco Americas<br />
                                  P.O. Box 4534<br />Houston, TX 77002
                                </p>
                                <p>
                                  <a href="https://americas.aramco.com/en/info/contact-us" className="cta__secondary" target="_blank" rel="noopener noreferrer">CONTACT US</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://twitter.com/Aramco_Americas" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__link-social footer__link-social--twitter">
                                      <span>twitter</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/aramco" target="_blank" rel="noopener noreferrer" title="linkedin" className="footer__link-social footer__link-social--linkedin">
                                      <span>linkedin</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.facebook.com/Aramco.Americas/" target="_blank" rel="noopener noreferrer" title="facebook" className="footer__link-social footer__link-social--facebook">
                                      <span>facebook</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="country-block">
                        <h3>Asia</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <div className="country-title-lang">
                                <a className="country-link" target="_blank" href="https://china.aramco.com/en">
                                  <h4>China </h4>
                                  <span>English</span>
                                </a>
                                <span>
                                  <a href="https://china.aramco.com/zh-cn" target="_blank">中文</a>
                                </span>
                              </div>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>BEIJING</h3>
                                <h4>Aramco Far East (Beijing) Business Services Co., Ltd (ABS)</h4>
                                <p>
                                  43/F, 45/F20-26, China World Tower 3, <br />
                                  No.1 Jianguomenwai Avenue, <br />
                                  Chaoyang District, <br />Beijing, China 100004
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                <h3>SHANGHAI</h3>
                                <h4>Aramco Far East (Beijing) Business Services Co., Ltd. Shanghai Branch</h4>
                                <p>
                                  Room 16T60, 16/F &ndash;SWFC, 100 Century Avenue,<br />
                                  Pudong District, <br />Shanghai 200120, China
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                <h3>XIAMEN</h3>
                                <h4>Aramco Far East (Beijing) Business Services Co., Ltd. Xiamen Branch</h4>
                                <p>
                                  15F, Paragon Center, No.1 Lianyue Road,<br />
                                  Siming District,<br />Xiamen 361012, Fujian, China
                                </p>
                                <p>
                                  <a href="https://china.aramco.com/en/info/contact-us" className="cta__secondary" target="_blank" rel="noopener noreferrer">CONTACT US</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://weixin.qq.com/cgi-bin/readtemplate?check=false&amp;t=weixin_getdownurl_sms&amp;s=download&amp;from=100&amp;stype=10037102" target="_blank" rel="noopener noreferrer" title="wechat" className="footer__link-social footer__link-social--wechat">
                                      <span>wechat</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://india.aramco.com/en/" target="_blank">India</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" >
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Asia India Pvt. Ltd.</h4>
                                <p>
                                  2A-0801, 8th Floor, Two Horizon Center, DLF 5,<br />
                                  Sector 43, Gurugram 122002,<br />Haryana, India
                                </p>
                                <a href="https://india.aramco.com/en/info/contact-us" className="cta__secondary" target="_blank" rel="noopener noreferrer">CONTACT US</a>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <div className="country-title-lang">
                                <a className="country-link" target="_blank" href="https://japan.aramco.com/en">
                                  <h4>Japan </h4>
                                  <span>English</span>
                                </a>
                                <span>
                                  <a href="https://japan.aramco.com/ja-jp" target="_blank">日本語 </a>
                                </span>
                              </div>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" >
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Asia Japan K.K.</h4>
                                Marunouchi Building 26F<br />
                                2-4-1 Marunouchi, Chiyoda-ku,<br />
                                Tokyo 100-6326, Japan<br />
                                <br />
                                <a href="https://japan.aramco.com/en/info/contact-us" className="cta__secondary">CONTACT US</a>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div></div></div>
                          <div className="country-col">
                            <div className="country-title">
                              <div className="country-title-lang">
                                <a className="country-link" target="_blank" href="https://korea.aramco.com/en">
                                  <h4>Korea </h4>
                                  <span>English</span>
                                </a>
                                <span>
                                  <a href="https://korea.aramco.com/ko-kr" target="_blank">한국어</a>
                                </span>
                              </div>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Asia Korea Limited</h4>
                                <p>
                                  45, Three IFC, 10 Gukjegeumyung-ro<br />
                                  Yeongdeungpo-gu, Seoul, 07326,<br />Korea
                                </p>
                                <p>
                                  <a href="https://korea.aramco.com/en/info/contact-us" className="cta__secondary">CONTACT US</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="http://pf.kakao.com/_zBHwj " target="_blank" rel="noopener" title="kakao" className="footer__link-social footer__link-social--kakao">
                                      <span>kakao</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://malaysia.aramco.com/en/" target="_blank">Malaysia</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Overseas Malaysia Sdn Bhd</h4>
                                <p>
                                  Level 32, Maxis Tower<br />
                                  Kuala Lumpur City Center<br />50088 Kuala Lumpur
                                </p>
                                <p>
                                  <a href="https://malaysia.aramco.com/en/info/contact-us" target="_blank" className="cta__secondary" rel="noopener noreferrer">CONTACT US</a>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://singapore.aramco.com/en/" target="_blank">Singapore</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Asia Singapore Pte. Ltd.</h4>
                                <p>
                                  OUE Bayfront, 50 Collyer Quay #13-01,<br />Singapore 049321
                                </p>
                                <p>
                                  <a href="https://singapore.aramco.com/en/info/contact-us" target="_blank" className="cta__secondary" rel="noopener noreferrer">CONTACT US</a>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="country-block">
                        <h3>Europe</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://europe.aramco.com/en/" target="_blank">Italy</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Overseas Company</h4>
                                <p>
                                  Via Tolstoj 86<br />
                                  Scala F-H, 3rd floor<br />
                                  20098, San Giuliano Milanese (MI)<br />Italy
                                </p>
                                <p>
                                  <a href="https://europe.aramco.com/en/info/contact-us" target="_blank" className="cta__secondary" rel="noopener noreferrer">CONTACT US</a>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://europe.aramco.com/en/" target="_blank">The Netherlands</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Overseas Company</h4>
                                <p>
                                  Scheveningseweg 62 - 66<br />
                                  2517 KX, The Hague<br />The Netherlands &nbsp;&nbsp;
                                </p>
                                <p>
                                  <a href="https://europe.aramco.com/en/info/contact-us" target="_blank" className="cta__secondary" rel="noopener noreferrer">CONTACT US</a>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://europe.aramco.com/en/" target="_blank">United Kingdom</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h4>Aramco Overseas Company</h4>
                                <p>
                                  10 Portman Square<br />
                                  W1H 6AZ, London<br />United Kingdom
                                </p>
                                <p>
                                  <a href="https://europe.aramco.com/en/info/contact-us" target="_blank" className="cta__secondary" rel="noopener noreferrer">CONTACT US</a>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div></div></div></div>
              <div className="tab-pane">
                <div className="panel panel-default">
                  <div className="panel-heading" data-id="2">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">Our businesses
                      </a>
                    </h4>
                  </div>
                  <div id="2" className="panel-collapse collapse">
                    <div className="panel-body">
                      <div className="country-block">
                        <h3>Global Businesses</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <div className="country-title-lang">
                                <a className="country-link" target="_blank" href="https://www.waed.net/en">
                                  <h4>Aramco Entrepreneurship Center (WA &#39;ED) </h4>
                                  <span>English</span>
                                </a>
                                <span>
                                  <a href="https://www.waed.net/ar" target="_blank">العربية</a>
                                </span>
                              </div>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>WA'ED</h3>
                                <p>
                                  Eastern Region<br />Dhahran 31311, Saudi Arabia
                                </p>
                                <p>
                                  <a href="https://www.waed.net" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://www.linkedin.com/company/saudi-aramco-entrepreneurship-center-wa'ed-/" target="_blank" rel="noopener noreferrer" title="linkedin" className="footer__link-social footer__link-social--linkedin">
                                      <span>linkedin</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://twitter.com/aramcoec/" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__link-social footer__link-social--twitter">
                                      <span>twitter</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="https://www.aramcotrading.com/" target="_blank">Aramco Trading Company</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Aramco Trading Company</h3>
                                <p>
                                  Al-Midra Tower Building<br />
                                  3rd floor, East Wing<br />Dhahran 31311, Saudi Arabia
                                </p>
                                <p>
                                  <a href="https://www.aramcotrading.com/" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://twitter.com/aramco_trading" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__link-social footer__link-social--twitter">
                                      <span>twitter</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/channel/UCjotPgBgn8WUmZyp3taLLSA" target="_blank" rel="noopener noreferrer" title="youtube" className="footer__link-social footer__link-social--youtube">
                                      <span>youtube</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>
                                <a href="http://www.aramcoventures.com/" target="_blank">Aramco Ventures</a>
                              </h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Aramco Ventures</h3>
                                <p>
                                  Al-Midra Tower Building<br />
                                  11th floor, West Wing<br />Dhahran 31311, Saudi Arabia
                                </p>
                                <p>
                                  <a href="https://aramcoventures.com/" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://twitter.com/aevllc" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__link-social footer__link-social--twitter">
                                      <span>twitter</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/saev/" target="_blank" rel="noopener noreferrer" title="linkedin" className="footer__link-social footer__link-social--linkedin">
                                      <span>linkedin</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <div className="country-title-lang">
                                <a className="country-link" target="" href="https://iktva.sa/en">
                                  <h4>In-Kingdom Value Add Program </h4>
                                  <span>English</span>
                                </a>
                                <span>
                                  <a href="https://iktva.sa/ar" target="">العربية</a>
                                </span>
                              </div>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>In-Kingdom Value Add Program</h3>
                                <p>
                                  North Park 1<br />Dhahran 31311, Saudi Arabia
                                </p>
                                <p>
                                  <a href="https://www.iktva.sa/" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://twitter.com/iktvaAramco" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__link-social footer__link-social--twitter">
                                      <span>twitter</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.linkedin.com/company/iktvaaramco" target="_blank" rel="noopener noreferrer" title="linkedin" className="footer__link-social footer__link-social--linkedin">
                                      <span>linkedin</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <div className="country-title-lang">
                                <a className="country-link" target="_blank" href="https://www.ithra.com/en">
                                  <h4>Ithra </h4>
                                  <span>English</span>
                                </a>
                                <span>
                                  <a href="https://www.ithra.com/ar/" target="_blank">العربية</a>
                                </span>
                              </div>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>Contact details &amp;info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>ITHRA</h3>
                                <p>
                                  8386 Ring Rd, Gharb Al Dhahran,<br />Dhahran 34461, Saudi Arabia
                                </p>
                                <p>
                                  <a href="https://www.ithra.com/en" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                </p>
                                <ul className="footer__links-social">
                                  <li>
                                    <a href="https://twitter.com/ithra" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__link-social footer__link-social--twitter">
                                      <span>twitter</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.youtube.com/user/iThraCultureCenter" target="_blank" rel="noopener noreferrer" title="youtube" className="footer__link-social footer__link-social--youtube">
                                      <span>youtube</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.instagram.com/ithra/" target="_blank" rel="noopener noreferrer" title="instagram" className="footer__link-social footer__link-social--instagram">
                                      <span>instagram</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="https://www.facebook.com/KingAbdulazizCenterForWorldCulture/" target="_blank" rel="noopener noreferrer" title="facebook" className="footer__link-social footer__link-social--facebook">
                                      <span>facebook</span>
                                    </a>
                                  </li>
                                </ul>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane">
                <div className="panel panel-default">
                  <div className="panel-heading" data-id="3">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">Production &amp;refineries
                      </a>
                    </h4>
                  </div>
                  <div id="3" className="panel-collapse collapse">
                    <div className="panel-body">
                      <div className="country-block">
                        <h3>Gas production</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Fadhili</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Fadhili</h3>
                                <p>
                                  <span>The cutting edge Fadhili Gas Plant (FGP) is emblematic of Saudi Aramco &rsquo;s broad impact on not only boosting gas supply to displace crude burning, but also driving economic growth, developing the Saudi workforce, spearheading technology deployment, and reducing CO2 emissions. FGP construction started in 2016 and was completed and put fully onstream in 2020.</span>
                                </p>
                                <p>
                                  <span>With a total processing capacity of 2.5 BSCFD, FGP is the first plant in the region to have the capability of sweetening low BTU gas, then directly powering an independent power plant, yet able to switch to regular sales gas as needed. In addition, Fadhili is the first plant to treat nonassociated gas from both onshore and offshore fields.</span>
                                </p>
                                <p>
                                  <span>FGP is also the first SA Gas plant to deploy the Sulfur Recovery Unit Tail Gas Treatment process to attain a sulfur recovery rate of 99.9%, helping to protect air quality, and reducing SO2 emissions by more than 18,000 Metric Tons per year as compared to the conventional Claus process.</span>
                                </p>
                                <p>
                                  <span>The development of Fadhili added billions of dollars to the local economy through IKTVA. 46% of the project &rsquo;s materials and services were sourced and manufactured in Saudi Arabia.</span>
                                </p>
                                <p>
                                  <span>A unique feature of Fadhili is that its multiple downstream treated gas pipelines enhanced the connectivity, reliability, and responsiveness of Saudi Aramco &rsquo;s Master Gas System (MGS), as those pipelines are connected to the northern and central sections of the MGS.</span>
                                </p>


                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Hawiyah</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Hawiyah</h3>
                                <p>We are expanding the gas processing capacity of our Hawiyah gas plant by more than 1 BSCFD. The new gas processing facilities, expected to be on stream in 2022, are anticipated to raise total production capacity of the plant to approximately 3.6 BSCFD, making it one of the largest gas processing facilities in the world.</p>
                                <p>We are making improvements to sustain gas production from both the Haradh and Hawiyah fields for the next 20 years and boost production by an average of 1.2 BSCFD. The program includes installing gas compression facilities, liquid separation stations, and transmission lines to our Haradh and Hawiyah gas plants, along with expanding the existing gas gathering pipeline network.&nbsp;</p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Karan</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Karan</h3>
                                <p>
                                  <span>Karan, was our first non-associated offshore gas field development. Discovered in 2006 in the thickest, extremely prolific and complex carbonate layers, the project was fast-tracked, taking only six years to go from discovery to production.</span>
                                </p>
                                <p>
                                  <span>Non-associated gas fields do not have an associated oil column and, therefore, can be accessed without producing oil. The raw gas is transported through a 110-kilometer subsea pipeline to the Khursaniyah Gas Plant for processing.&nbsp;</span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Shaybah</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Shaybah</h3>
                                <p>
                                  <span>The natural gas liquids (NGL)
                                    recovery plant at Shaybah was commissioned and began production in late 2015,
                                    with a second processing train starting up in 2016. The plant NGL production
                                    helps Saudi Aramco to meet increasing demand for petrochemical feedstock.</span>
                                </p>
                                <p>
                                  <span>Designed
                                    to process as much as 2.4 BSCFD of associated gas and recover 275,000 bpd of
                                    ethane plus NGL, the Shaybah facility feeds these volumes of NGL via pipeline
                                    to Ju &rsquo;aymah for
                                    further processing before being delivered as petrochemical feedstock to
                                    industrial cities.&nbsp;&nbsp;</span>
                                </p>
                                <p>
                                  <span>
                                    <a href="https://www.aramco.com/en/who-we-are/mega-projects/shaybah" className="cta__primary">FIND OUT MORE</a>
                                  </span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Wasit</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Wasit </h3>
                                <p>
                                  <span>Wasit, one of the largest gas plants we have ever built, was brought onstream in October 2015 and reached full operating capacity in mid-2016. Unlike our other gas plants, Wasit is designed to process solely nonassociated gas.&nbsp;</span>
                                </p>
                                <p>
                                  <span>
                                    To feed Wasit, we brought gas production onstream from the big bore nonassociated gas wells in our offshore <em>Arabiyah</em>
                                    and <em>Hasbah</em>
                                    fields, situated approximately 150 km northeast of Jubail Industrial City in the Arabian Gulf. With the startup of production from these two fields, more than 40% of our nonassociated gas now comes from offshore fields.
                                  </span>
                                </p>
                                <p>
                                  <span>Our continued success in increasing supplies of cleaner burning natural gas makes it possible for us to reduce emissions, enable new industries and release more crude oil for value-added refining or export.</span>
                                </p>
                                <p>
                                  <a href="https://www.aramco.com/en/who-we-are/mega-projects/wasit" className="cta__primary">FIND OUT MORE</a>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="country-block">
                        <h3>Oil production &amp;Refineries</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Abqaiq</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Abqaiq</h3>
                                <p>
                                  <span>As the company's largest oil processing facility and the largest crude oil stabilization plant in the world, Abqaiq plays a pivotal role in our day-to-day operations.</span>
                                </p>
                                <p>
                                  <span>Abqaiq oil facilities receive sour crude oil from gas-oil separation plants (GOSPs), process it into sweet crude oil, and then transport it to Ras Tanura and Jubail on the east coast, Yanbu' on the west coast and to Bapco Refinery in Bahrain. The off gases from the spheroids and stabilizer columns that are part of the conversion process are then sent to Abqaiq natural gas liquids (NGL) facilities for further processing.</span>
                                </p>
                                <p>
                                  <span>Abqaiq is the main oil processing center for Arabian Extra Light and Arabian Light crude oils.</span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Ghawar</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Ghawar</h3>
                                <p>The northern-most portion of the Ghawar field lies approximately 100 kilometers west of Dhahran. The field comprises six main areas (Fazran, Ain Dar, Shedgum, Uthaminyah, Hawiyah and Haradh) and extends southward over more than 200 kilometers as one long continuous anticline. It is approximately 36 kilometers across at its widest point.</p>
                                <p>We believe that the Ghawar field is the largest oil field in the world in terms of conventional proved reserves, totaling 58.32 billion barrels of oil equivalent as at 31 December 2018. It has accounted for more than half of the total cumulative crude oil production in the Kingdom.</p>
                                <p>The Ghawar field facilities and infrastructure remain a central component in our long-term strategic framework for optimizing both technical recovery of resources and the economic of resource management.&nbsp;</p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Haradh</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Haradh</h3>
                                <p>
                                  <span>The Haradh area, located at the southern tip of the Ghawar oil field, was developed in three increments of 300,000 bpd of Arabian Light crude oil capacity. </span>
                                </p>
                                <p>
                                  <span>Haradh III was also the first plant in the Southern Area of company operations to have completely automated well control and monitoring, allowing remote operations. The project benefited from successful integration of four technologies: multilateral, maximum reservoir contact (MRC) wells; Smart Well completions (using control valves for preventing premature water breakthrough); geosteering (for optimal placement of wells in the reservoir for maximum recovery); and the &ldquo;intelligent field &rdquo;concept, in which real-time sub-surface data transmissions enable continual monitoring of key reservoir indicators.&nbsp;</span>
                                  The integrated use of these four technologies slashed unit well development costs three-fold.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Khurais</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Khurais</h3>
                                <p>
                                  <span>The Khurais complex, which comprises of the Abu Jifan and Mazalij fields in addition to Khurais itself, is approximately 106 kilometers long and 18 kilometers across at its widest point.&nbsp;</span>
                                  &nbsp;
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Khursaniyah</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Khursaniyah</h3>
                                <p>
                                  <span>The Khursaniyah program includes facilities to process and stabilize 500,000 bpd of Arabian Light crude oil blend from the Abu Hadriya, Fadhili and Khursaniyah fields, and a grassroots gas plant to process &nbsp;one billion scfd of associated gas.</span>
                                </p>
                                <p>
                                  <span>Khursaniyah began producing oil in August 2008. The facility also has the capacity to inject 1.1 million bpd of non-potable water for reservoir pressure maintenance.</span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Manifa</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Manifa</h3>
                                <p>
                                  <span>The UNESCO environmental responsibility award nominated Manifa crude oil development was designed to produce 900,000 bpd of Arabian Heavy crude oil, 90 million scfd of sour gas, and 65,000 bpd of hydrocarbon condensate.</span>
                                </p>
                                <p>
                                  <span>By employing best-in-class technologies in infrastructure, drilling and production activities, the project consumed more than 80 million man hours without a lost time injury.</span>
                                </p>
                                <p>
                                  <span>Prior to construction, extensive engineering and ecological assessments were conducted to ensure that the marine ecosystem would not be adversely affected by developing the field. As a direct result of these studies, Saudi Aramco constructed three kilometers of bridges to span the migration paths of various marine species, maintaining natural water flow and preserving natural marine nurseries.&nbsp;</span>
                                </p>
                                <p>
                                  <span>
                                    <a href="https://www.aramco.com/en/who-we-are/mega-projects/manifa">FIND OUT MORE</a>
                                  </span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Nuayyim</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Nuayyim</h3>
                                <p>
                                  <span>Nuayyim crude oil increment added 100,000 bpd of Arabian Super Light crude oil and 90 million scfd of associated gas to our production capacity.</span>
                                </p>
                                <p>
                                  <span>The project &ndash;the first in-Kingdom project of this scale with a project proposal completed entirely in Saudi Arabia &ndash;also included a gas-oil separation plant, 140 kilometers of 16 &rdquo;gas pipeline, and water supply facilities at Hawtah. Smokeless flaring has been used to significantly reduce emissions.&nbsp;</span>
                                </p>
                                <p>
                                  <span>The field, which entered production in August 2009, is 250 kilometers south of Riyadh and about 50 kilometers northeast of our Hawtah crude oil facility, the first producing facility in the Central Region of Saudi Arabia.</span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Qatif</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Qatif</h3>
                                <p>
                                  <span>Qatif Producing Plants Program consists of facilities to produce, process, and transport 500,000 bpd of blended Arabian Light crude oil from the Qatif field and 300,000 bpd of Arabian Medium crude oil from the offshore Abu Sa'fah field.</span>
                                </p>
                                <p>
                                  <span>The Qatif facility was the first to produce Arabian Light crude oil by blending Arabian Extra Light, Light and Medium grades. </span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Safaniyah</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Safaniyah</h3>
                                <p>We believe that Safaniyah field is the world's largest conventional offshore oil field in terms of proved reserves. It is located approximately 260 kilometers north of Dhahran. Most of the field lies offshore in the Arabian Gulf. Within the Concession area, the Safaniyah field is approximately 50 kilometers long and 15 kilometers wide.&nbsp;&nbsp;</p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Shaybah</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Shaybah</h3>
                                <p>
                                  <span>The Shaybah field, located in the Rub &rsquo;al-Khali or Empty Quarter, was discovered in 1968. Its remote location, local summer temperatures in excess of 50 degrees Celsius and sand dunes higher than 300 meters presented serious challenges. So for technical and economic reasons, development was held off until 20 years later. However, by the 1990s, advances in 3D seismic imaging technology, horizontal drilling and other technologies gave us the tools we needed to begin production.&nbsp;</span>
                                </p>
                                <p>
                                  <span>The field is approximately 13 kilometers wide and 64 kilometers long. Due to the field's remoteness, its facilities include a dedicated NGL recovery unit, an airfield and accommodation for staff.&nbsp;</span>
                                </p>
                                <p>
                                  <span>Our second 250,000 bpd expansion project at Shaybah came on-stream in 2016, raising its overall production capacity to 1 million bpd of Arabian Extra Light crude oil &mdash;double the facility &rsquo;s original capacity.&nbsp;</span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Zuluf</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Zuluf</h3>
                                <p>The Zuluf field is located in the Arabian Gulf, approximately 240 kilometers north of Dhahran, in average water depth of 118 feet. The field has two main structures, Zuluf and Ribyan, and is of similar area to Safaniyah to the north.&nbsp;&nbsp;</p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="country-block">
                        <h3>Refinery</h3>
                        <div className="country-row">
                          <div className="country-col">
                            <div className="country-title">
                              <h4>Jazan Refinery</h4>
                            </div>
                            <div className="country-address-block">
                              <div className="country-info">
                                <a href="#" tabIndex={0}>
                                  <h4>More info</h4>
                                </a>
                              </div>
                              <div className="office-address">
                                <h3>Jazan Refinery</h3>
                                <p>
                                  <span>Aramco operates one of the world &rsquo;s largest refining businesses, and its integrated petrochemical refinery complex at Jazan City for Primary and Downstream Industries is part of the Company &rsquo;s vibrant downstream growth strategy.</span>
                                </p>
                                <p>
                                  <span>In 2020, Aramco confirmed that it would proceed with the divestment of the Jazan Integrated Gasification and Combined Cycle Plant into a Joint Venture (JV)   between Aramco, Air Products, ACWA Power, and Air Products Qudra, integrating the Air Separation Unit into the JV.</span>
                                </p>
                                <p>
                                  <span>With the addition of our Jazan Refinery Complex, Aramco has five wholly owned refineries within the Kingdom, three of which were built specifically to supply transportation and utility fuels for the domestic marketplace.&nbsp;Aramco &rsquo;s four domestic affiliated refineries within the Kingdom are highly competitive with other world-class facilities based on scale, configurations and product yields.&nbsp;</span>
                                </p>
                                <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>







            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
