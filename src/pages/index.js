import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello!</h1>
    <p>Welcome and thanks for checking out my website.</p>
    <p>I'm Danning, currently working as an android/frontend developer at Kivra in Sweden.</p>
    <p>Here are some of the things I'm passionate about:</p>
    <ul>
    <li>Kotlin</li>
    <li>Hackathons</li>
    <li>Game development</li>
    <li>Art and design</li>
    </ul>
    <button>
    <Link
    to="/page-2/"
    style={{
      color: '#442c2e',
      textDecoration: 'none',
    }}>More</Link>
    </button>
  </div>
)

export default IndexPage
