import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import React from "react";
import SingleGroupCLient from "./SingleGroupCLient";
import { useRef } from "react";
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
  groupIdRef,
  handleOpenAddMoreUserToGroup,
  openDeleteModal,
  handleDeleteGroup,
}) {
  const { group_name, user_id } = users;
  // const id = useRef(null);

  return (
    <div className="my-3 flex items-center  relative">
      <Accordion
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        sx={{ width: "100%" }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id={`panel1d-header-${index}`}
        >
          <Typography
            sx={{ textTransform: "capitalize" }}
            variant="h5"
            component={"h2"}
          >
            {group_name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                  openDeleteModal={openDeleteModal}
                />
              );
            })}
        </AccordionDetails>
      </Accordion>
      <div>
        <div className="absolute top-2 right-3  ">
          <div className="flex gap-2 items-center">
            <button
              className="px-3 bg-orange-cus-1 text-white py-2 rounded-md"
              onClick={() =>
                handleOpenAddMoreUserToGroup(groupIdRef, group_name)
              }
            >
              Add User
            </button>
            <button
              className="px-3 bg-red-400 text-white py-2 rounded-md"
              onClick={() => handleDeleteGroup(groupIdRef)}
            >
              Delete Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
