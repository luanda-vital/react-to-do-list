import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { cx } from "class-variance-authority";

import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import InputText from "../components/input-text";

import { TaskState, type Task } from "../models/task";
import useTask from "../hooks/use-task";

import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";

interface TaskItemProps {
  task: Task
}

export default function TaskItem({task}: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);

  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const { updateTask, updateTaskStatus, deleteTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id)
    };

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleSaveTask(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    updateTask(task.id, {title: taskTitle})
    setIsEditing(false);
  }

  function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    updateTaskStatus(task.id, checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <Card size="md">
      {!isEditing ?
        <div className="flex items-center gap-3">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text className={cx("flex-1", {
            "line-through": task?.concluded,
          })}>
            {task?.title}
          </Text>

          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
            />

            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div> :
        <form
          onSubmit={handleSaveTask}
          className="flex items-center gap-3"
        >
          <InputText
            className="flex-1"
            value={taskTitle}
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />

          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />

            <ButtonIcon
              type="submit"
              icon={CheckIcon}
              variant="primary"
              />
          </div>
        </form>
      }
    </Card>
  )
}