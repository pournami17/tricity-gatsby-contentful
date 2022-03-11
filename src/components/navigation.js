import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './navigation.module.css'

const Navigation = () => (
  <header>
    <div className={styles.headerWrapper}>
      <div className={styles.headerLeft}>
        <div className={styles.logoWrap}>
          <Link to="/">
            <StaticImage
              className="home-logo"
              alt="site logo"
              src="../images/logo.svg"
            />
          </Link>
        </div>
      </div>
      <nav role="navigation" aria-label="Main" className={styles.headerRight}>
        <ul>
          <li>
            <Link to="/area" activeClassName="active">Area</Link>
          </li>
          <li>
            <Link to="/offerings" activeClassName="active">Offerings</Link>
          </li>
          <li>
            <Link to="/plans" activeClassName="active">Plans</Link>
          </li>
          <li>
            <Link to="/details" activeClassName="active">Details</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Navigation
