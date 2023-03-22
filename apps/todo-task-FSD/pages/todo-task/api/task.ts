import { useQuery } from 'libs/react-query';
import { apiInstance } from './base';
import type { TaskItem } from './models';
import type { GetTasksListService } from './models';

const BASE_URL = '/todos';

export const useGetTasksListService: GetTasksListService.Service = (params, opts) =>
  useQuery<TaskItem[]>(
    [BASE_URL, params],
    async () => {
      const { data } = await apiInstance.get<TaskItem[]>(BASE_URL, { params });
      return data;
    },
    opts,
  );
