import React from 'react'
import { withRouter } from 'react-router-dom'
// import './MenuItem.styles.scss'
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './MenuItem.styles'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>shop now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)