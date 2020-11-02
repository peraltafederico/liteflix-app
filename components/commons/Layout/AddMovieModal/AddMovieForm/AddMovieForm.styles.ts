import styled from 'styled-components'
import { landscape, tablet } from '../../../../../utils/breakpoints'
import MovieSpinner from '../../../UI/MovieSpinner/MovieSpinner'
import AddMovieButton from '../AddMovieButton/AddMovieButton'

export const InputContainer = styled.div`
  flex: 1;
`

export const InputsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  ${landscape} {
    margin-top: 25px;
  }

  & ${InputContainer}:nth-child(1) {
    margin-right: 15px;
  }

  & ${InputContainer}:nth-child(2) {
    margin-left: 15px;
  }
`

export const Footer = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`

export const Button = styled(AddMovieButton)`
  width: 350px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const MovieLoading = styled(MovieSpinner)`
  width: 35px;
`

export const MovieLoadingContainer = styled.div`
  justify-content: center;
  display: flex;
`

export const ErrorText = styled.span`
  color: #ff0000;
  font-weight: bold;
  position: absolute;
  font-size: 11px;
  bottom: 3px;

  ${tablet} {
    bottom: 17px;
  }

  ${landscape} {
    bottom: 8px;
  }
`
