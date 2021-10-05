import React, { useEffect, useState } from "react";
import Theme from "./commons/Theme";
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import { Wrapper } from "./styles/Wrapper.styled";
import Planet from "./components/planet/Planet";
import data from "./data/data";

function App() {

  const [planets, setPlanets] = useState(data);
  
  const [value, setValue] = useState(0);

  const [toggleList, setToggleList] = useState(false);

  const currentPlanet = planets[value];

  return (
    <Theme>
      <GlobalStyle />
      <div className="App">
        <Wrapper>
          <nav className="nav">
            <div className="nav__logo">
              <h2>the planets</h2>
            </div>

            <button className="btn--hamburger" onClick={ () => setToggleList(!toggleList)}></button>

            <ul className={`nav__list ${toggleList && 'isOpen'}`} >
              {planets.map((item, index) => {
                return (
                  <li className={`nav__item ${item.name.toLowerCase()} ${index === value && 'active-link'}`} key={item.name}>
                    <button onClick={() => { 
                      setValue(index); 
                      setToggleList(!toggleList);
                      }}>
                        {item.name}
                      </button>
                  </li>
                );
              })}
            </ul>
            
          </nav>
          <Planet planetData={currentPlanet}></Planet>
        </Wrapper>
      </div>
    </Theme>
  );
}

export default App;