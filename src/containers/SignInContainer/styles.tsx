import { Avatar, Box, Button, Container, styled } from '@mui/material';

export const SignInBox = styled(Box)`
  width: 600px;
  margin-left: 600px;
`;

export const SignInButton = styled(Button)`
  display: flex;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-itens: center;
  gap: 10px;
`;

export const SignHeaderBox = styled(Box)`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

export const SignInAvatar = styled(Avatar)``;

export const SignInContent = styled(Container)`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
`;
