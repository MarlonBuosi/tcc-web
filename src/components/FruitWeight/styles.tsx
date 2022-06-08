import { styled, Card } from '@mui/material';

export const CardContainer = styled(Card)`
  height: 100%;
  transition: 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
`;
