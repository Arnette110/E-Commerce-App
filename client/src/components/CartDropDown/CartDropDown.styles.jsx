import styled from 'styled-components'

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 24rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 8rem;
  right: 4rem;
  z-index: 5;

  button {
    margin-top: auto;
  }
`

export const EmptyMessageContainer = styled.span`
  font-size: 1.8rem;
  margin: 5rem auto;
`

export const CartItemsContainer = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`
