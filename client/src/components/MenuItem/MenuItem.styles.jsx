import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: ${({size}) => (size ? `38rem` : `24rem`)};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 0.75rem 1.5rem;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    height: 20rem;
  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-left: 0.75rem;
  }

  &:last-child {
    margin-left: 0.75rem;
  }
`
export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`
export const ContentContainer = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`
export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 0.6rem;
  font-size: 2.2rem;
  color: #4a4a4a;
`
export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 1.6rem;
`
