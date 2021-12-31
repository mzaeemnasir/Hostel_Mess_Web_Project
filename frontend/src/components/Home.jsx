import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function Home() {
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          // your coode here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i class="zmdi zmdi-home" />
            </NavIcon>
            <NavText>Home Page</NavText>
          </NavItem>
          <NavItem eventKey="Mess">
            <NavIcon>
              <i class="zmdi zmdi-chart"></i>
            </NavIcon>
            <NavText>Mess</NavText>
          </NavItem>
          <NavItem eventKey="Attandance">
            <NavIcon>
              <i class="zmdi zmdi-account-box"></i>
            </NavIcon>
            <NavText>Attandance</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default Home;
