import { useQuery } from '@tanstack/react-query';
import { getActivities } from '@/lib/apis/activities';
import { GetActivitiesParmas, ActivitiesResponse } from '@/lib/types/activities';

export const useActivities = (params: GetActivitiesParmas) => {
  return useQuery<ActivitiesResponse>({
    queryKey: ['activities', params],
    queryFn: () => getActivities(params),
    enabled: !!params,
  });
};
