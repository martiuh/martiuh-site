import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

import './index.scss'

const IndexPage = () => (
  <Layout>
    <main className='content'>
      <h2>Who am I?</h2>
      <p>I'm a self-taught frontend developer, I started coding back in 2014 when 
        I decided that I didn't want to work as a criminologist (the mayor that I just
        had finished back then) and instead make a carreer or a living doing things
        with computers and such.
      </p>
    </main>
  </Layout>
)

export default IndexPage
