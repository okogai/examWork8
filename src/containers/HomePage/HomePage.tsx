import QuotesList from '../../components/QuotesList/QuotesList.tsx';
import { Typography } from '@mui/material';

const HomePage = () => {
  return (
    <>
      <Typography sx={{textAlign: "center", mb: 4}} variant="h2">All quotes</Typography>
      <QuotesList/>
    </>
  );
};

export default HomePage;