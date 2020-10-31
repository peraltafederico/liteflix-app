import styled from 'styled-components'
import MovieSpinner from '../../../commons/UI/MovieSpinner/MovieSpinner'
import AddMovieButton from '../AddMovieButton/AddMovieButton'

export const InputContainer = styled.div`
  flex: 1;
`

export const InputsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

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
