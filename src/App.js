import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from './components/Card'

function App() {
  const [showCard, setShowCard] = useState(false)
  const [emoji, setEmoji] = useState([])
  const [result, setResult] = useState(null)

  const doEmojisMatch = emoji[0]===emoji[1];


  const handleClick = () => {
    console.log('hello')
    setShowCard(!showCard)
  }

  useEffect(() => {
    const emoji1 = generateEmoji()
    console.log(emoji1)
    const emoji2 = generateEmoji()
    console.log(emoji2)
    setEmoji([emoji1, emoji2])
  },[])

  useEffect(() => {
    if (showCard) {
      console.log(emoji, doEmojisMatch)
      const text = doEmojisMatch ? "You win!" : "You don't win"
      setResult(text)
    }
  },[showCard, doEmojisMatch])



  return (
    <Wrapper>
      {showCard && <div>{result}</div>}
      <Card handleClick={handleClick} isVisible={showCard} emoji={emoji[0]}/>
      <Card handleClick={handleClick} isVisible={showCard} emoji={emoji[1]} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const generateEmoji = () => {
    const possibleEmoji = ['😂','😎','🥳','😭','👻','😻','🐶','🐙'];

    return possibleEmoji[Math.floor(Math.random() * 8)];
}