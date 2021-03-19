/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import itemImg from './img/jasur-jiyanbaev-gy78NS8S88U-unsplash.jpg';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react'
// import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(200);

  useEffect(() => {
    const numbers = document.getElementById('numbers');
    numbers.innerHTML = `${count} packs`;
  }, [count]);

  useEffect(() => {
    const prices = document.getElementById('prices');
    prices.innerHTML = `¥${price}`;
  });

  const color = '#454343';

  const ReviewWrapper = styled.div`
    background-color: #ffffff;
  `

  const CartWrapper = styled.div`
    background-color: #F7F2F2;
  `

  const ItemReview = styled.img`
    max-width: 80%;
    margin: 2rem;
    border-radius: 5px;
  `;

  const ItemName = styled.h1`
    font-size: 3rem;
  `

  const Description = styled.p`
    font-size: 1.5rem;
  `

  // output differents results
  // if buttun is clicked, run setCount(*default value is 1) and setPrice
  // else show a component with default 0 package & ¥0

  const ItemImg = styled.img`
    max-width: 20%;
    margin: 2rem;
    border-radius: 5px;
  `

  const Item = styled.h3`
    font-size: 1.7rem;
  `

  return (
    <div className="App">
      <ReviewWrapper>
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
        <button onClick={() => {
          setCount(count + 1);
          setPrice(200 * (count + 1));

          console.log(`count: ${count}`);
          console.log(`price: ${price}`);
          console.log(`200 * (count + 1): ${200 * (count + 1)}`);
        }}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
        <h3>¥200</h3>
        <h3>Quantity: {count} packs</h3>
      </ReviewWrapper>

      <CartWrapper>
        <ItemName css={css`
          color: ${color};
        `}>
          Cart 🛍
        </ItemName>
        <ItemImg src={itemImg} alt="itemImg" />
        <Item
          css={css`
          color: ${color};
        `}
        >
          Swag Stickers Pack
        </Item>
        <h3 id="numbers" />
        <h3 id="prices" />
      </CartWrapper>
    </div>
  );
}

export default App;