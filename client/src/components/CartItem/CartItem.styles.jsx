import styled, { css } from 'styled-components'

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 8rem;
  margin-bottom: 1.5rem;
`

export const CartItemImageContainer = styled.img`
  width: 30%;
`
export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`
const spanContentsStyles = css`
  font-size: 1.6rem;
`
export const NameContainer = styled.span`
  ${spanContentsStyles}
`
export const PriceContainer = styled.span`
  ${spanContentsStyles}
`
