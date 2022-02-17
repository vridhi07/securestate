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
import DeleteModal from "../Common/DeleteModal";
import moment from "moment";
import { IoTrashOutline } from "react-icons/io5";
export default function SBOMTab({
  users = [],
  openDeleteModal,
  handleDelete,
  isDeleteModalOpen,
  closeDeleteModal,
}) {
  return (
    <div className="mx-auto flex w-full flex-col">
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
            {users &&
              users.map((user) => {
                const { company_id, email, name, role, _id, lastLogin, title } =
                  user;
                return (
                  <TableRow
                    key={_id}
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
                      {name}
                    </TableCell>
                    <TableCell align="center" colSpan={2}>
                      {role}
                    </TableCell>
                    <TableCell align="center">
                      {company_id?.company_name}
                    </TableCell>
                    <TableCell align="center">{title}</TableCell>
                    <TableCell align="center">{email}</TableCell>
                    <TableCell align="center">
                      {lastLogin
                        ? moment(lastLogin).format("l")
                        : "22 / 12 / 2022"}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="error"
                        onClick={() => openDeleteModal(_id)}
                      >
                        <IoTrashOutline />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDelete={handleDelete}
      />
    </div>
  );
}
