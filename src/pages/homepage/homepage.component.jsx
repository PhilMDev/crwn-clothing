import React from 'react'
import { Link } from 'react-router-dom'

import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

const HomePage = () => (
  <div className="homepage">
    <Link to="/hats">Hats</Link>
    <Directory className="directory-menu" />
  </div>
)

export default HomePage
