import React from 'react'
import Container from './container'
import Tags from './tags'
import * as styles from './text-image-container.module.css'
import { useStaticQuery, graphql } from 'gatsby'

const TextImageContainer = () => {
    const data = useStaticQuery(graphql`
    query {
        contentfulHeroIntroduction {
            heroIntroText
        }
    }
  `)
  console.log(data)
  return (
      
        <div className={`flex-wrap ${styles.homeIntroWrap}`}>
            <div className={`width-50 ${styles.textWrap}`}>
                <h1 className={`main-heading ${styles.redColor}`}>
                    <span>{data.contentfulHeroIntroduction.heroIntroText}</span>
                    <span>A conduit for community.</span>
                </h1>
            </div>
            <div className="img-wrap width-50" style={{background: 'url(//images.ctfassets.net/kr0lryq1nk1b/2KQBAcgmMYr5UabtbVWlcJ/347f9145c3d81bec21c80f23485a632c/view-04-north-aerial-1.jpg) center/cover no-repeat'}} aria-label="Home intro bg" />
        </div>
      
  )
}

export default TextImageContainer


