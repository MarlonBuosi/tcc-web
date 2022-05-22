import { Avatar, Box, Button, Container, styled } from '@mui/material';

// export const SignInContainer = styled(Container)``;

export const SignInButton = styled(Button)`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
`;

export const SignInBox = styled(Box)`
  display: flex;
  align-items: center;
`;

export const SignInAvatar = styled(Avatar)`
  margin: 10px;
`;

export const SignInContent = styled(Box)`
  align-itens: center;
  display: flex;
  flex-grow: 1;
  min-height: 100%;
`;
