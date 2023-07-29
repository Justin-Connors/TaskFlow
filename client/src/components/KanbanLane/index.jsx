import React from "react";
import { useDroppable } from "@dnd-kit/core";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KanbanCard from "../KanbanCard";
import Typography from "@mui/material/Typography";

const KanbanLane = ({ title, items }) => {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      <Box
        ref={setNodeRef}
        sx={{
          p: 2,
          minHeight: 200,
          bgcolor: "inherit",
          border: "1px dashed grey",
        }}
      >
        {items.map(({ title: cardTitle }, key) => (
          <KanbanCard title={cardTitle} key={key} index={key} parent={title} />
        ))}
      </Box>
    </Grid>
  );
};

export default KanbanLane;
