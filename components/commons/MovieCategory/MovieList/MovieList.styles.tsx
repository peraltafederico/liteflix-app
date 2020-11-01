import styled, { css } from 'styled-components'
import Card from '../../MovieCard/MovieCard'
import { desktop, tablet } from '../../../../utils/breakpoints'

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${tablet} {
    padding: 0;
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 255px));
    justify-content: flex-start;
  }

  ${desktop} {
    grid-gap: 45px 30px;
  }
`

export const MovieCard = styled(Card)<{ size: string }>`
  ${({ size }) => {
    if (size === 'large') {
      return css`
        &:nth-child(even) {
          margin-left: 2px;
          margin-bottom: 4px;
        }

        &:nth-child(odd) {
          margin-right: 2px;
          margin-bottom: 4px;
        }
      `
    }

    return css`
      margin-bottom: 5px;
    `
  }}
`
