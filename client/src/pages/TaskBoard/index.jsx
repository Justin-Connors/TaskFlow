import React, { useState } from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import KanbanLane from "../../components/KanbanLane/index";
import AddCard from "../../components/addCard/index";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styles from "./TaskBoard.module.css";
import KanbanCard from "../../components/KanbanCard/index";

const KanbanBoard = (props) => {
  const [todoItems, setTodoItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);
  const [uItems, setuItems] = useState([]);

  const addNewCard = (title) => {
    setuItems([...uItems, { title }]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      if (over.id === "To Do") {
        setTodoItems([...todoItems, active.data]);
      } else if (over.id === "In Progress") {
        setInProgressItems([...inProgressItems, active.data]);
      } else if (over.id === "Done") {
        setDoneItems([...doneItems, active.data]);
      }
    }
  };

  const handleDragCancel = (event) => {
    const { active } = event;
    setuItems(uItems.filter((item) => item.title !== active.data.title));
  };

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <Grid
        container
        spacing={2}
        className={styles.sizeFix}
        sx={{
          maxWidth: "98%",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Add New Card <AddCard addNewCard={addNewCard} />
          </Typography>
          <KanbanCard />
        </Grid>
        <KanbanLane title="To Do" items={todoItems} />
        <KanbanLane title="In Progress" items={inProgressItems} />
        <KanbanLane title="Done" items={doneItems} />
      </Grid>
    </DndContext>
  );
};

export default KanbanBoard;
