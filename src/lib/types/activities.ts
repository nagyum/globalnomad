import { z } from 'zod';

export const activitiesSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  address: z.string(),
  bannerImageUrl: z.string(),
  rating: z.number(),
  reviewCount: z.number(),
  createdAt: z.union([z.string(), z.date()]),
  updatedAt: z.union([z.string(), z.date()]),
});

export const ActivitiesResponseSchema = z.object({
  activities: z.array(activitiesSchema),
  totalCount: z.number(),
});

export type ActivitiesResponse = z.infer<typeof ActivitiesResponseSchema>;

export const getActivitiesSchema = z.object({
  method: z.string(),
  cursorId: z.number().optional(),
  category: z.string().optional(),
  keyword: z.string().optional(),
  sort: z.string().optional(),
  page: z.number().optional(),
  size: z.number().optional(),
});

export type GetActivitiesParmas = z.infer<typeof getActivitiesSchema>;
