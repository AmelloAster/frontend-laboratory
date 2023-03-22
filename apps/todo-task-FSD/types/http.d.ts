import type {
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'libs/react-query';

declare type UseQueryWithParamsService<P = {}, R = {}> = (
  params: P,
  opts?: UseQueryOptions<R>,
) => UseQueryResult<R>;

declare type UseQueryWithNoParamsService<R = {}> = (opts?: UseQueryOptions<R>) => UseQueryResult<R>;

declare type UseMutationService<R = {}, P = {}, E = {}> = (
  options?: UseMutationOptions<R, E, P>,
) => UseMutationResult<R, E, P>;
