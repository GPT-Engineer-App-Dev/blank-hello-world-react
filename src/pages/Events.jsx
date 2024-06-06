import React from 'react';
import { Box, Container, SimpleGrid, Text, VStack, Heading } from '@chakra-ui/react';
import { useEvents } from '../integrations/supabase/index.js';

const Events = () => {
  const { data: events, error, isLoading } = useEvents();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading events</Text>;

  return (
    <Container maxW="container.xl" py={8}>
      <Heading as="h1" mb={8}>Events</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {events.map(event => (
          <Box key={event.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">{event.name}</Heading>
            <Text mt={4}>Date: {new Date(event.date).toLocaleDateString()}</Text>
            <Text mt={2}>Venue ID: {event.venue_id}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Events;