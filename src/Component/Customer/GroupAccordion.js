import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import React from "react";
import SingleGroupCLient from "./SingleGroupCLient";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions({
  index,
  handleChange,
  expanded,
  users = [],
  anchorEl,
  handleMenuOpen,
  handleMenuClose,
}) {
  const { group_name, user_id } = users;

  return (
    <div className="my-3 relative">
      <Accordion
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id={`panel1d-header-${index}`}
        >
          <Typography>{group_name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-right flex w-full justify-end mt-2 test">
            <button onClick={() => console.log("Hello")}>Add Users</button>
          </div>

          {user_id &&
            user_id.map((item) => {
              // console.log(item);
              return (
                <SingleGroupCLient
                  key={item._id}
                  groupUser={item}
                  anchorEl={anchorEl}
                  handleMenuOpen={handleMenuOpen}
                  handleMenuClose={handleMenuClose}
                />
              );
            })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
