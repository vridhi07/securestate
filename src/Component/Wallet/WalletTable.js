import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IoTrashOutline } from "react-icons/io5";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import * as action from "../../Redux/action";
import IconButton from "@mui/material/IconButton";
// import EditIcon from "@mui/icons-material/Edit";
import { useSelector, useDispatch } from "react-redux";
const columns = [
  { id: "Pentest", label: "Pentest", minWidth: 170, align: "left" },
  {
    id: "Award",
    label: "Award",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Status",
    label: "Status",
    minWidth: 170,
    align: "left",
    // format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "edit",
    minWidth: 50,
    align: "center",
  },
  // {
  //   id: "editOrDelete",
  //   minWidth: 50,
  //   align: "center",
  // },
];

export default function StickyHeadTable({
  hackerId,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  superAdminAccess,
  openEdit,
}) {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  const dispatch = useDispatch();
  const { walletDetails } = useSelector((state) => state?.wallet);
  // // console.log(walletDetails);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  useEffect(() => {
    if (hackerId) {
      console.log("I was called");
      dispatch(action.getWalletRequest({ hackerId, page, rowsPerPage }));
    }
  }, [hackerId, page, rowsPerPage]);
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {superAdminAccess
                ? columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))
                : columns.slice(0, 3).map((column) => (
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
            {walletDetails &&
              walletDetails.map((item) => {
                return (
                  <TableRow hover key={item._id}>
                    <TableCell align="left">
                      {item?.pentestId?.title || (
                        <span className="text-sm font-light text-red-500">
                          !Pentest deleted
                        </span>
                      )}
                    </TableCell>
                    <TableCell align="left">{item?.award}</TableCell>
                    <TableCell align="left">{item?.status}</TableCell>
                    {superAdminAccess && (
                      <TableCell align="left">
                        <IconButton onClick={() => openEdit(item._id)}>
                          <ModeEditOutlineIcon />
                        </IconButton>
                      </TableCell>
                    )}
                    {/* {superAdminAccess && (
                      <TableCell align="left">delete</TableCell>
                    )} */}

                    {/* <TableCell align="center">
                      <button>
                        <MoreVertIcon />
                      </button>
                    </TableCell> */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
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
