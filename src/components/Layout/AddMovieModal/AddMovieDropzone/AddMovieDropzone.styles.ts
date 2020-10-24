import styled from 'styled-components'
import { tablet } from '../../../../utils/breakpoints'

export const Dropzone = styled.div`
  background-color: white;
  max-width: 660px;
  height: 100px;
  border-radius: 10px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%239B9B9BFF' stroke-width='3' stroke-dasharray='8%2c8' stroke-dashoffset='8' stroke-linecap='round'/%3e%3c/svg%3e");
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DropzoneText = styled.span`
  font-size: 16px;
  color: #9b9b9b;
  font-weight: bold;

  & b {
    font-size: 14px;
    color: #0076ff;
  }

  ${tablet} {
    & b {
      font-size: 16px;
    }
  }
`

export const ClipIcon = styled.img`
  margin-right: 5px;
  width: 18px;
  height: 18px;
  position: relative;
  top: 1px;

  ${tablet} {
    width: 20px;
    height: 20px;
  }
`
