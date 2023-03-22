import { create } from 'libs/zustand';
import type { TaskItem } from '../../api/models';
import { TaskFilterState } from '../enums/task';

interface TodoTaskState {
  list: TaskItem[];
  currentFilterState: TaskFilterState;

  setList(data: TaskItem[]): void;
  changeCurrentFilterState(state: TaskFilterState): void;
  updateTaskStatusById(id: number, state: boolean): void;
}

const todoTaskStore = create<TodoTaskState>((set, get) => ({
  list: [],
  currentFilterState: TaskFilterState.All,
  setList: (data) => {
    set({ list: data });
  },
  changeCurrentFilterState: (state) => {
    set({ currentFilterState: state });
  },
  updateTaskStatusById: (id, state) => {
    let list: TaskItem[] = get().list;
    list.forEach((i) => {
      if (i.id === id) {
        i.completed = state;
      }
    });
    set({ list });
  },
  resetAllState: () => {
    set({
      currentFilterState: TaskFilterState.All,
      list: [],
    });
  },
}));

export default todoTaskStore;
