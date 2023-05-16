import styled from "styled-components";

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.quoteBgc};
  border: 1px solid ${({ theme }) => theme.colors.quoteBorder};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 3px;
  max-width: 450px;
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.quoteTitle};
  text-align: center;
  padding: 10px;
  font-weight: bold;
`;

export const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.quoteBody};
  padding: 10px;
`;
