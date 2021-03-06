import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import './bio.scss'
import pic11 from '../assets/images/bio-featured.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Shenendoah Thompson | Bio</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>TRUE STORY</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            My father had a dream that he found a baby with long fingers. When
            he woke he prophetically proclaimed his unborn son was destined to
            be a musician. So naturally when I first hit the stage at age 5, it
            set the unusual precedent for the expansive career to come.
          </p>
          <p>
            A difficult adolescence found me seeking ways to deal with the
            often-unbearable day to day struggles. I found sanctuary in a
            community musical theatre company, where my love for all things
            music and performing was nurtured and grown into a brilliantly
            burning passion. For 10 years I starred in numerous musical theatre
            productions and studied every aspect of performance from acting to
            stage combat choreography to directing, building a resume of
            hundreds of credits.
          </p>
          <p>
            At the same time, I was experimenting with songwriting and home
            recording, and began to pour feelings of love and loss into my
            lyrics. In 2010, my freshman album Under the Radar featured a
            collection of songs about memories of love, solemn regrets &
            unrequited longing for something a little beyond ordinary.
          </p>
          <p>
            Now a proud father, my most recent project is a way to wear his
            heart forever on his sleeve. Heavy rock ballads blend together with
            vividly poetic descriptions to confess some of those thoughts we
            sometimes struggle to find the words for.
          </p>
          <p>
            Quoted as having the longest list of musical inspirations a reporter
            had heard of, I always strive to find new sounds to express the
            ever-evolving emotions of a love-sick Rockstar.
          </p>
          <p>@ShenendoahT</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
