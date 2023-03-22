import { UseQueryWithParamsService } from '../../../types/http';

export interface TaskItem {
  userId: number;
  id: number;
  completed: boolean;
  title: string;
}

export namespace GetTasksListService {
  export interface Params {
    userId?: number;
    completed?: boolean | null;
  }

  export type Service = UseQueryWithParamsService<Params, TaskItem[]>;
}
