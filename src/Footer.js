import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
      <div className="footer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#E79CFA" }} />
          <a target="_blank" href="https://www.instagram.com/shiv_chhapola/">/@shiv_chhapola</a>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />
          <a target="_blank" href="https://www.twitter.com/shiv_chhapola/">/@shiv_chhapola</a>
      </div>
  )
}
