import styled from 'styled-components'

import CustomButton from '../CustomButton/CustomButton.component'

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;
  /* margin-bottom: 3rem; */

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 800px) {
    margin-top: 0.5rem;
    &:hover {
      opacity: unset;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`
export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 25.5rem;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    width: 100%;
    min-width: unset;
    padding: 0 1rem;
  }
`
export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;

  @media screen and (max-width: 800px) {
    width: 100%;
    min-width: unset;
    padding: 1rem 1rem 2rem 1rem;
    margin-bottom: 1rem;
  }
`
export const NameContainer = styled.span`
  width: 75%;
  margin-bottom: 1.5rem;
`
export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`
