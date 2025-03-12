import axiosClientHelper from '../network/axiosClientHelper';
import { GetMynotificationsParams, myNotifictaionSchema } from '../types/myNotification';

export const getMyNotifications = async (params: GetMynotificationsParams) => {
  const response = await axiosClientHelper.get('/my-notifications', { params });
  return myNotifictaionSchema.parse(response.data);
};
