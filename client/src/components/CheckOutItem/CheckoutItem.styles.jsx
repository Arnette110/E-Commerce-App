import styled, { css } from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 150%;
    display: flex;
    flex-direction: column;
  }
`
export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;
`
export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 500px) {
    width: 200%;
    height: 200%;
  }
`
const nameQtyPriceStyles = css`
  width: 23%;
  @media screen and (max-width: 500px) {
    width: 50%;
    display: flex;
  }
`
export const NameContainer = styled.span`
  ${nameQtyPriceStyles}
`
export const QuantityContainer = styled.span`
  ${nameQtyPriceStyles}
  padding-left: 20px;
  display: flex;
  @media screen and (max-width: 500px) {
    padding-left: 0;
  }
`
export const PriceContainer = styled.span`
  ${nameQtyPriceStyles}
`
export const ArrowContainer = styled.div`
  cursor: pointer;
`
export const ValueContainer = styled.span`
  margin: 0 1rem;
`
export const RemoveButtonContainer = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`
