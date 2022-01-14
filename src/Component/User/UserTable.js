import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import DummyProfile from "../../constantData/images/dummyProfile.webp";
export default function SBOMTab() {
  return (
    <div className="w-full flex flex-col mx-auto">
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="center" colSpan={2}>
                Full Name
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Role
              </TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Last Login</TableCell>
              <TableCell align="center">Remove User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3, 3].map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell>
                  <img
                    src={DummyProfile}
                    alt="profile"
                    height={40}
                    width={40}
                    className="rounded-full "
                  />
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Lorem ipsum dolor
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  {index === 0
                    ? "Admin"
                    : index === 2
                    ? "Security Researcher"
                    : "Client"}
                </TableCell>
                <TableCell align="center">Lorem, ipsum.</TableCell>
                <TableCell align="center">Lorem, ipsum dors</TableCell>
                <TableCell align="center">loremipsum214@gmail.com</TableCell>
                <TableCell sx={{ textAlign: "left" }}>22/12/2022</TableCell>
                <TableCell align="center">
                  <IconButton color="error" onClick={() => console.log(index)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
