import { object, string, TypeOf } from 'zod'

const payload = {
  body: object({
    title: string({
      required_error: 'Title is required',
    }),
    description: string({
      required_error: 'Description is required',
    }),
  }),
}

export const createTaskSchema = object({
  ...payload,
})

export type CreateTaskInput = TypeOf<typeof createTaskSchema>
