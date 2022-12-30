import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import theme from 'theme/theme';

const StyledText = styled(Typography)`
  color: ${theme.palette.secondary.dark};
  font-size: 12px;
`;

export default StyledText;
