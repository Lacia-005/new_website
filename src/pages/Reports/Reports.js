import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import PropTypes from "prop-types";
import { Done } from "@mui/icons-material";
import { userRows } from "../../tempUserData";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import "./report.css";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <div className="reWrapper">
        {/* <button className="geButton" >Generate</button> */}
        <a className="geButton" href={"longitudinal_alison.pdf"} download="Alison.pdf">
          Generate
        </a>
        <TextField
          variant="standard"
          value={props.value}
          onChange={props.onChange}
          style={{ order: 2 }}
          placeholder="Search…"
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" />,
            endAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: props.value ? "visible" : "hidden" }}
                onClick={props.clearSearch}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
          sx={{
            width: {
              xs: 1,
              sm: "auto",
            },
            m: (theme) => theme.spacing(1, 0.5, 1.5),
            "& .MuiSvgIcon-root": {
              mr: 0.5,
            },
            "& .MuiInput-underline:before": {
              borderBottom: 1,
              borderColor: "divider",
            },
          }}
        />
      </div>
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function Reports() {
  // const [data, setData] = useState(userRows);

  //   const handleDelete = (id) => {
  //     setData(data.filter((item) => item.id !== id));
  //   };
  let navigate = useNavigate();
  const routeChange = (dataRow) =>{
    let path = "/tableau";
    navigate(path, { state: { link: dataRow.link } });
  };

  const columns = [
    //  { field: "id", headerName: "ID", width: 90 },
    {
      field: "date",
      headerName: "Date",
      width: 150,
      // editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      width: 150,
      // editable: true,
    },
    {
      field: "name",
      headerName: "Consulter",
      width: 150,
      // editable: true,
    },
    {
      field: "code",
      headerName: "Code",
      width: 150,
      // editable: true,
    },
    {
      field: "userName",
      headerName: "Patient's Name/ID",
      width: 200,
      // editable: true,
      // renderCell: (params) => {
      //   return (
      //     <div className="userListUser">
      //       <img src={params.row.avatar} alt="" className="userListImg" />
      //       {params.row.userName}
      //     </div>
      //   );
      // },
    },
    {
      field: "risk",
      headerName: "Depression Risk",
      width: 150,
      // editable: true,
      // renderCell: (params) => {
      //   // return <>{params.row.risk ? <Done /> : null}</>;
      // },
    },
    {
      field: "suicide",
      headerName: "Suicide Detected",
      width: 150,
      // editable: true,
      // renderCell: (params) => {
      //   // return <>{params.row.risk ? <Done /> : null}</>;
      // },
    },
    //  {
    //    field: "action",
    //    headerName: "Action",
    //    width: 150,
    //    // editable: true,
    //    renderCell: (params) => {
    //      return (
    //        <>
    //          <Link to={"/user/" + params.row.id}>
    //            <button className="userListEdit">Edit</button>
    //          </Link>
    //          <DeleteOutline
    //            className="userListDelete"
    //            onClick={() => handleDelete(params.row.id)}
    //          />
    //        </>
    //      );
    //    },
    //  },
  ];
  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(userRows);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = userRows.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(userRows);
  }, []);

  return (
    <div className="userList">
      <Box sx={{ height: 400, width: 1, fontFamily: "Cambria" }}>
        <DataGrid
          components={{ Toolbar: QuickSearchToolbar }}
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          //   checkboxSelection
          onCellClick={(params) => routeChange(params.row)}
          style={{ cursor: "pointer", fontFamily: "Cambria", height: "100vh" }}
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event) => requestSearch(event.target.value),
              clearSearch: () => requestSearch(""),
            },
          }}
        />
      </Box>
    </div>
  );
}
