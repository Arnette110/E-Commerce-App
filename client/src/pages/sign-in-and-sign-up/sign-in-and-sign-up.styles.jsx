import styled from 'styled-components'

export const SignInAndSignUpContainer = styled.div`
  width: 85rem;
  display: flex;
  justify-content: space-between;
  margin: 3rem auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;

    > *:first-child{
      margin-bottom: 5rem;
    }
  }
`
