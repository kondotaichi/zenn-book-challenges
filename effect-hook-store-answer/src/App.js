/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import itemImg from './img/jasur-jiyanbaev-gy78NS8S88U-unsplash.jpg';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Apply DOM later
    console.log(`${count} times clicked!`);
  }, [count]);

  const color = '#454343';

  const ItemReview = styled.img`
    max-width: 80%;
    margin: 8rem auto 1rem;
    border-radius: 5px;
  `;

  const ItemName = styled.h1`
    font-size: 3rem;
  `

  const Description = styled.p`
    font-size: 1.5rem;
  `

  return (
    <div className="App">
      <ItemReview src={itemImg} alt="itemLogo" />
      <ItemName css={css`
        color: ${color};
      `}>
        Swag Sticker Pack
      </ItemName>
      <Description css={css`
        color: ${color};
      `}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />Sed pharetra consequat diam. In metus risus, aliquam non massa tempus,
        <br />gravida commodo orci. Praesent interdum pharetra quam eu pharetra.
      </Description>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <h3>{count} packs</h3>
    </div>
  );
}

export default App;