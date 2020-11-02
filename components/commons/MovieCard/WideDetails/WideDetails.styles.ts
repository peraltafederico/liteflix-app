import styled from 'styled-components'

// TODO: Fix position static !important on images

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  content: '';
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 1%,
    rgba(0, 0, 0, 0.9) 50%
  );

  & img {
    position: static !important;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  height: inherit;
  padding: 0 10px;
  box-sizing: border-box;
  justify-content: center;
`

export const ActionsContainer = styled.div`
  align-self: flex-end;
  display: flex;
  position: absolute;
  top: 10px;

  & > div {
    margin-left: 10px;
  }
`

export const PlayIconContainer = styled.div`
  align-self: center;
  width: 40px;
  height: 40px;
`

export const ActionIconContainer = styled.div`
  width: 32px;
  height: 32px;
`

export const LikeIcon = styled.img``

export const AddIcon = styled.img``

export const PlayIcon = styled.img``

export const InfoTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 230px;
  line-height: 20px;
`

export const InfoText = styled.p`
  margin: 0;
  font-size: 12px;
`

export const Age = styled.span`
  border-radius: 9.5px;
  padding: 1px 8px;
  background-color: rgba(255, 255, 255, 0.2);
`

export const ArrowIconContainer = styled.div`
  width: 39px;
  height: 20px;
  cursor: pointer;

  & img {
    position: static !important;
  }
`

export const ArrowIcon = styled.img``

export const MovieDta = styled.div`
  position: absolute;
  bottom: 7px;
`
