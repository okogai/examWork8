import QuotesList from '../../components/QuotesList/QuotesList.tsx';
import { Container, Typography } from '@mui/material';
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu.tsx';

const HomePage = () => {
  return (
    <>
      <Typography sx={{textAlign: "center", mb: 4}} variant="h2">All quotes</Typography>
      <Container sx={{ display: 'flex', mt: 4 }}>
        <CategoryMenu />
        <QuotesList />
      </Container>
    </>
  );
};

export default HomePage;