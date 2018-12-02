import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Shenendoah Thompson | Projects</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Albums</h2>
          </header>
          <p>
            Shenendoah Thompson has released several albums. Check them out
            below.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/bio" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Album One</h3>
              </header>
              <p>
                In his debut album, Shenendoah Thompson explores an Eastern
                alley, following two women using umbrellas.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/bio" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/bio" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Album Two</h3>
              </header>
              <p>
                In his 2nd album, Shenendoah Thompson takes you on an island
                adventure. All these songs are coastal something-or-anothers.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/bio" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/bio" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Album Three</h3>
              </header>
              <p>
                If you've been following along, you can probably guess what's
                coming next: Shenendoah Thompson rocks (literally) an
                all-acoustic album that reminds you of water. Rock and
                tranquility don't go together? Who says!
              </p>
              <ul className="actions">
                <li>
                  <Link to="/bio" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
