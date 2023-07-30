import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const MyDraggableComponent = () => {
  const { attributes, listeners, setNodeRef, transfrom } = useDraggable({
    id: "draggable-1",
    data: {
      parent: "ToDo",
      title: "Complete blogpost.",
    },
  });
  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      styles={{ transfrom: CSS.Translate.toString(transform) }}
    >
      Drag Me!
    </div>
  );
};
