import styled from 'styled-components'
import Card from '../../../components/UI/MovieCard/MovieCard'
import { tablet } from '../../../utils/breakpoints'

export const MovieCard = styled(Card)`
  margin-bottom: 10px;
  margin-right: 2px;

  ${tablet} {
    margin-right: 23px;
    margin-bottom: 0;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  max-width: 1112px;
  margin: 0 auto;
  margin-top: 25px;

  ${tablet} {
    padding: 0 30px;
    margin-top: 50px;
  }
`

export const Title = styled.h2`
  margin: 0 0 5px 0;
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${tablet} {
    flex-wrap: nowrap;
  }
`
