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

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
            {[1, 2, 3, 4, 5].map((row) => {
              return (
                <TableRow hover key={row}>
                  <TableCell align="left">Pentest Title #{row}</TableCell>
                  <TableCell align="left">$XX.XX</TableCell>
                  <TableCell align="left">12/12/2022</TableCell>
                  <TableCell align="center">
                    <button>
                      <DownloadIcon sx={{ color: "#F67A32" }} />
                    </button>
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
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={10}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
