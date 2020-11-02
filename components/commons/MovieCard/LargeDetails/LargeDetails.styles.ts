import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 45%;
  width: 100%;
  height: 55%;
  content: '';
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000 82%);
  display: flex;
  align-items: flex-end;
`

export const InfoContainer = styled.div`
  margin-bottom: 56px;
  margin-left: 12px;
`

export const InfoTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
`

export const InfoText = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  max-width: 108px;
`

export const Age = styled.span`
  border-radius: 9.5px;
  padding: 1px 6px;
  background-color: rgba(255, 255, 255, 0.2);
`

export const LikeIconContainer = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 8px;
  bottom: 89px;
`

export const LikeIcon = styled.img``

export const PlayIconContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  bottom: 7px;
`

export const PlayIcon = styled.img``

export const ArrowIconContainer = styled.div`
  width: 37px;
  height: 18px;
  position: absolute;
  bottom: 17px;
  left: 50%;
  transform: translateX(-50%);

  animation: bounce 0.65s ease-in-out infinite;

  @keyframes bounce {
    0% {
      transform: translateY(0px);
    }

    100% {
      transform: translateY(9px);
    }
  }
`

export const ArrowIcon = styled.img``
