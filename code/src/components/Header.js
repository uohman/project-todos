import React from 'react';
import styled from 'styled-components/macro'
import arrow from 'images/arrow-icon.svg'

const Header = () => {
/*   const dateObj = new Date()
  const weekday = dateObj.toLocaleString('default', { weekday: 'long' }) */

  const arrayOfWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const dateObj = new Date()
  const weekdayNumber = dateObj.getDay()
  const weekdayName = arrayOfWeekdays[weekdayNumber]

  const date = `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;

  return (
    <>
      <HeaderContainer>
        <button type="button">
          <IconLeft
            className="icon-left"
            src={arrow}
            alt="Icon left" />
        </button>
        <StyledHeading>{weekdayName},<span>{date}</span></StyledHeading>
        <button type="button">
          <IconRight
            className="iconLeft"
            src={arrow}
            alt="Icon left" />
        </button>
      </HeaderContainer>
      <hr
        style={{
          border: '1px solid var(--color-accent)'
        }} />
    </>
  )
}

const HeaderContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 3vh 0;

  button {
    background-color: var(--color-background);
    border: none;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }
  }
`

const IconRight = styled.img`
  width: 13px;
`

const IconLeft = styled(IconRight)`
  transform: scaleX(-1);
`

const StyledHeading = styled.h2`
  font-family: var(--font-main);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: center;
  font-size: 20px;
  color: var(--color-accent);

  span {
    font-family: var(--font-main);
    font-weight: 400;
    font-size: 12px;
    color: var(--color-accent);
    padding: 0 10px;
  }
`

export default Header;