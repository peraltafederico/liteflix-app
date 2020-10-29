import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
`

export const ProgressBarText = styled.span`
  position: absolute;
  top: 15px;
  font-family: Montserrat;
  font-size: 12px;
  color: #000000;
`

export const ProgressBarButtonContainer = styled.div`
  width: 100%;
  position: absolute;
  text-align: center;
  bottom: 15px;
`

export const ProgressBarButton = styled.button`
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: normal;
  color: #4a4a4a;
  background: transparent;
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
`
