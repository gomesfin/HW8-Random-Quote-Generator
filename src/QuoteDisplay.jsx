import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Card, Spinner, Alert } from 'react-bootstrap';

const QuoteDisplay = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data);
    } catch (err) {
      setError('Error fetching quote');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="text-center mt-5">
      <Button onClick={fetchQuote} variant="primary" className="mb-3">
        Get New Quote
      </Button>
      {loading && <Spinner animation="border" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {quote && (
        <Card>
          <Card.Body>
            <Card.Text>"{quote.content}"</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">- {quote.author}</Card.Subtitle>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default QuoteDisplay;
