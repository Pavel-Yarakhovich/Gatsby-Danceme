import React, { memo, useEffect } from "react";
import * as Styled from "./styled";

const Paginator = memo(
  ({
    elements = [],
    itemsPerPage = 10,
    currentPage,
    prevClicked,
    nextClicked,
    prevPressed,
    nextPressed,
  }) => {
    const numPages = Math.ceil(elements.length / itemsPerPage);

    useEffect(() => console.log(currentPage), [currentPage]);

    return (
      <Styled.Container>
        <Styled.Prev
          onClick={prevClicked}
          onKeyPress={prevPressed}
          disabled={currentPage === 0}
        >
          Назад
        </Styled.Prev>
        {elements.length > 0 && (
          <Styled.PageNumber active={currentPage === 0}>1</Styled.PageNumber>
        )}

        {numPages < 3 && numPages > 1 && <Styled.PageNumber active={currentPage === numPages - 1}>2</Styled.PageNumber>}

        {numPages > 2 && (
          <>
            <Styled.Separator>...</Styled.Separator>
            {currentPage > 0 && currentPage < numPages - 1 && (
              <>
                <Styled.PageNumber active>{currentPage + 1}</Styled.PageNumber>
                <Styled.Separator>...</Styled.Separator>
              </>
            )}
            <Styled.PageNumber active={currentPage === numPages - 1}>
              {numPages}
            </Styled.PageNumber>
          </>
        )}
        <Styled.Next
          onClick={nextClicked}
          onKeyPress={nextPressed}
          disabled={currentPage === numPages - 1}
        >
          Вперед
        </Styled.Next>
      </Styled.Container>
    );
  }
);

export default Paginator;
