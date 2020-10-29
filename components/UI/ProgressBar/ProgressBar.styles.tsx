import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  background-color: #dedede;
  position: relative;
`

export const Progress = styled.div<{ progress: number; error: boolean }>`
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => (props.error ? '#ff0000' : '#7ed321')};
  width: ${(props) => `${props.error ? `100%` : `${props.progress}%`} `};
  transition: ${(props) =>
    props.error || props.progress === 0
      ? 'none'
      : 'width 0.5s cubic-bezier(1, 0, 0, 1)'};
`
