import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { StyledOldPrice, StyledText } from 'styles';
import { cart, product } from 'assets';

const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{ backgroundColor: 'primary.contrastText' }}
    >
      <Paper elevation={0}>
        <Stack
          sx={{
            borderRadius: 4,
            backgroundColor: 'secondary.contrastText',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              borderRadius: { xs: '4px 4px 0 0', md: '4px 0 0 4px' },
              backgroundImage: `url(${product})`,
              backgroundSize: 'cover',
              backgroundPositionY: { xs: -112, md: 0 },
              height: { xs: 240, md: 'auto' },
              width: { md: 240 },
            }}
          />
          <Box sx={{ width: { xs: 288, md: 240 } }} px={2} py={3}>
            <StyledText letterSpacing={4}>PERFUME</StyledText>
            <Typography component="h1" fontFamily="body2.fontFamily" mt={2} fontSize={28} lineHeight={1}>
              Gabrielle Essence Eau De Parfum
            </Typography>
            <StyledText mt={2}>
              A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of
              CHANEL.
            </StyledText>
            <Stack direction="row" alignItems="center" my={2} spacing={2}>
              <Typography component={'h2'} fontFamily="body2.fontFamily" fontSize={28} color="primary.main">
                $149.99
              </Typography>
              <StyledOldPrice>$169.99</StyledOldPrice>
            </Stack>
            <Button
              sx={{ textTransform: 'initial', color: 'white', height: 36 }}
              startIcon={<img src={cart} alt="cart-icon" />}
              variant="contained"
              fullWidth
              disableElevation
            >
              <Typography fontSize={12}>Add to Cart</Typography>
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default App;
