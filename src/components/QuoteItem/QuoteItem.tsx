import React from 'react';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import {IQuoteFromDB } from '../../types';
import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface QuoteItemProps {
  quote: IQuoteFromDB;
  onDelete: (id: string) => void;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote, onDelete }) => (
  <Card variant="outlined" sx={{ width: "70%", mb: 2, paddingLeft: 2 , paddingRight: 2}}>
    <CardContent>
      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1 }}><strong>Created on: </strong> {dayjs(quote.date).format("DD.MM.YYYY HH:mm")}</Typography>
      <Typography variant="h5" sx={{ fontSize: '1.5rem', mb: 2 }}><strong>Author: </strong>{quote.author}</Typography>
      <Typography variant="body2">{quote.text}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        <IconButton
          sx={{mr: 3}}
          color="primary"
          component={Link}
          to={`/quotes/${quote.id}/edit`}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="error"
          onClick={() => onDelete(quote.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

export default QuoteItem;