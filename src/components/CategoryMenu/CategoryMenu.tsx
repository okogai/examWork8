import { Box, Button } from "@mui/material";
import { categories } from "../QuoteForm/categories.ts";
import { useNavigate } from "react-router-dom";

const CategoryMenu = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
  };

  return (
    <Box sx={{ width: 250 }}>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="contained"
          fullWidth
          sx={{ mb: 1 }}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.title}
        </Button>
      ))}
    </Box>
  );
};

export default CategoryMenu;
