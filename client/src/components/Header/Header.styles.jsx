import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const optionContainerStyles = css`
  padding: 1rem 1.5rem;
  cursor: pointer;
`

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  font-size: 1.6rem;
  
  @media screen and (max-width: 800px) {
    height: 6rem;
    padding: 1rem;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;

  @media screen and (max-width: 800px) {
    width: 5rem;
    padding: 0;
  }
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`
export const OptionLink = styled(Link)`
  ${optionContainerStyles}
`
