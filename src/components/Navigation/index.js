import React from "react";
import { Link } from "gatsby";
import { Wrapper, Navigation, NavigationItem } from "./styled";

const routes = [
  { name: "На главную", path: "/" },
  { name: "О школе", path: "/about-school" },
  { name: "Учителям", path: "/teachers" },
  { name: "Безопасность", path: "/safety" },
  { name: "Телефон доверия", path: "/trust-phone" },
  { name: "Ученикам", path: "/pupils" },
  { name: "Родителям", path: "/parents" },
  { name: "Одно окно", path: "/one-window" },
];

export default () => (
  <Wrapper>
    <nav role="navigation">
      <Navigation>
        {routes.map((route) => {
          return (
            <NavigationItem key={route.path}>
              <Link
                to={route.path}
                activeStyle={{ backgroundColor: "white", color: "#303C6D" }}
              >
                {route.name}
              </Link>
            </NavigationItem>
          );
        })}
      </Navigation>
    </nav>
  </Wrapper>
);
