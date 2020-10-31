import styled from 'styled-components'
import { tablet } from '../../../../utils/breakpoints'
import AddMovieButton from '../AddMovieButton/AddMovieButton'

export const Logo = styled.img`
  align-self: flex-start;
`

export const Feedback = styled.div``

export const Title = styled.h2`
  font-family: Montserrat;
  margin: 0;
  font-size: 28px;

  ${tablet} {
    font-size: 32px;
  }
`

export const Text = styled.p`
  font-family: Montserrat;
  font-size: 22px;
  font-weight: 500;
  margin: 0;
  max-width: 540px;

  ${tablet} {
    font-size: 24px;
  }
`

export const Button = styled(AddMovieButton)`
  width: 192px;
`
