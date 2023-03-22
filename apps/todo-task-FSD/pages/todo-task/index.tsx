import { Text, Checkbox, LoadingOverlay } from '@mantine/core';
import type { FC } from 'react';
import { tw } from 'ui/typewind';
import { useGetTasksListService } from './api/task';
import type { TaskItem } from './api/models';
import todoTaskStore from './entities/model/task';
import { TaskFilterState } from './entities/enums/task';
import TaskRow from './entities/ui/TaskRow';
import TaskToolbar from './features/task-toolbar/TaskToolbar';

const ListItemView: FC<{
  task: TaskItem;
}> = ({ task }) => (
  <TaskRow
    data={task}
    link={`/todo-task/${task.id}`}
    before={<Checkbox defaultChecked={task.completed} />}
  />
);

export default function TodoTask() {
  const currentFilterState = todoTaskStore((state) => state.currentFilterState);
  const setList = todoTaskStore((state) => state.setList);
  const list = todoTaskStore((state) => state.list);

  const { isFetching } = useGetTasksListService(
    {
      completed: currentFilterState === TaskFilterState.All ? null : Boolean(currentFilterState),
    },
    {
      onSuccess: (data) => {
        setList(data);
      },
    },
  );

  return (
    <div>
      <Text className={tw.text_center.my_6} size={24}>
        FEC Architectural Todo Task
      </Text>
      <div className={tw.w_['50%'].mx_auto}>
        <div className='relative'>
          <LoadingOverlay visible={isFetching} overlayBlur={2} />
          <div className='h-96 overflow-hidden overflow-y-auto my-4'>
            {list.map((i) => (
              <ListItemView task={i} key={i.id} />
            ))}
          </div>
          <TaskToolbar total={list.length} />
        </div>
      </div>
    </div>
  );
}
