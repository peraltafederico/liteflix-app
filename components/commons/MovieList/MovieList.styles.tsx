import styled from 'styled-components'
import Card from '../MovieCard/MovieCard'
import { desktop, tablet } from '../../../utils/breakpoints'

export const MovieCard = styled(Card)`
  margin-bottom: 10px;

  ${tablet} {
    width: 255px;
    margin-bottom: 0px;
  }

  ${desktop} {
  }
`

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${tablet} {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 255px));
    justify-content: start;
  }

  ${desktop} {
    grid-gap: 45px 30px;
  }
`
