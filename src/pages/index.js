import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Image from '../components/image'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <Helmet title='Tonatiuh González' />
    <main className='content'>
      <section>
        <h2>Who am I?</h2>
        <p>I'm a self-taught frontend developer who started coding back in 2014 when
          I decided that I didn't want to work as a criminologist (the mayor that I just
            had finished back then) and instead want to make a carreer or a living doing things
            with computers.
          </p>
      </section>
      <section>
        <h2>Projects</h2>
        <p>
          <Link to='/projects'>
            Checkout all my projects
          </Link>
        </p>
      </section>
      <section>
        <h2>Skill set</h2>
        <ul>
          <li>
            <p>
              <strong>Creativity: </strong>
              Firstly I see mysefl as a creative person, I enjoy thinking in new ways to do stuff or achieve a goal.
            </p>
          </li>
          <li>
            <p>
              <strong>Persistence: </strong>
              When I want something I do what I must to achive it, I may be slow sometimes but I'm always focused on what I must do.
            </p>
          </li>
          <li>
            <p>
              <strong>Loyalty: </strong>
              I declare myself as a loyal man, when I'm with a cause I take it as my own and work towards its success or completition.
            </p>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
)

export default IndexPage
