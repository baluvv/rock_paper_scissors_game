import {Component} from 'react'
import GameItem from './components/GameItem'
import ReactPopup from './components/ReactPopup'

import {
  AppContainer,
  TopContainer,
  NamesContainer,
  ScoreContainer,
  Heading,
  Score,
  CurrentScore,
  ListContainer,
  ListItem,
  Image,
  Player,
  PlayAgainContainer,
  PlayAgainButton,
  ResultListContainer,
  Result,
} from './styledComponents'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    playerSelected: '',
    opponentSelected: '',
    gameOver: false,
    result: '',
  }

  onClickImageButton = id => {
    const index = Math.floor(Math.random() * 3)
    const opponentSelection = choicesList[index].id
    this.setState({
      playerSelected: id,
      opponentSelected: opponentSelection,
    })

    if (
      (id === 'ROCK' && opponentSelection === 'SCISSORS') ||
      (id === 'SCISSORS' && opponentSelection === 'PAPER') ||
      (id === 'PAPER' && opponentSelection === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        result: 'YOU WON',
        gameOver: true,
      }))
    } else if (id === opponentSelection) {
      this.setState({result: 'IT IS DRAW', gameOver: true})
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
        result: 'YOU LOSE',
        gameOver: true,
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({gameOver: false})
  }

  renderGameContainer = () => (
    <ListContainer>
      {choicesList.map(eachChoice => (
        <GameItem
          choiceDetails={eachChoice}
          key={eachChoice.id}
          onClickImageButton={this.onClickImageButton}
        />
      ))}
    </ListContainer>
  )

  renderResultContainer = () => {
    const {playerSelected, opponentSelected, result} = this.state
    const playerChoice = choicesList.filter(
      eachChoice => eachChoice.id === playerSelected,
    )
    const opponentChoice = choicesList.filter(
      eachChoice => eachChoice.id === opponentSelected,
    )
    return (
      <>
        <ResultListContainer>
          <ListItem>
            <Player>YOU</Player>
            <Image src={playerChoice[0].imageUrl} alt="your choice" />
          </ListItem>
          <ListItem>
            <Player>OPPONENT</Player>
            <Image src={opponentChoice[0].imageUrl} alt="opponent choice" />
          </ListItem>
        </ResultListContainer>
        <PlayAgainContainer>
          <Result>{result}</Result>
          <PlayAgainButton onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </PlayAgainContainer>
      </>
    )
  }

  render() {
    const {score, gameOver} = this.state
    return (
      <AppContainer>
        <TopContainer>
          <NamesContainer>
            <Heading>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Heading>
          </NamesContainer>
          <ScoreContainer>
            <Score>Score</Score>
            <CurrentScore>{score}</CurrentScore>
          </ScoreContainer>
        </TopContainer>
        {gameOver === true
          ? this.renderResultContainer()
          : this.renderGameContainer()}
        <ReactPopup />
      </AppContainer>
    )
  }
}

export default App
