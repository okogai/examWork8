import { useEffect, useState } from 'react';
import { IQuoteFromDB } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import QuoteItem from '../QuoteItem/QuoteItem.tsx';
import { Box, Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { categories } from '../QuoteForm/categories.ts';

const QuotesList = () => {
  const [quotes, setQuotes] = useState<IQuoteFromDB[]>([]);
  const { categoryId } = useParams<{ categoryId: string }>();

  const onDelete = async (id: string) => {
    try {
      await axiosAPI.delete(`/quotes/${id}.json`);
      setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id)); // Обновление состояния после удаления
    } catch (error) {
      console.error(error);
    }
  };

  const categoryTitle = categoryId
    ? categories.find(category => category.id === categoryId)?.title
    : 'All quotes';

  useEffect(() => {
    const fetchQuotes = async () => {
      if (categoryId) {
        try {
          const response = await axiosAPI.get(`/quotes.json?orderBy="category"&equalTo="${categoryId}"`);
          if (response.data) {
            const loadedQuotes = Object.keys(response.data).map((quoteKey) => {
              return {
                ...response.data[quoteKey],
                id: quoteKey,
              };
            });
            setQuotes(loadedQuotes);
          }
        } catch (error) {
          console.error(error);
        } finally {

        }
      } else {
        try {
          const response = await axiosAPI.get("/quotes.json");
          if (response.data) {
            const loadedQuotes = Object.keys(response.data).map((quoteKey) => {
              return {
                ...response.data[quoteKey],
                id: quoteKey,
              };
            });
            setQuotes(loadedQuotes);
          }
        } catch (error) {
          console.error(error);
        } finally {

        }
      }
    };

    void fetchQuotes();
  }, [categoryId]);

  return (
    <>
      <Container>
        <Typography sx={{textAlign: "center", mb: 4}} variant="h3">{categoryTitle}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {quotes.length > 0 ? (
            quotes.map((quote) => (
              <QuoteItem key={quote.id} quote={quote} onDelete={onDelete} />
            ))
          ) : (
            <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
              There are no quotes added to this category yet
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
};

export default QuotesList;