import QuotesList from "../../components/QuotesList/QuotesList.tsx";
import { Container } from "@mui/material";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu.tsx";

const HomePage = () => {
  return (
    <>
      <Container sx={{ display: "flex", mt: 4 }}>
        <CategoryMenu />
        <QuotesList />
      </Container>
    </>
  );
};

export default HomePage;
