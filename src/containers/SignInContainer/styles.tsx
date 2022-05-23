import { Avatar, Box, Button, Container, styled } from '@mui/material';

export const SignInBox = styled(Box)``;

export const SignInButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonBox = styled(Box)`
  display: flex;
  flex-direction: column;
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
