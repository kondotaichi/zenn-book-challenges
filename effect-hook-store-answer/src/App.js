/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from 'react';
import itemImg from './img/jasur-jiyanbaev-gy78NS8S88U-unsplash.jpg';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

function App() {
  const color = '#454343';
  const green = '#82BF77';
  const gray = '#C6C5C5';

  const Wrapper = styled.main`
    display: grid;
    height: 100vh;
  `

  const ReviewWrapper = styled.div`
    background-color: #ffffff;
    margin: 0 auto;
    max-width: 80%;
    padding: 4rem 0;
  `

  const ItemReview = styled.img`
    max-width: 100%;
    border-radius: 5px;
  `

  const ItemName = styled.h1`
    font-size: 2.5rem;
  `

  const Description = styled.p`
    font-size: 1.25rem;
  `

  const QuantityWrapper = styled.div`
    display: grid;
    grid-template-columns: .4fr .25fr .25fr;
    margin-right: 4rem;
  `

  const Quantity = styled.h3`
    margin: 0;
  `

  const AddButton = styled.button`
    padding: .1rem 1rem;
    margin-right: .6rem;
    border: ${green} solid 1px;
    border-radius: 2px;
    cursor: pointer;
    color: #ffffff;
    font-weight: 900;
    font-size: 1rem;
  `

  const MinusButton = styled.button`
    padding: .1rem 1rem;
    margin-right: .6rem;
    border: ${gray} solid 1px;
    border-radius: 2px;
    cursor: pointer;
    color: #ffffff;
    font-weight: 900;
    font-size: 1rem;
  `

  const Footer = styled.p`
    margin: 5rem 0;
  `

  const CartWrapper = styled.div`
    background-color: #F7F2F2;
    margin: 0 auto;
    max-width: 100%;
    padding: 2rem 4rem;
  `

  const CartContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    border-bottom: 0.2px solid ${gray};
    padding-bottom: 4rem;
  `

  const ItemImg = styled.img`
    max-width: 90%;
    border-radius: 5px;
  `

  const CartItem = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
  `

  const Item = styled.li`
    font-size: 1rem;
    font-weight: 800;
  `

  const CartDetail = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: .5rem 0;
    font-weight: 700;
  `

  const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: ". . a";
  `

  const ShippingButton = styled.button`
    margin: 1rem 0;
    color: #ffffff;
    border: ${green} solid 1rem;
    border-radius: 2px;
    cursor: pointer;
    grid-area: a;
    align-self: right;
    justify-self: right;
  `

  // output different results
  // if buttun is clicked, run setCount(*default value is 1) and setPrice
  // else show a component with default 0 package & ¥0
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [defaultPrice, setDefaultPrice] = useState(200);

  useEffect(() => {
    const numbers = document.getElementById('numbers');
    numbers.innerHTML = `${count} packs`;
  }, [count]);

  useEffect(() => {
    const prices = document.getElementById('prices');
    prices.innerHTML = `¥${price}`;
  });

  return (
    <div>
      <Wrapper
        css={css`
          @media (min-width: 320px) {
            grid-template-columns: 1fr;
          }
          @media (min-width: 1200px) {
            grid-template-columns: 1fr 1fr;
          }
        `}
      >
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
          <h3>Per Item: ¥{defaultPrice}</h3>
          <QuantityWrapper>
            <Quantity>Quantity: {count} packs</Quantity>
            <AddButton
              css={css`
                background-color: ${green};
              `}
              onClick={() => {
                setCount(count + 1);
                setPrice(defaultPrice * (count + 1));
                setDefaultPrice(defaultPrice);
              }}
            >
              +
            </AddButton>
            <MinusButton
              css={css`
                background-color: ${gray};
              `}
              onClick={() => {
                setCount(count - 1);
                setPrice(price - defaultPrice);
              }}>
              -
            </MinusButton>
          </QuantityWrapper>
          <Footer>©︎ 2021, Lilac Store</Footer>
        </ReviewWrapper>

        <CartWrapper>
          <ItemName css={css`
            color: ${color};
          `}>
            Cart 🛍
          </ItemName>
          <CartContent>
            <ItemImg src={itemImg} alt="itemImg" />
            <CartItem>
              <Item>
                Swag Stickers Pack
              </Item>
              <CartDetail>
                <li id="numbers" />
                <li id="prices" />
              </CartDetail>
            </CartItem>
          </CartContent>
          <CartDetail>
            <li>Total</li>
            <li>¥{price}</li>
          </CartDetail>
          <ButtonWrapper>
            <ShippingButton css={css`
              background-color: ${green};
            `}>
              Continue to shipping
            </ShippingButton>
          </ButtonWrapper>
        </CartWrapper>
      </Wrapper>
    </div>
  );
}

export default App;