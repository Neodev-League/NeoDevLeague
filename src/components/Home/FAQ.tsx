import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is the NeoDev League?",
    answer:
      "Neo Developer League is a student-led organization that hosts competitive events to inspire high school students to pursue engineering and build connections in a fun and competitive way.",
  },
  {
    question: "How many people can be on a team?",
    answer:
      "There can be 8-10 people on a team and schools can host 1-2 teams total.",
  },
  {
    question: "Do I have to pay to participate?",
    answer:
      "No! Everything is on us! Just be sure to bring water and a laptop to run your IDE of choice and be ready to work away!",
  },
  {
    question: "Is experience required to participate?",
    answer:
      "Naw, don't worry about it! We'll have mentors there to help you out and guide you through the process. With passion, anything is possible!",
  },
];

const FAQ: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: isMobile ? "0 16px" : 0,
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        component="h2"
        gutterBottom
        sx={{
          color: "white",
          textAlign: "center",
          marginBottom: isMobile ? "2rem" : "3rem",
          fontWeight: "bold",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "500px",
        }}
      >
        {faqData.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              marginBottom: isMobile ? "2rem" : "1rem",
              borderRadius: "8px",
              "&:before": {
                display: "none",
              },
              width: "100%",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
              sx={{
                "& .MuiAccordionSummary-content": {
                  margin: "12px 0",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: isMobile ? "1rem" : "1.1rem",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: isMobile ? "0.9rem" : "1rem" }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </motion.div>
    </Box>
  );
};

export default FAQ;
