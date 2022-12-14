import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import DownloadIcon from "@mui/icons-material/Download";
import Menu from "../Common/Menu";
import moment from "moment";
import DeleteModal from "../Common/DeleteModal";
import * as action from "../../Redux/action";
import { useDispatch } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
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
    id: "status",
    label: "Status",
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
  // rowsPerPage,
  handleChangePage,
  // handleChangeRowsPerPage,
  company_id,
  totalPage,
}) {
  // console.log(totalPage);
  const dispatch = useDispatch();
  //! State ALl the Delete And Edit
  const [selectedId, setSelectedId] = useState(null);
  // const [anchorEl, setAnchorEl] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModal] = useState(false);
  //!End Of  State ALl the Delete And Edit

  //! function of  ALl the Delete And Edit
  // const openMenu = (e, id) => {
  //   setAnchorEl(e.currentTarget);
  //   setSelectedId(id);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  // console.log(page);
  const openDeleteModal = (id) => {
    setIsDeleteModal(true);
    setSelectedId(id);
    // handleMenuClose();
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
    setSelectedId(null);
  };

  const handleDelete = () => {
    // console.log(selectedId);
    dispatch(
      action.deleteInvoiceRequest({
        company_id,
        data: selectedId,
        page,
      })
    );
    closeDeleteModal();
  };
  // ! end of function for  ALl the Delete And Edit
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
                  <TableCell
                    align="left"
                    style={{ maxWidth: "290px", overflow: "hidden" }}
                  >
                    {item?.invoice}
                  </TableCell>
                  <TableCell align="left">${item.total}</TableCell>
                  <TableCell align="left">{item?.status}</TableCell>
                  <TableCell align="left">
                    {moment(item.due_date).format("l")}
                  </TableCell>
                  <TableCell align="center">
                    <a href={item?.file} download>
                      <DownloadIcon sx={{ color: "#F67A32" }} />
                    </a>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      // size="small"
                      onClick={() => openDeleteModal(item?._id)}
                    >
                      <IoTrashOutline className="text-lg text-red-500" />
                    </IconButton>
                    {/* <Menu
                      anchorEl={anchorEl}
                      handleMenuClose={handleMenuClose}
                      //* New feature to detect whether to show Edit or not
                      showEdit={false}
                      openDeleteModal={openDeleteModal}
                    /> */}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {totalPage && (
        <div className="mt-4 pb-5">
          <Stack spacing={2}>
            <Pagination
              count={totalPage}
              // variant="outlined"
              onChange={handleChangePage}
              // color="primary"
              page={page}
              sx={{
                "& .Mui-selected": {
                  backgroundColor: "#F27931 !important",
                  color: "white",
                  border: "none",
                },
                "& .MuiPaginationItem-page ": {
                  bgcolor: "#B4AFAF",
                  color: "white",
                  border: "none",
                },
                "& .MuiPaginationItem-previousNext": {
                  border: "none",
                },
                "& .MuiPaginationItem-root": {
                  "&:hover": {
                    backgroundColor: "#B4AFAF !important",
                  },
                },
              }}
            />
          </Stack>
        </div>
      )}

      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDelete={handleDelete}
      />
    </Paper>
  );
}
