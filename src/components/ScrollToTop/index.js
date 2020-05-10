import React, { memo, useState } from "react";
import * as Styled from "./styled";



const Scroll = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = function () {
    scrollFunction();
    setScrolled(scrollFunction());
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      return true;
    } else {
      return false;
    }
  }

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <Styled.Button
      onClick={topFunction}
      isScrolled={scrolled}
      title="Go to top"
    >
      ВВЕРХ
    </Styled.Button>
  );
});

export default Scroll;
