import * as React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { SignInAvatar, SignInButton } from './styles';
import { ButtonBox, SignHeaderBox, SignInBox, SignInContent } from './styles';

export function SignInContainer() {
  const navigate = useNavigate();

  const { user, signInWithGoogle, signInWithFaceBook } = useAuth();

  const handleSignInWithGoogle = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    navigate('/dashBoard');
  };

  const handleSignInWithFaceBook = async () => {
    if (!user) {
      await signInWithFaceBook();
    }
    navigate('/dashBoard');
  };

  return (
    <SignInContent>
      <SignInBox>
        <Box>
          <SignHeaderBox>
            <SignInAvatar>
              <LockOutlinedIcon />
            </SignInAvatar>
            <Typography color="textPrimary" variant="h4">
              Sign in
            </Typography>
          </SignHeaderBox>
          <Typography color="textSecondary" gutterBottom variant="body2">
            Faça login para entrar na aplicação
          </Typography>
        </Box>
        <ButtonBox>
          <SignInButton
            color="info"
            fullWidth
            startIcon={<FacebookIcon />}
            size="large"
            variant="contained"
            onClick={handleSignInWithFaceBook}
          >
            Login com Facebook
          </SignInButton>
          <SignInButton
            fullWidth
            color="error"
            startIcon={<GoogleIcon />}
            size="large"
            variant="contained"
            onClick={handleSignInWithGoogle}
          >
            Login com Google
          </SignInButton>
        </ButtonBox>
      </SignInBox>
    </SignInContent>
  );
}
