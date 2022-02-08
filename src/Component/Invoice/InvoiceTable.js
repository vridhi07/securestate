import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import moment from "moment";
const columns = [
  { id: "Invoice", label: "Invoice", minWidth: 170, align: "left" },

  {
    id: "Amount",
    label: "Amount",
    minWidth: 170,
    align: "left",
  },
  {
    id: "Due Date",
    label: "Due Date",
    minWidth: 170,
    align: "left",
  },
  {
    id: "download",
    minWidth: 50,
    align: "left",
  },
  {
    id: "EditOrDelete",
    minWidth: 50,
    align: "left",
  },
];

export default function InvoiceTable({
  invoiceData = [],
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceData.map((item, index) => {
              return (
                <TableRow hover key={item?._id}>
                  <TableCell align="left">{item?.invoice}</TableCell>
                  <TableCell align="left">${item.total}</TableCell>
                  <TableCell align="left">
                    {moment(item._createdAt).format("l")}
                  </TableCell>
                  <TableCell align="center">
                    <a href={item?.file} download>
                      <DownloadIcon sx={{ color: "#F67A32" }} />
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <button>
                      <MoreVertIcon />
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        // rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={100}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
