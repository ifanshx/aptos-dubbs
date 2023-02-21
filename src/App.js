import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TeamPage from "./pages/TeamPage";
import DubbsPage from "./pages/DubbsPage";
import RoadmapPage from "./pages/RoadmapPage";
import StakingPage from "./pages/StakingPage";
import Loader from "./components/Loader";
import SoundBar from "./components/SoundBar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const Wrapper = styled.div`
  color: #29252a;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 83.2vh;
`;

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
setTimeout(() => {
  setLoaded(true)
}, 3000);
  }, [])
  

  return (
    <Suspense>
      <Wrapper>
        <GlobalStyle />
        <Router>
          {loaded ? null : <Loader/>}
          <NavBar/>
          <SoundBar/>
          <ContentWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/staking" element={<StakingPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/mint" element={<DubbsPage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </ContentWrapper>
        </Router>
      </Wrapper>
    </Suspense>
  );
}

export default App;
