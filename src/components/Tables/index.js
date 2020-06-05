import React, { memo } from "react";
import * as Styled from "./styled";

const Table = memo(({ item }) => {
  const content = item.node.content;
  let newArray = [];
  while (item.node.content.length) {
    newArray.push(content.splice(0, item.node.columns));
  }
  const tableContent = newArray.map((item) => {
    return (
      <Styled.Row key={Math.random()}>
        {item.map((cell) => {
          return <Styled.Cell key={Math.random()}>{cell}</Styled.Cell>;
        })}
      </Styled.Row>
    );
  });

  return (
    <Styled.Wrapper>
      <Styled.Title>{item.node.title}</Styled.Title>
      <Styled.Table>
        <tbody>{tableContent}</tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
});

export const Tables = memo(({ tables }) => {
  return (
    <Styled.Container>
      {tables.map((table) => (
        <Table key={table.id} item={table} />
      ))}
    </Styled.Container>
  );
});
