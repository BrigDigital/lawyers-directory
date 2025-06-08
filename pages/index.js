// Public Repository: lawyers-directory

// File: lawyers.js (core module for NyayaNext lawyer onboarding and search)

/**
 * This is a lightweight, open-source module to manage lawyer onboarding,
 * search, and contact requests.
 * You can integrate this with your own auth and database logic.
 */

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  Heading,
  Select,
} from "@chakra-ui/react";

export default function LawyersDirectory({ initialLawyers = [] }) {
  const [lawyers, setLawyers] = useState(initialLawyers);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(initialLawyers);

  useEffect(() => {
    setFiltered(
      lawyers.filter((lawyer) =>
        lawyer.name.toLowerCase().includes(query.toLowerCase()) ||
        lawyer.city.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, lawyers]);

  return (
    <Box maxW="4xl" mx="auto" py={8}>
      <Heading mb={4} textAlign="center">
        👩‍⚖️ NyayaNext Lawyer Directory
      </Heading>
      <Input
        placeholder="Search by name or city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        mb={6}
      />
      <VStack spacing={4} align="stretch">
        {filtered.map((lawyer, i) => (
          <Box key={i} p={4} borderWidth="1px" borderRadius="md" bg="gray.50">
            <Text fontWeight="bold">{lawyer.name}</Text>
            <Text>📍 {lawyer.city}</Text>
            <Text>📞 {lawyer.phone}</Text>
            <Text fontSize="sm" color="gray.600">
              {lawyer.specialty || "General Practice"}
            </Text>
          </Box>
        ))}
        {filtered.length === 0 && <Text>No matching lawyers found.</Text>}
      </VStack>
    </Box>
  );
}

// Note: In production, fetch initialLawyers from an API or DB.
