import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            color="inherit"
            component={NavLink}
            to="/"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            Quotes collection
          </Typography>
          <Box display="flex" alignItems="center">
            <Button color="inherit" component={NavLink} to="/quotes">
              All quotes
            </Button>
            <Box mx={1} borderLeft={2} borderColor="inherit" height="24px" />
            <Button color="inherit" component={NavLink} to="/add-quote">
              Add new quote
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
