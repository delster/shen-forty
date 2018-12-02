import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>
          Hi, my name is <br />
          Shenendoah Thompson
        </h1>
      </header>
      <div className="content">
        <p>
          I'm a singer / songwriter from Morgantown, WV
          <br />
          and I dabble in acting as well.
        </p>
        <ul className="actions">
          <li>
            <AnchorLink href="#one" className="button">
              Come Along
            </AnchorLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
