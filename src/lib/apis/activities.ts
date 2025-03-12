import axiosClientHelper from '../network/axiosClientHelper';
import { safeResponse } from '../network/safeResponse';
import { ActivitiesResponse, ActivitiesResponseSchema, GetActivitiesParmas } from '../types/activities';

export const getActivities = async (params: GetActivitiesParmas) => {
  const response = await axiosClientHelper.get<ActivitiesResponse>('/activities', { params });
  return safeResponse(response.data, ActivitiesResponseSchema);
};
