import React from 'react'
import { useSelector } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

// import './Directory.styles.scss'
import { DirectoryMenuContainer } from './Directory.styles'
import MenuItem from '../MenuItem/MenuItem.component'



const Directory = () => {
  
  const sections = useSelector(selectDirectorySections)

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default Directory
