import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import theme from 'theme/theme';

const StyledOldPrice = styled(Typography)`
  text-decoration: line-through;
  font-size: 12px;
  color: ${theme.palette.secondary.dark};
`;

export default StyledOldPrice;
