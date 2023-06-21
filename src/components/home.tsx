import "../styles/main.css";

export const Home = () => {
  function navClickOut(event: { preventDefault: () => void; }) {
    event.preventDefault();
  }

  return (
    <div className="home">
      <section
        className="main-nav js-main-nav"
        role="navigation"
        onClick={navClickOut}
      >





        <div className="main-nav__dummy"></div>
        <div className="main-nav__float-wrap">
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
                srcSet={`${require("../images/affiliateLogo.png")}, ${require("../images/affiliateLogo-2x.png")} 2x`}
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
                <div className="tab-pane">
                  <div className="panel panel-default">
                    <div className="panel-heading" data-id="4">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">Joint ventures
                        </a>
                      </h4>
                    </div>
                    <div id="4" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="country-block">
                          <h3>Joint ventures</h3>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <h4>Hyundai Oilbank</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Hyundai Oilbank</h3>
                                  <p>Hyundai Oilbank is a refinery in South Korea, established in 1964. The Daesan Complex, where Hyundai Oilbank &rsquo;s major facilities are located, is a fully integrated refining plant with a processing capacity of 650,000 barrels of crude oil per day. Aramco has a 17% equity interest in Hyundai Oilbank.</p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="https://www.idemitsu.com/" target="_blank">Idemitsu Kosan</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Idemitsu Kosan Co., Ltd</h3>
                                  <p>Idemitsu Kosan, one of leading refining and marketing companies in Japan, is a result of a merger between Idemitsu and Showa Shell Sekiyu. Its sales in Japan are primarily gasoline, diesel oil, kerosene and automotive lubricants. Idemitsu Kosan &nbsp;owns and operates more than 6,400 retail service stations,&nbsp;has equity stakes in six refineries, and &nbsp;a gross refining capacity of 945,000 bpd. Aramco owns a 7.7% equity interest in Idemitsu Kosan.</p>
                                  <p>
                                    <a className="cta__primary" href="https://www.idemitsu.com/" target="_blank" rel="noopener noreferrer nofollow">WEBSITE</a>
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
                                  <a href="https://motiva.com/" target="_blank">Motiva</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Motiva Enterprises</h3>
                                  <p>Motiva Enterprises, a fully owned affiliate of Saudi Aramco, operates the Port Arthur Refinery, the largest refinery in the U.S. at 635,000 bpd in Port Arthur, Texas. Motiva has acquired a 100% equity interest in Motiva Chemicals LLC (formerly Flint Hills), a chemical plant in Port Arthur, Texas.</p>
                                  <p>
                                    <a className="cta__primary" href="https://motiva.com" target="_blank" rel="noopener noreferrer nofollow">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="https://samref.com.sa" target="_blank">SAMREF</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Saudi Aramco Mobil Refinery Company </h3>
                                  <p>SAMREF is an equally owned joint venture between Saudi Arabian Oil Company (Saudi Aramco) and Mobil Yanbu Refining Company Inc. (a wholly owned subsidiary of Exxon Mobil Corporation).&nbsp;Its current refining capacity is 400,000 bpd.</p>
                                  <p>
                                    <a className="cta__primary" href="https://www.samref.com.sa/default.aspx" target="_blank" rel="noopener noreferrer">WEBSITE</a>
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
                                  <a href="http://sinopecsenmeifj.com/en_index.asp" target="_blank">Sinopec SenMei</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Sinopec SenMei Petroleum Company Ltd.</h3>
                                  <p>Sinopec SenMei Petroleum Company Limited is a joint venture of Sinopec, ExxonMobil China Petroleum &amp;Petrochemical Company Limited and Saudi Aramco Sino Company Limited. Sinopec SenMei, with headquarters in Fuzhou, is mainly engaged in the wholesale, retail, storage, throughput and transport of the processed oil, lubricant and other petroleum products, operation of convenience stores of service stations, car washing, lubricant replacement, restaurant and other auxiliary services.</p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="country-block">
                          <h3>Chemicals</h3>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="https://www.arlanxeo.com" target="_blank">Arlanxeo</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Arlanxeo</h3>
                                  <p>Based in Maastricht, Netherlands, as a wholly-owned subsidiary of Saudi Aramco, ARLANXEO serves the development, production, marketing, sale and distribution of specialty chemicals and synthetic rubber products, principally for the high-volume global tire and automotive industries. </p>
                                  <p>
                                    <a href="https://www.arlanxeo.com/" target="_blank" className="cta__primary" rel="noopener noreferrer nofollow">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="http://www.fjrep.com/en/index" target="_blank">FREP</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Fujian Refining and Petrochemical Company Ltd. (FREP)</h3>
                                  <p>FREP, is our joint venture with ExxonMobil, China Petroleum and Petrochemical Company Limited (Sinopec) and the Fujian provincial government.</p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="https://www.petrorabigh.com/en" target="_blank">Petro Rabigh</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Rabigh Refining and Petrochemical Company (Petro Rabigh)</h3>
                                  <p>A joint venture between Saudi Aramco and Sumitomo Chemical. The products produced are used in such end products as plastics, detergents, lubricants, resins, coolants, anti-freeze, paint, carpets, rope, clothing, shampoo, auto interiors, epoxy glue, insulation, film, fibers, household appliances, packaging, candles, pipes and many other applications.</p>
                                  <p>
                                    <a href="https://www.petrorabigh.com/en" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="https://prefchem.com/" target="_blank">PRefChem</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>PRefChem</h3>
                                  <p>PRefChem venture is a strategic alliance between Saudi Aramco and Petronas, through equal ownership in two joint ventures, namely the Pengerang Refining Company Sdn. Bhd. (PRefChem Refining) and the Pengerang Petrochemical Company Sdn. Bhd. (PRefChem Petrochemical), collectively known as PRefChem.&nbsp;</p>
                                  <p>
                                    <a href="https://www.prefchem.com" className="cta__primary" target="_blank" rel="noopener noreferrer">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <div className="country-title-lang">
                                  <a className="country-link" target="_blank" href="https://www.sabic.com/en">
                                    <h4>SABIC </h4>
                                    <span>English</span>
                                  </a>
                                  <span>
                                    <a href="https://www.sabic.com/ar" target="_blank">العربية</a>
                                  </span>
                                </div>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Saudi Basic Industries Corporation (SABIC) </h3>
                                  <p>
                                    <a className="cta__primary" href="https://www.sabic.com" target="_blank" rel="noopener noreferrer">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <div className="country-title-lang">
                                  <a className="country-link" target="_blank" href="https://www.sadara.com/en">
                                    <h4>SADARA </h4>
                                    <span>English</span>
                                  </a>
                                  <span>
                                    <a href="https://www.sadara.com/ar" target="_blank">العربية</a>
                                  </span>
                                </div>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Sadara Chemical Company (SADARA)</h3>
                                  <p>A joint venture developed by Saudi Aramco and the Dow Chemical Company. The Sadara chemical complex―the largest of its kind ever built in a single phase― manufactures a portfolio of valued-added performance plastics and specialty chemicals.</p>
                                  <p>
                                    <a href="https://www.sadara.com/" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
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
                                  <a href="https://sasref.com.sa/index.html" target="_blank">SASREF</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Saudi Aramco Jubail Refinery Company - SASREF</h3>
                                  <p>A
                                    Saudi company wholly-owned by Saudi Aramco.&nbsp;The refinery is located in Jubail Industrial city. The refinery processes crude oil into petroleum products for both local and international markets.</p>
                                  <p>
                                    <a href="https://sasref.com.sa/index.html" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="http://www.satorp.com/" target="_blank">SATORP</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Saudi Aramco Total Refining and Petrochemical company</h3>
                                  <p>The Saudi Aramco Total Refining and Petrochemical Co. (SATORP), a joint venture between Saudi Aramco and Total in Jubail, supports Saudi Aramco &rsquo;s efforts to expand the value chain and achieve maximum value from the Kingdom &rsquo;s resources. It processes heavy Arabian crude daily into low-sulfur gasoline, diesel and jets fuel that comply with the standards in the United States, Europe and Japan. It also produces paraxylene, benzene, sulfur and pure petroleum coke that fuels cement plants and electric power stations.</p>
                                  <p>
                                    <a href="http://www.satorp.com/" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <div className="country-title-lang">
                                  <a className="country-link" target="_blank" href="http://www.s-oil.com/en/Default.aspx">
                                    <h4>S-Oil Corporation </h4>
                                    <span>English</span>
                                  </a>
                                  <span>
                                    <a href="http://www.s-oil.com/Default.aspx" target="_blank">한국어</a>
                                  </span>
                                </div>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>S-Oil Corporation</h3>
                                  <p>Our investment in South Korea &rsquo;s S-OIL, one of the country &rsquo;s leading refiners, complements our downstream ventures in China and Japan and creates new opportunities along the value chain in the major energy markets in Asia.</p>
                                  <p>
                                    <a href="http://www.s-oil.com/en/Default.aspx" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>
                                  <a href="https://www.yasref.com/en-us/Pages/Index.aspx" target="_blank">YASREF</a>
                                </h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Yanbu Aramco Sinopec Refining Company</h3>
                                  <p>The Yanbu Aramco Sinopec
                                    Refining Company (YASREF) Ltd., a joint venture between Saudi Aramco and China
                                    Petrochemical Corporation (Sinopec), is a world-class, full-conversion refinery
                                    that covers about 5.2 million square meters in the Yanbu Industrial City, and
                                    is the key anchor project in Yanbu. YASREF uses 400,000 barrels per day (bpd)
                                    of Arabian heavy crude oil to produce premium transportation fuels, as well as
                                    high-value refined products for both international and domestic markets.</p>
                                  <p>YASREF is a significant addition to the impressive downstream portfolio of Saudi Aramco, while building on and cementing the strategic partnership with Sinopec, Saudi Aramco &rsquo;s largest crude oil partner and buyer. Both companies bring commercial and technical expertise to the joint venture to enhance trade of transportation fuels between a significant energy producer and its consumer.</p>
                                  <p>In addition, YASREF represents a continuing step forward in the strategies of Saudi Aramco and Sinopec to drive growth further downstream to capture additional value along the hydrocarbon chain.</p>
                                  <p>
                                    <a href="https://www.yasref.com/en-us/Pages/Index.aspx" target="_blank" className="cta__primary" rel="noopener noreferrer">WEBSITE</a>
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
                <div className="tab-pane">
                  <div className="panel panel-default">
                    <div className="panel-heading" data-id="5">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent=".tab-pane" href="#collapseOne">Research centers
                        </a>
                      </h4>
                    </div>
                    <div id="5" className="panel-collapse collapse">
                      <div className="panel-body">
                        <div className="country-block">
                          <h3>All centers</h3>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <h4>United Kingdom</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Aberdeen, Scotland</h3>
                                  <p>
                                    <span>Our Technology Office in Aberdeen focuses on drilling and production technologies. The European arm of </span>
                                    <a rel="noopener noreferrer" href="https://saev.com/" target="_blank" >Saudi Aramco Energy Ventures (SAEV)</a>
                                    <span>is located within the office, whose mission is to source and develop relationships with strategically significant and innovative energy technology companies.&nbsp;&nbsp;</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>China</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>
                                    <span>Beijing</span>
                                  </h3>
                                  <p>
                                    <span>Our Beijing Research Center conducts research on chemical enhanced oil recovery and advanced seismic imaging technologies, including automated fault detection and improvements in data quality through super resolution. </span>
                                  </p>
                                  <p>
                                    <span>The Center is also evaluating the expansion of research activities into the downstream sector in areas such as transportation efficiency, greenhouse gas management, advanced control and power systems, robotics, materials science, nanotechnology and advanced computing.</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <h4>South Korea</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>
                                    <span>Daejeon</span>
                                  </h3>
                                  <p>
                                    <span>Our CO2 Management Collaboration at the </span>
                                    <a rel="noopener noreferrer" href="https://irt.kaist.ac.kr/index.do" target="_blank">
                                      <span>Korean Advanced Institute of Science and Technology (KAIST)</span>
                                    </a>
                                    <span>in Daejeon,&nbsp;South &nbsp;Korea, is dedicated to addressing issues related to carbon management. The collaboration follows an interdisciplinary approach to innovative and cost-effective CO2 capture, storage, and conversion from fixed and mobile sources.&nbsp;</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>The Netherlands</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>
                                    <span>Delft</span>
                                  </h3>
                                  <p>
                                    <span>The </span>
                                    <a rel="noopener noreferrer" href="http://www.tudelft.nl/en/" target="_blank" >
                                      <span>Delft University of Technology</span>
                                    </a>
                                    <span>in the Netherlands is home to our technology office that focuses mainly on seismic processing and subsurface imaging to help us better understand the nature of our subsurface geology.</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <h4>Russia</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>Moscow</h3>
                                  <p>
                                    <strong>
                                      <span>Aramco Innovations Research Cente</span>
                                      r<br />
                                    </strong>
                                    Leninskiye Gory 1 bldg 75-B<br />
                                    119234 Moscow &nbsp;<br />Russia
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>France</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>
                                    <span>Paris</span>
                                  </h3>
                                  <p>
                                    <span>Our Aramco Fuel Research Center in Paris is located at </span>
                                    <a rel="noopener noreferrer" href="http://www.ifpenergiesnouvelles.com/" target="_blank" >
                                      <span>IFP Energies nouvelles (IFPen)</span>
                                    </a>
                                    <span>. IFP Energies nouvelles is a public-sector research, innovation and training center active in the fields of energy, transport and the environment. Thanks to this &nbsp;strategic placement, we can capitalize on IFPen &rsquo;s facilities and links to various European automakers to accelerate the innovation cycle of different fuel technologies.</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="country-row">
                            <div className="country-col">
                              <div className="country-title">
                                <h4>Saudi Arabia</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>
                                    <span>Dhahran</span>
                                  </h3>
                                  <p>
                                    <span>Our research areas at our Dhahran headquarters include the Research &amp;Development Center (R &amp;DC) and the EXPEC Advanced Research Center (EXPEC ARC).</span>
                                  </p>
                                  <p>
                                    <span>EXPEC ARC develops specialized technologies necessary to achieve its upstream objectives of increasing discovery of oil resources and increasing reservoir recovery. An expansion of the EXPEC Advanced Research Center is currently underway, with new facilities to enable integrated research on sustainability technologies.</span>
                                  </p>
                                  <p>
                                    <span>Our R &amp;DC focuses on cutting-edge technologies that enhance operational reliability, efficiency and safety, as well as investigating clean fuels and the management of carbon release.</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                  <h3>
                                    <span>Thuwal</span>
                                  </h3>
                                  <p>
                                    <span>Our research center at the </span>
                                    <a href="http://www.kaust.edu.sa/" target="_blank" rel="noopener noreferrer nofollow">
                                      <span>King Abdullah University of Science and Technology</span>
                                    </a>
                                    <span>(KAUST)&nbsp;</span>
                                    focuses on catalyst development, materials science, nanotechnology, robotics, solar energy materials and fuel technology. The strong capabilities provided in downstream areas are complemented by our FUELCOM collaboration with the <a href="https://ccrc.kaust.edu.sa/Pages/Home.aspx" target="_blank" rel="noopener noreferrer nofollow">KAUST Clean Combustion Research Center</a>
                                    .
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                </div>
                              </div>
                            </div>
                            <div className="country-col">
                              <div className="country-title">
                                <h4>USA</h4>
                              </div>
                              <div className="country-address-block">
                                <div className="country-info">
                                  <a href="#" tabIndex={0}>
                                    <h4>More info</h4>
                                  </a>
                                </div>
                                <div className="office-address">
                                  <h3>
                                    <span>Boston</span>
                                  </h3>
                                  <p>
                                    <span>Aramco Research Center-Boston supports development in the areas of computational modeling, advanced materials, and nanotechnology. The center works on collaborative research projects with the nearby </span>
                                    <a rel="noopener noreferrer" href="https://web.mit.edu/" target="_blank" >
                                      <span>Massachusetts Institute of Technology (MIT</span>
                                    </a>
                                    <span>) faculty, with a focus on modeling, visualization, simulation, and advanced materials.&nbsp;</span>
                                  </p>
                                  <p>
                                    <span>Our Aramco Research Centers in Detroit, Houston, and Boston have a collaboration with the </span>
                                    <a href="https://mitei.mit.edu/" target="_blank" rel="noopener noreferrer nofollow">
                                      <span>MIT Energy Initiative (MITEI)</span>
                                    </a>
                                    <span>to support research by two Low-Carbon Energy Centers designed to address climate change challenges. The centers bring together researchers from multiple disciplines at MIT to engage with companies, governmental agencies, and other stakeholders to further research and promote clean energy technologies to mitigate climate change.</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                  <h3>
                                    <span>Detroit</span>
                                  </h3>
                                  <p>
                                    <span>Our Aramco Research Center in Detroit focuses on competitive transportation solutions, improving the efficiency of current and future engines, reducing overall environmental impact, cost, and complexity of engine systems.</span>
                                  </p>
                                  <p>
                                    <span>The Center can accommodate light-duty and heavy-duty fuels research programs and also offers full on-site integration and the demonstration of new vehicle technologies. Our Strategic Transportation Analysis Team, based in the Detroit Center, provides dynamic industry analysis relevant to our fuels research and development activities.</span>
                                  </p>
                                  <hr style={{ width: '100%', border: '1px solid', borderBottom: '0', opacity: '0.1' }} />
                                  <h3>
                                    <span>Houston</span>
                                  </h3>
                                  <p>
                                    <span>Aramco Research Center in Houston focuses on upstream technologies for conventional and unconventional resources to support discovery and recovery goals. Specific areas of research include advanced seismic imaging, unconventional productivity enhancement, smart fluids to improve well productivity, nano-based polymers, surfactants, cement technologies related to drilling operations, quantitative geology, and advanced downhole sensors. It is our largest center outside Saudi Arabia.</span>
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
          {/* end global directory overlay */}
        </div>
      </section>
      <main role="main" id="saudi-app">
        <div className="sublayout__full-width ">
          {/* Slider main container */}
          <main className="c65-banner-carousel">
            <div className="container container--anniversary parallax">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 103.67 101.53"
                id="uuid-854f63e2-25fd-4153-a2b8-1548872d53b4"
                data-name="Layer 1">
                <g fill="white">
                  <path d="m52.21,2.09l.19,3.58-1.31.07-.18-3.47c-.04-.78-.65-1-1.18-.97-.24.01-.53.08-.8.19.05.19.09.42.1.77l.19,3.58-1.31.07-.18-3.47c-.04-.79-.51-1-1.15-.97-.3.02-.67.09-.96.2l.23,4.34-1.31.07-.29-5.44c.86-.26,1.59-.43,2.44-.47.6-.03,1.03.04,1.48.29.51-.28,1.13-.43,1.76-.46.86-.04,1.37.15,1.75.55.35.37.49.8.53,1.54Z" fill="#FFFFFF" />
                  <path d="m40.09,1.13c-1.76.36-2.58,1.6-2.21,3.42h0c.38,1.82,1.62,2.62,3.35,2.26l2.77-.57-.59-2.86c-.38-1.83-1.59-2.61-3.33-2.25Zm2.03,2.52l.33,1.57h0l-1.48.3c-.91.19-1.57-.24-1.77-1.24-.21-1.02.23-1.66,1.16-1.86.93-.19,1.55.2,1.76,1.22Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m33.84,5.91c-.59-1.81.16-3.15,1.88-3.7.24-.08.5-.14.86-.19l.11,1.32c-.25.05-.56.12-.72.17-.94.3-1.15,1.13-.86,2.01l.87,2.69-1.25.4-.88-2.71h0Z" fill="#FFFFFF" />
                  <path d="m29.2,4.64c-1.64.73-2.18,2.11-1.41,3.81h0c.76,1.7,2.14,2.21,3.76,1.49l2.59-1.15-1.2-2.66c-.77-1.7-2.12-2.21-3.74-1.49Zm3.18,3.49l-.66-1.46c-.43-.95-1.11-1.21-1.98-.82-.87.39-1.16,1.11-.73,2.06.42.93,1.15,1.21,2,.83l1.38-.61Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m21.5,7.47c-.27-.42-.16-.87.25-1.13.41-.26.86-.15,1.12.27.27.42.17.88-.24,1.13-.41.26-.87.15-1.14-.28Z" fill="#FFFFFF" />
                  <path d="m22.34,8.51l1.11-.7,3,4.78-1.11.7-3-4.78Z" fill="#FFFFFF" />
                  <path d="m24.57,13.71l-5.06-6.66h0s0,0,0,0c-.45.38-.99.83-.84,1.08l1.53,2.01c-.43.06-.89.26-1.36.61-1.41,1.06-1.57,2.47-.44,3.95,1.15,1.51,2.53,1.75,3.93.7l2.25-1.7Zm-1.86-.24l-1.19.9c-.72.54-1.39.42-2.06-.46-.63-.83-.57-1.53.18-2.09.86-.65,1.61-.28,2.24.55l.84,1.11Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m45.25,41.18l-4.09-9.76c-2.77-6.59-1.46-13.86,2.78-19.04-2.74.51-5.46,1.3-8.13,2.41-12.42,5.17-20.84,15.85-23.6,28.01,2.26-2.65,5.42-4.86,9.45-6.54,9.75-4.06,18.03-2.38,23.6,4.92Z" fill="#FFFFFF" />
                  <path d="m38.62,51.71c-2.55-6.09-7.39-7.95-13.33-5.48-6.01,2.5-8.14,7.38-5.59,13.48,2.54,6.06,7.48,7.96,13.42,5.49l9.5-3.96-4-9.53h0Z" fill="#FFFFFF" />
                  <path d="m80.78,63.46l-4.95,2.06c-8.56,3.56-18.26.34-23.08-7.21.19,1.43.24,2.87.12,4.32l-1.93,23.98c.09,1.74-.38,3.41-1.27,4.82,5.65.23,11.44-.74,17-3.05,15.09-6.28,24.27-20.69,24.59-35.99-1.7,4.83-5.37,8.95-10.48,11.08h0Z" fill="#FFFFFF" />
                  <path d="m18.19,74.1c5.24,3.58,11.93,3.88,19.4.77h0s3.76-1.56,3.76-1.56l-1.5,16.5c-8.66-2.56-16.39-8-21.67-15.71Z" fill="#FFFFFF" />
                  <path d="m56.84,16.1l1.96-.82h0c4.99-2.07,10.73.27,12.81,5.24l8.81,21c2.08,4.97-.27,10.68-5.26,12.76l-1.96.81c-4.99,2.07-10.72-.27-12.81-5.24l-8.81-21c-2.09-4.97.27-10.68,5.26-12.76Zm9.27,24.57l-.46-1.1-.27.11c-.83.31-1.43,0-1.84-.98l-1.61-3.84.96-.4-.46-1.08-.96.4-.69-1.63-.05.03c-.48.24-1.05.51-.98.76l.56,1.33-.64.26.46,1.08.64-.26,1.62,3.87c.75,1.77,1.78,2.26,3.51,1.54l.22-.09Zm6.51-2.71l1.16-.48h0s-2-4.77-2-4.77c-.84-1.99-2.19-2.54-4.24-1.7-.68.28-1.36.68-2.04,1.22l-1.56-3.73-.06.03c-.48.23-1.04.51-.97.76l4.54,10.81,1.16-.48-2.61-6.22c.55-.51,1.23-.93,1.81-1.17,1.31-.54,2.29-.29,2.89,1.12l1.93,4.61Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m9.54,29.39l-1.14-.72s.09-.05.13-.08c.39-.24.84-.51,1.31-1.25.42-.67.53-1.18.17-1.4-.26-.16-.53.11-.91.49-.14.14-.29.3-.47.45-.52.46-1.32,1.02-2.16.49-.95-.59-1.07-1.65-.31-2.86.27-.42.76-.87,1.32-1.22l.89.92c-.37.12-.78.5-1.11,1.02-.3.47-.29.88-.08,1.01.3.19.78-.29,1.19-.71.08-.08.16-.16.23-.23.6-.57,1.24-1.05,2.11-.51,1,.62,1,2,.22,3.24-.43.68-.9,1.04-1.4,1.34h0Z" fill="#FFFFFF" />
                  <path d="m9.69,19.62c-1.13,1.39-.98,2.87.48,4.04,1.45,1.16,2.92,1,4.03-.38l1.78-2.2-2.28-1.83c-1.46-1.17-2.89-1.01-4,.37Zm4.43,1.67l-1.25-1.01c-.81-.65-1.54-.57-2.14.17-.6.74-.53,1.52.29,2.17.8.64,1.58.56,2.16-.17l.94-1.17Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m14.84,19.28l-2.5-2.57.95-.92,2.43,2.5c.42.43.99.39,1.51-.11.52-.5.57-1.05.15-1.49l-2.43-2.5.95-.92,2.5,2.57c.96.98.86,2.2-.25,3.28-1.13,1.09-2.36,1.15-3.31.16h0Z" fill="#FFFFFF" />
                  <path d="m56.22.28c-1.83-.16-3.01.85-3.18,2.75h0c-.16,1.86.81,2.96,2.58,3.12.85.07,1.54-.12,2-.51l-.64-1.04c-.35.19-.67.29-1.09.25-.96-.08-1.47-.73-1.38-1.76.09-1.04.71-1.58,1.67-1.5.46.04.82.21,1.07.46l.72-1.05c-.44-.4-.95-.66-1.75-.73Z" fill="#FFFFFF" />
                  <path d="m58.44,3.42c.36-1.73,1.75-2.64,3.45-2.29,1.7.35,2.59,1.73,2.23,3.47-.36,1.74-1.74,2.67-3.44,2.32-1.71-.35-2.6-1.76-2.24-3.5Zm4.37.9c.2-.96-.28-1.72-1.19-1.91-.92-.19-1.67.32-1.87,1.27-.2.98.27,1.75,1.2,1.94.91.19,1.66-.33,1.86-1.31Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m70.75,3.82c-1.63-.65-2.92-.07-3.63,1.7-.69,1.72-.16,3.01,1.46,3.65l2.52,1.01,1.07-2.66c.71-1.77.2-3.06-1.41-3.71Zm.61,3.39l-.75,1.86h0l-1.72-.69c-1.11-.44-1.47-1.32-.98-2.54.51-1.27,1.4-1.68,2.52-1.23,1.11.45,1.44,1.33.93,2.6Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m74.29,5.81c.8.11,1.69.42,2.35.78,1.32.72,1.58,1.68.86,2.99l-1.73,3.14-.75-.41,1.67-3.03c.51-.93.26-1.59-.58-2.07-.36-.2-.89-.38-1.39-.44l-2.28,4.14-.75-.41,2.58-4.69h0Z" fill="#FFFFFF" />
                  <path d="m81.72,9.76c-.62-.43-1.48-.84-2.25-1.04h0s-3.1,4.37-3.1,4.37l.69.49,2.73-3.86c.49.12.99.36,1.33.59.77.57.95,1.26.34,2.13l-2,2.83.69.49,2.07-2.92c.87-1.22.72-2.2-.51-3.07Z" fill="#FFFFFF" />
                  <path d="m84.45,12.04l.65.54-3.61,4.33-.65-.54,3.61-4.33Z" fill="#FFFFFF" />
                  <path d="m85.22,10.93c.21-.26.52-.28.77-.07.25.21.29.5.07.76-.22.27-.53.31-.79.1-.25-.21-.28-.53-.06-.79Z" fill="#FFFFFF" />
                  <path d="m84.21,19.39l5.5-2.54-.69-.67-4.27,2,1.88-4.31-.7-.68-2.4,5.54.69.66Z" fill="#FFFFFF" />
                  <path d="m91.32,23.73l-2.9-3.57c-.81.79-.86,1.73-.16,2.6.58.71,1.34,1.02,2.06.83v.84c-.98.21-2-.23-2.75-1.17-1.09-1.34-.89-2.82.54-3.97,1.46-1.18,2.97-1.08,4.06.26,1.2,1.48.75,3.09-.86,4.17Zm-2.33-4.01l2.36,2.9c.77-.79.84-1.71.17-2.53-.68-.83-1.59-.95-2.53-.37h0Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m96.12,25.1c-1.04-1.61-2.5-1.81-4.05-.82h0l-2.4,1.54.46.71,2.46-1.57c1-.64,2.06-.55,2.73.48.11.18.27.45.39.7l.81-.28c-.12-.29-.23-.53-.38-.76Z" fill="#FFFFFF" />
                  <path d="m92.2,28.93l.82-.41c-.08.66-.03,1.24.34,1.96.45.87,1.01,1.25,1.56.98.51-.26.32-.96.16-1.54-.04-.13-.07-.26-.1-.37,0-.04-.02-.08-.03-.12h0c-.13-.56-.38-1.56.6-2.06,1.03-.53,1.87-.06,2.48,1.12.23.44.36.97.39,1.63l-.83.13c.05-.43-.11-.95-.35-1.4-.35-.69-.77-.98-1.3-.72-.53.27-.3,1.03-.14,1.57.03.08.05.16.07.24.17.64.46,1.75-.56,2.27-1,.51-2.06-.06-2.73-1.35-.33-.64-.46-1.26-.39-1.94h0Z" fill="#FFFFFF" />
                  <path d="m100.41,33.91c-.61-1.64-1.92-2.2-3.71-1.53h0c-1.75.65-2.34,1.91-1.73,3.54l.95,2.53,2.69-1c1.8-.67,2.41-1.91,1.81-3.54Zm-2.1,2.74l-1.89.7h0s-.65-1.73-.65-1.73c-.42-1.12,0-1.97,1.23-2.43,1.29-.48,2.18-.1,2.61,1.03.42,1.12-.01,1.96-1.3,2.43Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m98.83,38.44c1.79-.45,3.11.22,3.57,2.07.07.26.1.53.12.84h-.85c-.04-.27-.09-.58-.14-.79-.3-1.19-1.28-1.61-2.43-1.32l-2.83.71-.21-.82,2.77-.69Z" fill="#FFFFFF" />
                  <path d="m94.95,44.48c.06.4.11.83.38.86h0s8.03,1.83,8.03,1.83l-.14-.94-4.63-1.01,4.17-2.26-.14-.96-5.3,2.94-2.38-.53v.08Z" fill="#FFFFFF" />
                  <path d="m98.63,54.97l-.85-.02.1-3.89.66.02c.22.28.41.54.6.79,1.11,1.47,1.69,2.25,2.54,2.27.66.02,1.11-.45,1.13-1.17.02-.61-.29-1.11-.75-1.37l.4-.59c.73.31,1.23,1.04,1.21,2.01-.03,1.17-.81,1.99-1.94,1.96-1.15-.03-1.86-.9-2.95-2.24l-.09-.11-.06,2.35Z" fill="#FFFFFF" />
                  <path d="m103.2,58.76c.21-1.55-.82-2.73-2.59-2.98-1.76-.24-3.08.63-3.29,2.18-.21,1.55.82,2.75,2.58,2.98,1.77.24,3.09-.64,3.3-2.19Zm-.85-.11c-.15,1.05-1.07,1.62-2.33,1.45-1.25-.17-1.99-.97-1.84-2.02.14-1.04,1.06-1.62,2.32-1.45,1.26.17,2,.98,1.86,2.01Z" fill="#FFFFFF" fill-rule="evenodd" />
                  <path d="m96.79,65.1l.58-2.28.07.13c.76,1.55,1.26,2.55,2.37,2.83,1.1.28,2.04-.35,2.33-1.49.23-.93-.08-1.75-.73-2.22l-.53.49c.39.36.58.91.43,1.5-.18.7-.72,1.05-1.36.89-.82-.21-1.22-1.09-1.97-2.77-.13-.28-.26-.58-.41-.9l-.64-.16-.95,3.77.82.2Z" fill="#FFFFFF" />
                  <path d="m93.66,66.54c-.53,1.43.23,2.89,1.65,3.41h0c1.04.38,2.03.11,2.73-.57l1.73,1.7,1.27-3.43-.81-.3-.83,2.25-1.49-1.48c-.57.87-1.33,1.38-2.34,1.01-1.01-.37-1.46-1.29-1.09-2.3.21-.57.56-.87,1.02-1.06l-.4-.73c-.64.28-1.15.77-1.42,1.5Z" fill="#FFFFFF" />
                  <path d="m6.36,31.17c-2.64,5.98-4.11,12.59-4.11,19.55,0,26.82,21.83,48.56,48.76,48.56,18.97,0,35.4-10.78,43.47-26.53l2,1.03c-8.44,16.47-25.63,27.75-45.47,27.75C22.85,101.53,0,78.79,0,50.72c0-7.28,1.54-14.2,4.31-20.46l2.06.91Z" fill="#FFFFFF" fill-rule="evenodd" opacity=".25" />
                </g>
              </svg>
            </div>
            {/* Swiper */}
            <div className="swiper-container swiperBanner">
              <div className="swiper-wrapper" id="43a4804c60824db499ed5739f93359e4">
                <div className="swiper-slide">
                  <img
                    src={require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=356&amp;ch=200&amp;hash=269BC92808EF211BDC377850339C2008A17AF8E1")}
                    srcSet={`${require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=853&amp;ch=480&amp;hash=11938929150D41A64025E17597CD47323ABAB561 768w")}, ${require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=1138&amp;ch=640&amp;hash=A1497BEA7B8F802C0F9625A867BFE0BD82128CE6 1024w")}, ${require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=1600&amp;ch=900&amp;hash=C3DB6E540418906F071A850D0A20D1D866364AE5 1440w")}, ${require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=712&amp;ch=400&amp;hash=74B544905C73A9038FD9489F1132E4ED9EA7F3C3 640w")}, ${require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=1706&amp;ch=960&amp;hash=F06F91E6F3C470CB678C425C5E1D6383971C9673 1536w")}, ${require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=1707&amp;ch=960&amp;hash=6BCEBDD505A89BD6F7CEFA9B7E372E2042BE72D3 1600w")}, ${require("../images/as01202010-reader-fish.jpg?cx=0.55&amp;cy=0.48&amp;cw=2000&amp;ch=1125&amp;hash=A336CC03D3C4562D6E8FA07459462F4C30FC806A 1800w")}`}
                    sizes="100vw"
                    alt=""
                  />
                  <div className="slider-content">
                    <div className="container">
                      <div className="carousel-info-main">
                        <h3>Elements</h3>
                        <h1>Marine studies to protect our seas</h1>
                        <p className="carousel-description">For decades, Aramco has supported Arabian Gulf and Red Sea research that could help guide best practice in areas from conservation to fisheries management.
                        </p>
                      </div>
                      <div className="banner-cta">
                        <a className="cta__primary" href="/en/magazine/elements/2023/marine-studies-to-protect-our-seas">LEARN MORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    src={require("../images/90-years-website-masthead-web.jpg")}
                    srcSet={`${require("../images/90-years-website-masthead-web.jpg")}, ${require("../images/90-years-website-masthead-web.jpg")}`}
                    sizes="100vw"
                    alt=""
                  />
                  <div className="slider-content">
                    <div className="container">
                      <div className="carousel-info-main">
                        <h3>Our history</h3>
                        <h1>90 years of exploration, discovery, and innovation</h1>
                        <p className="carousel-description"></p>
                      </div>
                      <div className="banner-cta">
                        <a className="cta__primary" href="/en/who-we-are/overview/our-history">EXPLORE OUR HISTORY</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    src={require("../images/q1-2023.jpg")}
                    srcSet={`${require("../images/q1-2023.jpg")}, ${require("../images/q1-2023.jpg")}`}
                    sizes="100vw"
                    alt=""
                  />
                  <div className="slider-content">
                    <div className="container">
                      <div className="carousel-info-main">
                        <h3>May 9, 2023</h3>
                        <h1>Saudi Aramco &#39;s Q1 2023 results announcement</h1>
                        <p className="carousel-description">Saudi Aramco announced its Q1 2023 results and dividend on May 9, 2023.
                        </p>
                      </div>
                      <div className="banner-cta">
                        <a className="cta__primary" rel="noopener noreferrer" href="/-/media/publications/corporate-reports/saudi-aramco-q1-2023-interim-report-english.pdf?la=en&amp;hash=8D335B243A6B4C643F2B6C180088E12838C1F61B" target="_blank">Q1 2023 INTERIM REPORT</a>
                        <a className="cta__secondary--negative" rel="noopener noreferrer" href="/-/media/publications/corporate-reports/saudi-aramco-q1-2023-results-press-release-english.pdf?la=en&amp;hash=CACE7FE0047C11054108BCC3A66BF10D6E3DFF39" target="_blank">PRESS RELEASE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <img
                    src={require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=356&amp;ch=200&amp;hash=D98493E42EBB89DCA86484E489E0A016A5B7387C")}
                    srcSet={`${require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=853&amp;ch=480&amp;hash=669762B0D8B7E699A8FDB5BF8AF97FD68D4FE3F3 768w")}, ${require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=1138&amp;ch=640&amp;hash=B448DB5F3D904BF4A5CB67D7ACE45DE1C76E05B6 1024w")}  , ${require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=1600&amp;ch=900&amp;hash=AC15E6840F386774D0CD576AE60A93F21679533C 1440w")}, ${require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=712&amp;ch=400&amp;hash=2F4115B3CE816A8543CA3106EC19042D61FD4196 640w")}, ${require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=1706&amp;ch=960&amp;hash=0EAC177C62BC96E4AA46306C3D0E74049AA8E2D9 1536w")}  , ${require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=1707&amp;ch=960&amp;hash=D3396419BEFED31DAD490A4D687AA9301BC81C58 1600w")}  , ${require("../images/poweredbyhow-optimized.jpg?cx=0.74&amp;cy=0.48&amp;cw=2000&amp;ch=1125&amp;hash=1E3CA6FD232662763FE3302D5F8AFA5D79C8C980 1800w")}`}
                    sizes="100vw"
                    alt=""
                  />
                  <div className="slider-content">
                    <div className="container">
                      <div className="carousel-info-main">
                        <h3>Powered by how</h3>
                        <h1>How can more women drive innovation in our industry?</h1>
                        <p className="carousel-description">Our female talent is pushing the energy industry forward.
                        </p>
                      </div>
                      <div className="banner-cta">
                        <a className="cta__primary" href="/en/campaigns/powered-by-how/how-women-drive-innovation">DISCOVER HOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Pagination */}
              <div className="container">
                <div className="swiper-pagination swiperbanner-pagination"></div>
              </div>
            </div>
          </main>
        </div>
        <div className="container sublayout sublayout__full-grid ">
          <div className="row justify-content-md-center">
            <div className="col-sm-12">
              <div className="feature-panel">
                <h2 className="feature-panel__heading">Technology development</h2>
                <div className="feature-panel__wrapper" data-id="guid-d017f29e-71cd-4065-bc30-272da989c515">
                  <div className="feature-panel__image-container">
                    <div className="background-images">
                      <span v-html="style"></span>
                      <script type="text/html" id="template-d017f29e-71cd-4065-bc30-272da989c515">
                        <style>
                        </style>
                      </script>
                    </div>
                  </div>
                  <div className="feature-panel__container container p-0">
                    <div className="feature-panel__content">
                      <div className="feature-panel__title-container">
                        <h2 className="feature-panel__title">The Aramco and Aston Martin Racing strategic partnership</h2>
                        <p className="feature-panel__category">TECHNOLOGY DEVELOPMENT</p>
                      </div>
                      <p className="feature-panel__copy">Aramco and the Aston Martin Formula One™ Team join forces to take on Formula 1 ®</p>
                      <div className="feature-panel__cta-wrapper">
                        <div className="feature-panel__cta-wrapper">
                          <a href="/en/creating-value/technology-development/aramco-and-aston-martin-strategic-partnership" >LEARN MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container sublayout sublayout__full-grid sublayout--no-margin">
          <div className="row justify-content-md-center">
            <div className="col-sm-12">
              <filter inline-template>
                <div className="news-filters">
                  <h2 className="news-filters__title">Latest from Elements Magazine</h2>
                  <div className="news-filters__filter-list">
                    <ul role="tablist">
                      <li role="tab" tabIndex={0} className="news-filters__filter-item" >
                        <span aria-label="Filter label for ">
                        </span>
                      </li>
                    </ul>
                    <button type="button" className="news-filters__clear-btn" >CLEAR ALL FILTERS</button>
                  </div>
                  <div className="news__items-container">
                    <div id="news-filter-5568e43e0c4f4fdf9708239a4a765a88" className="row news__items">
                      <div className="col-md-12 col-lg-4 news__news-item">
                        <article className="news-card ">
                          <div className="news-card__img">
                            <div className="inline-img__ratio">
                              <picture>
                                <img
                                  src={require("../images/spacer.gif")}
                                  data-srcset="/-/media/magazine/2022/marine-studies-to-protect-our-seas/as01202010-reader-fish.jpg?cx=0.5&amp;cy=0.5&amp;cw=486&amp;ch=297&amp;hash=75E7DA9CBFC8581B3CED0A0D7CC743EB951A2410" className="lazyload" alt="" />
                              </picture>
                            </div>
                          </div>
                          <div className="news-card__content">
                            <div className="news-card__content-inner">
                              <time dateTime="2023-06-13" className="news-card__date">Andrew Gray,  June 13, 2023
                              </time>
                              <h3 className="news-card__title">
                                <a href="/en/magazine/elements/2023/marine-studies-to-protect-our-seas">Marine studies to protect our seas</a>
                              </h3>
                              <p className="news-card__description">For decades, Aramco has supported Arabian Gulf and Red Sea research that could help guide best practice in areas from conservation to fisheries management.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-md-12 col-lg-4 news__news-item">
                        <article className="news-card ">
                          <div className="news-card__img">
                            <div className="inline-img__ratio">
                              <picture>
                                <img src={require("../images/spacer.gif")}
                                  data-srcset="/-/media/magazine/2023/coffee/01_coffee_round2_hero_en.jpg?cx=0.65&amp;cy=0.46&amp;cw=486&amp;ch=297&amp;hash=4DCF9A53DB19D9A6E241455ABFE1C7DCA9099527" className="lazyload" alt="" />
                              </picture>
                            </div>
                          </div>
                          <div className="news-card__content">
                            <div className="news-card__content-inner">
                              <time dateTime="2023-05-23" className="news-card__date">Riyadh Alalmaie,  May 23, 2023
                              </time>
                              <h3 className="news-card__title">
                                <a href="/en/magazine/elements/2023/a-story-of-determination">A story of determination</a>
                              </h3>
                              <p className="news-card__description">Like many coffee farmers in Jazan, Abu Awwad faced challenges on his journey. Through Aramco’s coffee initiative, he enhanced his farming techniques and increased his production.
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="col-md-12 col-lg-4 news__news-item">
                        <article className="news-card ">
                          <div className="news-card__img">
                            <div className="inline-img__ratio">
                              <picture>
                                <img src={require("../images/spacer.gif")}

                                  data-srcset="/-/media/magazine/2023/ikva/01_hero_img_iktva.jpg?cx=0.5&amp;cy=0.5&amp;cw=486&amp;ch=297&amp;hash=99B7B4999C2591482EE89C25EB29CEB9171F8513" className="lazyload" alt="" />
                              </picture>
                            </div>
                          </div>
                          <div className="news-card__content">
                            <div className="news-card__content-inner">
                              <time dateTime="2023-04-10" className="news-card__date">Abeer Alnemari,  April 10, 2023
                              </time>
                              <h3 className="news-card__title">
                                <a href="/en/magazine/elements/2023/building-resilience-through-localization">Building resilience through localization</a>
                              </h3>
                              <p className="news-card__description">Our in-Kingdom Total Value Add (iktva) program shows the benefits of localized supply chains that support energy security
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="news-filters__spinner" ></div>
                  </div>
                  <div className="col-12 news__action">
                    <a href="/en/magazine/elements" className="cta__secondary news__see-all">SEE ALL</a>
                  </div>
                </div>
              </filter>
            </div>
          </div>
          <hr className="keyline" />
        </div>
        <div className="container sublayout sublayout__content-with-side-module ">
          <div className="row justify-content-md-center">
            <div className="col-lg-8">
              <ul>
                <div className="parentElementClasses">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="news-listing__title"></h2>
                    </div>
                    <div className="sublayoutClasses" >
                      <div className="articleElementClasses( listing )">
                        <div className="news-card__content">
                          <div className="news-card__content-inner">
                            <time dateTime="listing.newsCard.datetime" className="news-card__date">
                            </time>
                            <h3 className="news-card__title">
                              <a href="listing.newsCard.href"></a>
                            </h3>
                            <p className="news-card__description">
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__action">
                      <a href="/en/news-media/news" className="cta__secondary news__see-all">SEE ALL</a>
                    </div>
                    <div className="col-12">
                      <hr className="divider" />
                    </div>
                    <div className="news-listing__feedback-window">
                      <p></p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="key-document-section">
                <div className="key-document__wrapper">
                  <div className="key-document-section_listing">
                    <h3 className="key-document_header">Key documents</h3>
                  </div>
                  <div className="keylist-title">
                    <h4>June 15, 2023</h4>
                  </div>
                  <div className="key-document-list">
                    <div className="key-document-content">
                      <p>
                        <a href="/-/media/downloads/sustainability-report/report-2022/2022-sustainability-report-en.pdf" target="_blank" title="">2022 Sustainability report</a>
                      </p>
                    </div>
                    <div className="key-document-pdf">
                      <span>PDF (11.11 MB)</span>
                      <a href="/-/media/downloads/sustainability-report/report-2022/2022-sustainability-report-en.pdf" target="_blank" title="">
                        <span className="download-icon pdf"></span>
                      </a>
                    </div>
                  </div>
                  <div className="keylist-title">
                    <h4>May 09, 2023</h4>
                  </div>
                  <div className="key-document-list">
                    <div className="key-document-content">
                      <p>
                        <a href="/-/media/publications/corporate-reports/saudi-aramco-q1-2023-interim-report-english.pdf" target="_blank" title="">Q1 2023 interim report</a>
                      </p>
                    </div>
                    <div className="key-document-pdf">
                      <span>PDF (1.14 MB)</span>
                      <a href="/-/media/publications/corporate-reports/saudi-aramco-q1-2023-interim-report-english.pdf" target="_blank" title="">
                        <span className="download-icon pdf"></span>
                      </a>
                    </div>
                  </div>
                  <div className="keylist-title">
                    <h4>March 13, 2023</h4>
                  </div>
                  <div className="key-document-list">
                    <div className="key-document-content">
                      <p>
                        <a href="/-/media/publications/corporate-reports/saudi-aramco-ara-2022-english.pdf" target="_blank" title="">Annual report 2022</a>
                      </p>
                    </div>
                    <div className="key-document-pdf">
                      <span>PDF (9.52 MB)</span>
                      <a href="/-/media/publications/corporate-reports/saudi-aramco-ara-2022-english.pdf" target="_blank" title="">
                        <span className="download-icon pdf"></span>
                      </a>
                    </div>
                  </div>
                  <div className="all-key-list text-uppercase"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container sublayout sublayout__full-grid ">
          <div className="row justify-content-md-center">
            <div className="col-sm-12">
              <div className="key-facts-icons">
                <h4 className="key-facts-icons__heading">ARAMCO AT A GLANCE</h4>
                <div className="key-facts-icons__container ">
                  <div className="key-facts-icons__wrapper ">
                    <div className="key-facts-icons__icon-wrapper">
                      <i className="key-facts-icons__icon icon--antenna" aria-hidden="true"></i>
                    </div>
                    <div className="key-facts-icons__content-wrapper">
                      <div className="key-facts-icons__figure">90 years</div>
                      <p className="key-facts-icons__description">of experience</p>
                    </div>
                    <div className="key-facts-icons__cta-wrapper">
                      <a href="/en/who-we-are/overview">OVERVIEW
                      </a>
                    </div>
                  </div>
                  <div className="key-facts-icons__wrapper ">
                    <div className="key-facts-icons__icon-wrapper">
                      <i className="key-facts-icons__icon icon--barrel" aria-hidden="true"></i>
                    </div>
                    <div className="key-facts-icons__content-wrapper">
                      <div className="key-facts-icons__figure">338.43 billion</div>
                      <p className="key-facts-icons__description">we manage the Kingdom &#39;s proved reserves of 338.43 billion barrels of oil equivalent</p>
                    </div>
                    <div className="key-facts-icons__cta-wrapper">
                      <a href="/en/creating-value/products" >OUR PRODUCTS
                      </a>
                    </div>
                  </div>
                  <div className="key-facts-icons__wrapper ">
                    <div className="key-facts-icons__icon-wrapper">
                      <i className="key-facts-icons__icon icon--workforce" aria-hidden="true"></i>
                    </div>
                    <div className="key-facts-icons__content-wrapper">
                      <div className="key-facts-icons__figure">70,000 +</div>
                      <p className="key-facts-icons__description">total workforce</p>
                    </div>
                    <div className="key-facts-icons__cta-wrapper">
                      <a href="/en/careers" >CAREERS AT ARAMCO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sublayout__full-width sublayout--no-margin">
          <div className="promotional-page-link promotional-page-link--reverse-alignment" data-id="c65e5613eb6e4523a558d4c8f6afadcd">
            <image inline-template unique-id="c17">
              <div className="background-images">
                <span></span>
                <script type="text/html" id="template-c17">
                  <style>
                  </style>
                </script>
              </div>
            </image>
            <div className="container promotional-page-link__wrapper">
              <div className="promotional-page-link__outer-container">
                <div className="promotional-page-link__titles-container">
                  <span className="promotional-page-link__section">Sustainability</span>
                  <h2 className="promotional-page-link__page-title">Minimizing environmental impact</h2>
                  <h3 className="promotional-page-link__sub-title"></h3>
                </div>
              </div>
              <div className="promotional-page-link__copy-container">
                <p className="promotional-page-link__copy">As our business operations expand, so do the initiatives we undertake to ensure we leave an enduring legacy of protecting the planet we all inhabit. </p>
                <div className="promotional-page-link__cta-wrapper">
                  <a href="/en/sustainability/minimizing-environmental-impact" className="cta__primary">FIND OUT MORE
                  </a>
                </div>
                <div className="promotional-page-link__cta-container">
                  <div className="promotional-page-link__cta-wrapper">
                    <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use" className="cta__secondary--negative">PROMOTING BIODIVERSITY
                    </a>
                  </div>
                  <div className="promotional-page-link__cta-wrapper">
                    <a href="/en/sustainability/climate-change" className="cta__secondary--negative">CLIMATE CHALLENGE
                    </a>
                  </div>
                  <div className="promotional-page-link__cta-wrapper">
                    <a href="/en/sustainability/minimizing-environmental-impact/biodiversity-and-land-use/promoting-biodiversity/shaybah-wildlife-sanctuary" className="cta__secondary--negative">SHAYBAH WILDLIFE SANCTUARY
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <div className="footer-container">
        <div className="container">
          <footer className="footer js-footer" >
            <div className="row">
              <div className="footer__block col-md-3">
                <div inline-template>
                  <div className="footer__block-item">
                    <h4 className="footer__block-header">Site information
                    </h4>
                    <div className="footer__links-container">
                      <ul className="footer__links">
                        <li>
                          <a href="/en/cookie-notices">COOKIE NOTICES</a>
                        </li>
                        <li>
                          <a href="/en/privacy-statement">PRIVACY STATEMENT</a>
                        </li>
                        <li>
                          <a href="/en/terms-and-conditions">TERMS AND CONDITIONS</a>
                        </li>
                        <li>
                          <a href="/en/scam-and-fraud">SCAM AND FRAUD ALERT</a>
                        </li>
                        <li className="footer__link-divider">
                          <a href="/en/sitemap">SITEMAP</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer__block col-md-3">
                <div inline-template>
                  <div className="footer__block-item">
                    <h4 className="footer__block-header">News &amp;Media
                    </h4>
                    <div className="footer__links-container" >
                      <ul className="footer__links">
                        <li>
                          <a href="/en/news-media/news-archive">SEARCH ALL NEWS</a>
                        </li>
                        <li>
                          <a href="/en/news-media/news">LATEST NEWS</a>
                        </li>
                        <li>
                          <a href="/en/news-media/publications">PUBLICATIONS</a>
                        </li>
                        <li>
                          <a href="/en/news-media/speeches">SPEECHES</a>
                        </li>
                        <li>
                          <a href="/en/news-media/media-gallery">MEDIA GALLERY</a>
                        </li>
                        <li className="footer__link-divider">
                          <a href="/en/news-media/mediaresources">CONTACTS AND RESOURCES</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer__block col-md-3">
                <div inline-template>
                  <div className="footer__block-item">
                    <h4 className="footer__block-header" >Other websites
                    </h4>
                    <div className="footer__links-container">
                      <ul className="footer__links">
                        <li>
                          <a href="https://waed.net/en/" target="_blank" rel="noopener">WA’ED VENTURES</a>
                        </li>
                        <li>
                          <a href="https://aramcotrading.com" target="_blank" rel="noopener">ARAMCO TRADING COMPANY</a>
                        </li>
                        <li>
                          <a href="https://www.ithra.com/en/" target="_blank" rel="noopener">KING ABDULAZIZ CENTER FOR WORLD CULTURE (ITHRA)</a>
                        </li>
                        <li>
                          <a href="https://www.iktva.sa" target="_blank" rel="noopener">IKTVA</a>
                        </li>
                        <li>
                          <a href="https://aramcoventures.com/" target="_blank" rel="noopener">ARAMCO VENTURES</a>
                        </li>
                        <li>
                          <a href="https://citizenship.aramco.com/en/rsi" target="_blank" rel="noopener">CITIZENSHIP</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer__block col-md-3">
                <h4 className="footer__block-header footer__block-header--social">Social media
                </h4>
                <ul className="footer__links-social">
                  <li>
                    <a className="footer__link-social footer__link-social--twitter" href="https://twitter.com/Aramco" target="_blank" rel="noopener" title="twitter">
                      <span>twitter</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer__link-social footer__link-social--linkedin" href="https://www.linkedin.com/company/aramco" target="_blank" rel="noopener" title="linkedin">
                      <span>linkedin</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer__link-social footer__link-social--youtube" href="https://www.youtube.com/c/aramco" target="_blank" rel="noopener" title="youtube">
                      <span>youtube</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer__link-social footer__link-social--instagram" href="https://instagram.com/aramco" target="_blank" rel="noopener" title="instagram">
                      <span>instagram</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer__link-social footer__link-social--facebook" href="https://www.facebook.com/aramco/" target="_blank" rel="noopener" title="facebook">
                      <span>facebook</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row footer-container__copyright-notice">
              <p>&#169;2023 Saudi Arabian Oil Co.</p>
              <div className="footer-container__anniversary">
                <svg id="uuid-854f63e2-25fd-4153-a2b8-1548872d53b4" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103.67 101.53">
                  <g fill="white">
                    <path d="m52.21,2.09l.19,3.58-1.31.07-.18-3.47c-.04-.78-.65-1-1.18-.97-.24.01-.53.08-.8.19.05.19.09.42.1.77l.19,3.58-1.31.07-.18-3.47c-.04-.79-.51-1-1.15-.97-.3.02-.67.09-.96.2l.23,4.34-1.31.07-.29-5.44c.86-.26,1.59-.43,2.44-.47.6-.03,1.03.04,1.48.29.51-.28,1.13-.43,1.76-.46.86-.04,1.37.15,1.75.55.35.37.49.8.53,1.54Z" fill="#FFFFFF" />
                    <path d="m40.09,1.13c-1.76.36-2.58,1.6-2.21,3.42h0c.38,1.82,1.62,2.62,3.35,2.26l2.77-.57-.59-2.86c-.38-1.83-1.59-2.61-3.33-2.25Zm2.03,2.52l.33,1.57h0l-1.48.3c-.91.19-1.57-.24-1.77-1.24-.21-1.02.23-1.66,1.16-1.86.93-.19,1.55.2,1.76,1.22Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m33.84,5.91c-.59-1.81.16-3.15,1.88-3.7.24-.08.5-.14.86-.19l.11,1.32c-.25.05-.56.12-.72.17-.94.3-1.15,1.13-.86,2.01l.87,2.69-1.25.4-.88-2.71h0Z" fill="#FFFFFF" />
                    <path d="m29.2,4.64c-1.64.73-2.18,2.11-1.41,3.81h0c.76,1.7,2.14,2.21,3.76,1.49l2.59-1.15-1.2-2.66c-.77-1.7-2.12-2.21-3.74-1.49Zm3.18,3.49l-.66-1.46c-.43-.95-1.11-1.21-1.98-.82-.87.39-1.16,1.11-.73,2.06.42.93,1.15,1.21,2,.83l1.38-.61Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m21.5,7.47c-.27-.42-.16-.87.25-1.13.41-.26.86-.15,1.12.27.27.42.17.88-.24,1.13-.41.26-.87.15-1.14-.28Z" fill="#FFFFFF" />
                    <path d="m22.34,8.51l1.11-.7,3,4.78-1.11.7-3-4.78Z" fill="#FFFFFF" />
                    <path d="m24.57,13.71l-5.06-6.66h0s0,0,0,0c-.45.38-.99.83-.84,1.08l1.53,2.01c-.43.06-.89.26-1.36.61-1.41,1.06-1.57,2.47-.44,3.95,1.15,1.51,2.53,1.75,3.93.7l2.25-1.7Zm-1.86-.24l-1.19.9c-.72.54-1.39.42-2.06-.46-.63-.83-.57-1.53.18-2.09.86-.65,1.61-.28,2.24.55l.84,1.11Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m45.25,41.18l-4.09-9.76c-2.77-6.59-1.46-13.86,2.78-19.04-2.74.51-5.46,1.3-8.13,2.41-12.42,5.17-20.84,15.85-23.6,28.01,2.26-2.65,5.42-4.86,9.45-6.54,9.75-4.06,18.03-2.38,23.6,4.92Z" fill="#FFFFFF" />
                    <path d="m38.62,51.71c-2.55-6.09-7.39-7.95-13.33-5.48-6.01,2.5-8.14,7.38-5.59,13.48,2.54,6.06,7.48,7.96,13.42,5.49l9.5-3.96-4-9.53h0Z" fill="#FFFFFF" />
                    <path d="m80.78,63.46l-4.95,2.06c-8.56,3.56-18.26.34-23.08-7.21.19,1.43.24,2.87.12,4.32l-1.93,23.98c.09,1.74-.38,3.41-1.27,4.82,5.65.23,11.44-.74,17-3.05,15.09-6.28,24.27-20.69,24.59-35.99-1.7,4.83-5.37,8.95-10.48,11.08h0Z" fill="#FFFFFF" />
                    <path d="m18.19,74.1c5.24,3.58,11.93,3.88,19.4.77h0s3.76-1.56,3.76-1.56l-1.5,16.5c-8.66-2.56-16.39-8-21.67-15.71Z" fill="#FFFFFF" />
                    <path d="m56.84,16.1l1.96-.82h0c4.99-2.07,10.73.27,12.81,5.24l8.81,21c2.08,4.97-.27,10.68-5.26,12.76l-1.96.81c-4.99,2.07-10.72-.27-12.81-5.24l-8.81-21c-2.09-4.97.27-10.68,5.26-12.76Zm9.27,24.57l-.46-1.1-.27.11c-.83.31-1.43,0-1.84-.98l-1.61-3.84.96-.4-.46-1.08-.96.4-.69-1.63-.05.03c-.48.24-1.05.51-.98.76l.56,1.33-.64.26.46,1.08.64-.26,1.62,3.87c.75,1.77,1.78,2.26,3.51,1.54l.22-.09Zm6.51-2.71l1.16-.48h0s-2-4.77-2-4.77c-.84-1.99-2.19-2.54-4.24-1.7-.68.28-1.36.68-2.04,1.22l-1.56-3.73-.06.03c-.48.23-1.04.51-.97.76l4.54,10.81,1.16-.48-2.61-6.22c.55-.51,1.23-.93,1.81-1.17,1.31-.54,2.29-.29,2.89,1.12l1.93,4.61Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m9.54,29.39l-1.14-.72s.09-.05.13-.08c.39-.24.84-.51,1.31-1.25.42-.67.53-1.18.17-1.4-.26-.16-.53.11-.91.49-.14.14-.29.3-.47.45-.52.46-1.32,1.02-2.16.49-.95-.59-1.07-1.65-.31-2.86.27-.42.76-.87,1.32-1.22l.89.92c-.37.12-.78.5-1.11,1.02-.3.47-.29.88-.08,1.01.3.19.78-.29,1.19-.71.08-.08.16-.16.23-.23.6-.57,1.24-1.05,2.11-.51,1,.62,1,2,.22,3.24-.43.68-.9,1.04-1.4,1.34h0Z" fill="#FFFFFF" />
                    <path d="m9.69,19.62c-1.13,1.39-.98,2.87.48,4.04,1.45,1.16,2.92,1,4.03-.38l1.78-2.2-2.28-1.83c-1.46-1.17-2.89-1.01-4,.37Zm4.43,1.67l-1.25-1.01c-.81-.65-1.54-.57-2.14.17-.6.74-.53,1.52.29,2.17.8.64,1.58.56,2.16-.17l.94-1.17Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m14.84,19.28l-2.5-2.57.95-.92,2.43,2.5c.42.43.99.39,1.51-.11.52-.5.57-1.05.15-1.49l-2.43-2.5.95-.92,2.5,2.57c.96.98.86,2.2-.25,3.28-1.13,1.09-2.36,1.15-3.31.16h0Z" fill="#FFFFFF" />
                    <path d="m56.22.28c-1.83-.16-3.01.85-3.18,2.75h0c-.16,1.86.81,2.96,2.58,3.12.85.07,1.54-.12,2-.51l-.64-1.04c-.35.19-.67.29-1.09.25-.96-.08-1.47-.73-1.38-1.76.09-1.04.71-1.58,1.67-1.5.46.04.82.21,1.07.46l.72-1.05c-.44-.4-.95-.66-1.75-.73Z" fill="#FFFFFF" />
                    <path d="m58.44,3.42c.36-1.73,1.75-2.64,3.45-2.29,1.7.35,2.59,1.73,2.23,3.47-.36,1.74-1.74,2.67-3.44,2.32-1.71-.35-2.6-1.76-2.24-3.5Zm4.37.9c.2-.96-.28-1.72-1.19-1.91-.92-.19-1.67.32-1.87,1.27-.2.98.27,1.75,1.2,1.94.91.19,1.66-.33,1.86-1.31Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m70.75,3.82c-1.63-.65-2.92-.07-3.63,1.7-.69,1.72-.16,3.01,1.46,3.65l2.52,1.01,1.07-2.66c.71-1.77.2-3.06-1.41-3.71Zm.61,3.39l-.75,1.86h0l-1.72-.69c-1.11-.44-1.47-1.32-.98-2.54.51-1.27,1.4-1.68,2.52-1.23,1.11.45,1.44,1.33.93,2.6Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m74.29,5.81c.8.11,1.69.42,2.35.78,1.32.72,1.58,1.68.86,2.99l-1.73,3.14-.75-.41,1.67-3.03c.51-.93.26-1.59-.58-2.07-.36-.2-.89-.38-1.39-.44l-2.28,4.14-.75-.41,2.58-4.69h0Z" fill="#FFFFFF" />
                    <path d="m81.72,9.76c-.62-.43-1.48-.84-2.25-1.04h0s-3.1,4.37-3.1,4.37l.69.49,2.73-3.86c.49.12.99.36,1.33.59.77.57.95,1.26.34,2.13l-2,2.83.69.49,2.07-2.92c.87-1.22.72-2.2-.51-3.07Z" fill="#FFFFFF" />
                    <path d="m84.45,12.04l.65.54-3.61,4.33-.65-.54,3.61-4.33Z" fill="#FFFFFF" />
                    <path d="m85.22,10.93c.21-.26.52-.28.77-.07.25.21.29.5.07.76-.22.27-.53.31-.79.1-.25-.21-.28-.53-.06-.79Z" fill="#FFFFFF" />
                    <path d="m84.21,19.39l5.5-2.54-.69-.67-4.27,2,1.88-4.31-.7-.68-2.4,5.54.69.66Z" fill="#FFFFFF" />
                    <path d="m91.32,23.73l-2.9-3.57c-.81.79-.86,1.73-.16,2.6.58.71,1.34,1.02,2.06.83v.84c-.98.21-2-.23-2.75-1.17-1.09-1.34-.89-2.82.54-3.97,1.46-1.18,2.97-1.08,4.06.26,1.2,1.48.75,3.09-.86,4.17Zm-2.33-4.01l2.36,2.9c.77-.79.84-1.71.17-2.53-.68-.83-1.59-.95-2.53-.37h0Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m96.12,25.1c-1.04-1.61-2.5-1.81-4.05-.82h0l-2.4,1.54.46.71,2.46-1.57c1-.64,2.06-.55,2.73.48.11.18.27.45.39.7l.81-.28c-.12-.29-.23-.53-.38-.76Z" fill="#FFFFFF" />
                    <path d="m92.2,28.93l.82-.41c-.08.66-.03,1.24.34,1.96.45.87,1.01,1.25,1.56.98.51-.26.32-.96.16-1.54-.04-.13-.07-.26-.1-.37,0-.04-.02-.08-.03-.12h0c-.13-.56-.38-1.56.6-2.06,1.03-.53,1.87-.06,2.48,1.12.23.44.36.97.39,1.63l-.83.13c.05-.43-.11-.95-.35-1.4-.35-.69-.77-.98-1.3-.72-.53.27-.3,1.03-.14,1.57.03.08.05.16.07.24.17.64.46,1.75-.56,2.27-1,.51-2.06-.06-2.73-1.35-.33-.64-.46-1.26-.39-1.94h0Z" fill="#FFFFFF" />
                    <path d="m100.41,33.91c-.61-1.64-1.92-2.2-3.71-1.53h0c-1.75.65-2.34,1.91-1.73,3.54l.95,2.53,2.69-1c1.8-.67,2.41-1.91,1.81-3.54Zm-2.1,2.74l-1.89.7h0s-.65-1.73-.65-1.73c-.42-1.12,0-1.97,1.23-2.43,1.29-.48,2.18-.1,2.61,1.03.42,1.12-.01,1.96-1.3,2.43Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m98.83,38.44c1.79-.45,3.11.22,3.57,2.07.07.26.1.53.12.84h-.85c-.04-.27-.09-.58-.14-.79-.3-1.19-1.28-1.61-2.43-1.32l-2.83.71-.21-.82,2.77-.69Z" fill="#FFFFFF" />
                    <path d="m94.95,44.48c.06.4.11.83.38.86h0s8.03,1.83,8.03,1.83l-.14-.94-4.63-1.01,4.17-2.26-.14-.96-5.3,2.94-2.38-.53v.08Z" fill="#FFFFFF" />
                    <path d="m98.63,54.97l-.85-.02.1-3.89.66.02c.22.28.41.54.6.79,1.11,1.47,1.69,2.25,2.54,2.27.66.02,1.11-.45,1.13-1.17.02-.61-.29-1.11-.75-1.37l.4-.59c.73.31,1.23,1.04,1.21,2.01-.03,1.17-.81,1.99-1.94,1.96-1.15-.03-1.86-.9-2.95-2.24l-.09-.11-.06,2.35Z" fill="#FFFFFF" />
                    <path d="m103.2,58.76c.21-1.55-.82-2.73-2.59-2.98-1.76-.24-3.08.63-3.29,2.18-.21,1.55.82,2.75,2.58,2.98,1.77.24,3.09-.64,3.3-2.19Zm-.85-.11c-.15,1.05-1.07,1.62-2.33,1.45-1.25-.17-1.99-.97-1.84-2.02.14-1.04,1.06-1.62,2.32-1.45,1.26.17,2,.98,1.86,2.01Z" fill="#FFFFFF" fill-rule="evenodd" />
                    <path d="m96.79,65.1l.58-2.28.07.13c.76,1.55,1.26,2.55,2.37,2.83,1.1.28,2.04-.35,2.33-1.49.23-.93-.08-1.75-.73-2.22l-.53.49c.39.36.58.91.43,1.5-.18.7-.72,1.05-1.36.89-.82-.21-1.22-1.09-1.97-2.77-.13-.28-.26-.58-.41-.9l-.64-.16-.95,3.77.82.2Z" fill="#FFFFFF" />
                    <path d="m93.66,66.54c-.53,1.43.23,2.89,1.65,3.41h0c1.04.38,2.03.11,2.73-.57l1.73,1.7,1.27-3.43-.81-.3-.83,2.25-1.49-1.48c-.57.87-1.33,1.38-2.34,1.01-1.01-.37-1.46-1.29-1.09-2.3.21-.57.56-.87,1.02-1.06l-.4-.73c-.64.28-1.15.77-1.42,1.5Z" fill="#FFFFFF" />
                    <path d="m6.36,31.17c-2.64,5.98-4.11,12.59-4.11,19.55,0,26.82,21.83,48.56,48.76,48.56,18.97,0,35.4-10.78,43.47-26.53l2,1.03c-8.44,16.47-25.63,27.75-45.47,27.75C22.85,101.53,0,78.79,0,50.72c0-7.28,1.54-14.2,4.31-20.46l2.06.91Z" fill="#FFFFFF" fill-rule="evenodd" opacity=".25" />
                  </g>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <script src="../scripts/main.js"></script>
      <script>
      </script>
    </div >
  );
};
