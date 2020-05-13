import React from "react";
import { Link } from "gatsby";
import { Wrapper, Navigation, NavigationItem } from "./styled";

export default ({ routes }) => (
  <Wrapper>
  <nav role="navigation">
    <Navigation>
      {routes.map((route) => {
        return (
          <NavigationItem key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </NavigationItem>
        );
      })}
    </Navigation>
  </nav>
  </Wrapper>
);
