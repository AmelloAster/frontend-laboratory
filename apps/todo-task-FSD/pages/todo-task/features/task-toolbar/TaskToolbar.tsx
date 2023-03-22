import type { FC, PropsWithChildren } from 'react';
import clsx from 'ui/clsx';
import todoTaskStore from '../../entities/model/task';
import { TaskFilterState } from '../../entities/enums/task';

interface TaskToolbarProps {
  total?: number;
}

const TaskFilterStateTitle = {
  [TaskFilterState.All]: 'All',
  [TaskFilterState.Active]: 'Active',
  [TaskFilterState.Completed]: 'Completed',
};

const FilterButton: FC<
  PropsWithChildren<{
    state: TaskFilterState;
    isActive: boolean;
    changeCurrentFilterState(state: TaskFilterState): void;
  }>
> = ({ isActive, state, changeCurrentFilterState }) => (
  <span
    className={clsx('transition-all', { 'text-black': isActive, 'text-gray-400': !isActive })}
    onClick={() => changeCurrentFilterState(state)}
  >
    {TaskFilterStateTitle[state]}
  </span>
);

const TaskToolbar: FC<TaskToolbarProps> = ({ total = 0 }) => {
  const currentFilterState = todoTaskStore((state) => state.currentFilterState);
  const changeCurrentFilterState = todoTaskStore((state) => state.changeCurrentFilterState);

  const handleCheckCurrentFilterState = (state: TaskFilterState) => {
    return state === currentFilterState;
  };

  return (
    <div className='bg-slate-50 rounded flex justify-between items-center p-2'>
      <span>{total} items</span>
      <div className='flex gap-4 cursor-pointer'>
        <FilterButton
          state={TaskFilterState.All}
          isActive={handleCheckCurrentFilterState(TaskFilterState.All)}
          changeCurrentFilterState={changeCurrentFilterState}
        />
        <FilterButton
          state={TaskFilterState.Active}
          isActive={handleCheckCurrentFilterState(TaskFilterState.Active)}
          changeCurrentFilterState={changeCurrentFilterState}
        />
        <FilterButton
          state={TaskFilterState.Completed}
          isActive={handleCheckCurrentFilterState(TaskFilterState.Completed)}
          changeCurrentFilterState={changeCurrentFilterState}
        />
      </div>
    </div>
  );
};
export default TaskToolbar;
