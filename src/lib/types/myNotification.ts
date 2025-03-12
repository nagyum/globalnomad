import { z } from 'zod';

export const myNotifictaionSchema = z.object({
  cursorId: z.number(),
  notification: z.object({
    id: z.number(),
    teamId: z.string(),
    userId: z.number(),
    content: z.string(),
    createdAt: z.union([z.string(), z.date()]),
    updatedAt: z.union([z.string(), z.date()]),
    deleteAt: z.union([z.string(), z.date()]),
  }),
  totalCount: z.number(),
});

export type myNotifictaion = z.infer<typeof myNotifictaionSchema>;

export const getMyNotifictaionParamsSchema = z.object({
  cursorId: z.number().optional(),
  size: z.number().optional(),
});

export type GetMynotificationsParams = z.infer<typeof getMyNotifictaionParamsSchema>;
