import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h2>Hackathons</h2>
    <p>- 2018 -</p>
    <ul>
    <li>LiveHacks</li>
    <li>Hack4Sweden</li>
    <li>King GameJam</li>
    </ul>
    <button>
    <Link to="/"
    style={{
      color: '#442c2e',
      textDecoration: 'none',
    }}
    >Back</Link>
    </button>
  </div>
)

export default SecondPage
