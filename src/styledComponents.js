import styled from 'styled-components'

export const AppContainer = styled.div`
  padding: 40px;
  height: 100vh;
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TopContainer = styled.div`
  width: 80%;
  padding: 15px;
  border: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 100px;
`
export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  height: 100px;
  width: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 5px;
`
export const Score = styled.p`
  color: #223a5f;
  font-size: 16px;
  font-family: 'Bree Serif';
`

export const CurrentScore = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-size: 25px;
  margin-top: 0px;
  font-weight: 500;
`
export const ListContainer = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 100px;
  width: 100px;
`

export const Player = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
`

export const Result = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`

export const PlayAgainContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainButton = styled.button`
  border-width: 0px;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  padding: 8px;
  width: 120px;
  font-size: 12px;
  border-radius: 8px;
`
export const ResultListContainer = styled.ul`
  width: 30%;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  flex-wrap: wrap;
`
