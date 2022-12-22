import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
  numberOfDoneTasks: 0,
  numberOfUndoneTasks: 0,
  lastState: null,
  sortTasks: false,
};

const todoListSlice = createSlice({
  name: "todoList",
  initialState: initialState,
  reducers: {
    ADD_TASK: (state, action) => {
      const { payload } = action;
      if (payload) {
        const newTask = {
          name: `${payload.split("")[0].toUpperCase()}${payload.slice(1)}`,
          isDone: false,
        };
        const newTab = [...state.tasks, newTask];
        state.numberOfUndoneTasks += 1;
        state.tasks = newTab;
      } else {
        return;
      }
    },
    REMOVE_TASK: (state, action) => {
      const { payload } = action;
      if (payload.isDone) {
        state.numberOfDoneTasks -= 1;
      } else {
        state.numberOfUndoneTasks -= 1;
      }
      state.tasks = state.tasks.filter((elem) => elem.name !== payload.name);
    },
    TOGGLE_TASK: (state, action) => {
      const { payload } = action;
      state.tasks[payload.index].isDone = !state.tasks[payload.index].isDone;
      if (payload.isDone) {
        state.numberOfDoneTasks--;
        state.numberOfUndoneTasks++;
      } else {
        state.numberOfDoneTasks++;
        state.numberOfUndoneTasks--;
      }
    },
    RESET: (state, action) => {
      state.tasks = [];
      state.numberOfDoneTasks = 0;
      state.numberOfUndoneTasks = 0;
      state.lastState = null;
      state.sortTasks = false;
    },
    TOGGLE_SORT_TASKS: (state, action) => {
      state.sortTasks = !state.sortTasks;
    },
    UNDO_LAST_EVENT: (state, action) => {
      const { payload } = action;
    },
  },
});
console.log(todoListSlice);

export default todoListSlice.reducer;

export const {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  RESET,
  TOGGLE_SORT_TASKS,
  UNDO_LAST_EVENT,
} = todoListSlice.actions;
