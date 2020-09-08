import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CollectionPageTitle = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
`
export const CollectionPageItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;

  & > div {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  }
`
