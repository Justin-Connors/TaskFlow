import React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Tooltip from "@mui/material/Tooltip";

const addCard = () => {
  return (
    <IconButton size="large" color="inherit">
      <Tooltip title="Create Task">
        <AddCircleOutlineOutlinedIcon />
      </Tooltip>
    </IconButton>
  );
};

export default addCard;
