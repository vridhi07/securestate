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
export default function SBOMTab() {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}>SUPPLER</TableCell>
            <TableCell colSpan={3}>COMPONENT</TableCell>
            <TableCell colSpan={2}>LICENSE</TableCell>
            <TableCell align="right">CVE</TableCell>
            <TableCell align="right">UNIQUE IDENTIFIER</TableCell>
            <TableCell align="right">VERSION</TableCell>
            <TableCell align="left">SBOM AUTHOR</TableCell>
            <TableCell align="right"></TableCell>
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
              <TableCell colSpan={2}>Lorem ipsum dolor sit amet.</TableCell>
              <TableCell colSpan={3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </TableCell>
              <TableCell align="left" colSpan={2}>
                Lorem ipsum dolor sit amet.
              </TableCell>
              <TableCell align="right">Lorem, ipsum.</TableCell>
              <TableCell align="right">Lorem, ipsum dolor.</TableCell>
              <TableCell align="right">VERSION 1</TableCell>
              <TableCell align="right" sx={{ textAlign: "left" }}>
                SBOM AUTHOR aaa
              </TableCell>
              <TableCell align="right">
                <IconButton color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
