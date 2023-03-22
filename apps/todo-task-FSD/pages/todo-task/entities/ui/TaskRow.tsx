import type { FC, PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { useMemo } from 'react';
import clsx from 'ui/clsx';
import { TaskItem } from '../../api/models';

interface TaskRowProps {
  data: TaskItem;
  link?: string;
  before?: ReactNode;
}

const TaskRow: FC<PropsWithChildren<TaskRowProps>> = ({ data, link, before }) => {
  const title = useMemo(() => {
    return link ? <Link href={link}>{data.title}</Link> : data.title;
  }, [link, data]);

  return (
    <div
      className={clsx('p-2 bg-slate-50 rounded my-2 flex gap-2', {
        'opacity-50 line-through': data.completed,
      })}
    >
      {before}
      {title}
    </div>
  );
};
export default TaskRow;
