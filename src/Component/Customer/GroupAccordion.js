// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import SingleGroupCLient from "./SingleGroupCLient";
// import { useRef } from "react";
// const Accordion = styled((props) => (
//   <MuiAccordion disableGutters elevation={0} {...props} />
// ))(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&:before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled((props) => (
//   <MuiAccordionSummary
//     // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
//     {...props}
//   />
// ))(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   flexDirection: "row",
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: "1px solid rgba(0, 0, 0, .125)",
// }));

export default function CustomizedAccordions({
  index,
  handleChange,
  expanded,
  users = [],
  // anchorEl,
  // handleMenuOpen,
  // handleMenuClose,
  groupIdRef,
  handleOpenAddMoreUserToGroup,
  openDeleteModal,
  handleDeleteGroup,
}) {
  const { group_name, user_id } = users;
  // const id = useRef(null);

  return (
    <div className=" relative my-3 flex  items-center rounded-lg border border-white bg-white">
      <Accordion
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        sx={{ width: "100%", borderRadius: "0.5rem" }}
        elevation={0}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id={`panel1d-header-${index}`}
          sx={{ backgroundColor: "white" }}
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "2rem" }} />}
        >
          <Typography
            sx={{ textTransform: "capitalize" }}
            variant="h5"
            component={"h2"}
            sx={{ color: "#6F6F6F" }}
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
                  // anchorEl={anchorEl}
                  // handleMenuOpen={handleMenuOpen}
                  // handleMenuClose={handleMenuClose}
                  openDeleteModal={openDeleteModal}
                />
              );
            })}
        </AccordionDetails>
      </Accordion>
      <div>
        <div className="absolute top-2 right-12  ">
          <div className="flex items-center gap-2">
            <button
              className="rounded-md bg-success-btn px-3 py-2 text-white hover:bg-green-500"
              onClick={() =>
                handleOpenAddMoreUserToGroup(groupIdRef, group_name)
              }
            >
              Add User
            </button>
            <button
              className="rounded-md bg-error-btn px-3 py-2 text-white hover:bg-red-500"
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
