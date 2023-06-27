import {ListItem, ImageButton, Image} from './styledComponents'

const GameItem = props => {
  const {choiceDetails, onClickImageButton} = props
  const {id, imageUrl} = choiceDetails

  const onClickImage = () => {
    onClickImageButton(id)
  }
  let dataValue
  if (id === 'ROCK') {
    dataValue = 'rockButton'
  } else if (id === 'PAPER') {
    dataValue = 'paperButton'
  } else {
    dataValue = 'scissorsButton'
  }

  return (
    <ListItem>
      <ImageButton data-testid={dataValue} onClick={onClickImage}>
        <Image src={imageUrl} alt={id} />
      </ImageButton>
    </ListItem>
  )
}

export default GameItem
