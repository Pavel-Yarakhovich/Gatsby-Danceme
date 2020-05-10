import React, { memo, useState } from 'react';
import * as Styled from "./styled";

const Filter = memo(({ products, optionClicked, resetClicked }) => {
  const [openedFilter, setOpenedFilter] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const handleToggle = () => setOpenedFilter(prevState => !prevState);
  let allCategories = [];
  products.forEach(({ node }) => node.categories
    .forEach((category) => !allCategories.includes(category) && allCategories.push(category)));

  const handleOptionClick = e => {
    e.preventDefault();
    optionClicked(e);
    setShowReset(true);
  }

  const handleReset = e => {
    e.preventDefault();
    setOpenedFilter(false);
    setShowReset(false);
    resetClicked();
  }

  return (
    <Styled.Container>
      <Styled.ToggleButton onClick={handleToggle} >Фильтр товаров</Styled.ToggleButton>
      <Styled.FilterOptions opened={openedFilter}>
        { allCategories.map((category) => <Styled.Option onClick={handleOptionClick}>{category}</Styled.Option>) }
        { showReset && <Styled.Option onClick={handleReset}>Сбросить фильтр</Styled.Option> }
      </Styled.FilterOptions>
    </Styled.Container>
  );
});

export default Filter;