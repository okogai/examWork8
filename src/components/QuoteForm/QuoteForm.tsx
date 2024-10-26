import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IQuote } from "../../types";
import axiosAPI from "../../axiosAPI.ts";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { categories } from "./categories.ts";
import Loader from "../Loader/Loader.tsx";

const initialForm = {
  author: "",
  category: "",
  text: "",
  date: "",
};

const QuoteForm = () => {
  const { id } = useParams<{ id: string }>();
  const [quote, setQuote] = useState<IQuote>(initialForm);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quote.author && quote.text && quote.category) {
      try {
        setLoading(true);
        if (id) {
          try {
            await axiosAPI.put(`/quotes/${id}.json`, { ...quote });
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
            navigate(`/category/${quote.category}`);
          }
        } else {
          try {
            setLoading(true);
            await axiosAPI.post(`/quotes.json`, {
              ...quote,
              date: new Date().toISOString(),
            });
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
            setQuote({ ...initialForm });
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  useEffect(() => {
    const getQuoteByID = async () => {
      if (id) {
        try {
          setLoading(true);
          const response = await axiosAPI.get(`/quotes/${id}.json`);
          if (response.data) {
            setQuote({ ...response.data });
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setQuote(initialForm);
      }
    };

    void getQuoteByID();
  }, [id]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 2, maxWidth: 600, mx: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        {id ? "Edit quote" : "Add quote"}
      </Typography>

      {loading ? (
        <Loader />
      ) : (
        <>
          <TextField
            label="Author"
            variant="outlined"
            fullWidth
            name="author"
            value={quote.author}
            onChange={handleChange}
            required
          />
          <TextField
            label="Quote"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            name="text"
            value={quote.text}
            onChange={handleChange}
            required
            sx={{ mt: 2 }}
          />
          <TextField
            label="Category"
            select
            variant="outlined"
            fullWidth
            name="category"
            value={quote.category}
            onChange={handleChange}
            sx={{ mt: 2 }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.id} value={cat.id}>
                {cat.title}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            {id ? "Save" : "Add"}
          </Button>
        </>
      )}
    </Box>
  );
};

export default QuoteForm;
