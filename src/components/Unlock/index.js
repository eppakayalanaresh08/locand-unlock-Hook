import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </UnlockLockContainer>
  )
}

export default Unlock

// import {useState} from 'react'

// // const {ImageElement, Description} = './styledComponents'

// const Unlock = () => {
//   const [valueName, setValueName] = useState(false)

//   const onClickChange = () => {
//     setValueName(prevState => !prevState)
//   }

//   const imageUrl = valueName
//     ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
//     : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
//   const altImage = valueName ? 'Unlock' : 'lock'
//   const paragraphElement = valueName
//     ? 'Your Device is Unlocked'
//     : 'Your Device is Locked'
//   const buttonText = valueName ? 'lock' : 'Unlock'
//   return (
//     <div>
//       <img src={imageUrl} alt={altImage} />
//       <p>{paragraphElement}</p>
//       <button type="button" onClick={onClickChange}>
//         {buttonText}
//       </button>
//     </div>
//   )
// }

// export default Unlock
