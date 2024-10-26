import { useEffect, useState } from 'react';
import { IQuoteFromDB } from '../../types';
import axiosAPI from '../../axiosAPI.ts';
import QuoteItem from '../QuoteItem/QuoteItem.tsx';
import { Box, Container } from '@mui/material';

const QuotesList = () => {
  const [quotes, setQuotes] = useState<IQuoteFromDB[]>([]);

  const onDelete = async (id: string) => {
    try {
      await axiosAPI.delete(`/quotes/${id}.json`);
      setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== id)); // Обновление состояния после удаления
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchQuotes = async () => {
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
    };
    void fetchQuotes();
  }, []);

  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
          {quotes.map((quote) => (
            <QuoteItem key={quote.id} quote={quote} onDelete={onDelete} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default QuotesList;