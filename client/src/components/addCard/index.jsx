import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function AddCard({ addCard }) {
  const [title, setTitle] = useState("");

  return (
    <Grid>
      <Typography>Card Title</Typography>
      <TextField
        id="outlined-basic"
        label="Card Title"
        variant="outlined"
        type="text"
        flex="4"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <IconButton
        onClick={() => {
          setTitle("");
          addCard(title);
        }}
      >
        <Tooltip title="Add Card">
          <AddCircleOutlineOutlinedIcon />
        </Tooltip>
      </IconButton>
    </Grid>
  );
}
