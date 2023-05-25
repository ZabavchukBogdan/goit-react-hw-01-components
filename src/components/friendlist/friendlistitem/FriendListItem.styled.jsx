import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const IsOnline = styled.span`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Image = styled.img`
  display: block;
  width: 80px;

  background-color: #faff95;
  border: 1px solid #111111;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 30px;
`;