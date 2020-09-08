import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  height: 18rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;
  
  @media screen and (max-width: 800px){
    font-size: 1.8rem
  }
`
export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;
`
export const CheckoutItemImage = styled.img`
  width: 12rem;
  height: 15rem;
  /* @media screen and (max-width: 500px) {
    width: 200%;
    height: 200%;
  } */
`
export const TextContainer = styled.span`
  width: 23%;
  @media screen and (max-width: 800px){
    width: 22%;
  }
`

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 1rem;
  }
  div {
    cursor: pointer;
  }
  /* @media screen and (max-width: 500px) {
    padding-left: 0;
  } */
`

export const RemoveButtonContainer = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`
