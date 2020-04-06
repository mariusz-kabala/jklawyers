import { Navigation } from 'components/navigation'
import React from "react"
import { LanguagesBar } from 'components/languagesBar'
import { MobileNavigation } from 'components/mobileNavigation'

const Header = () => (
  <header>
    <Navigation />
    <MobileNavigation />
    <LanguagesBar />
  </header>
)

Header.propTypes = {}

export default Header
