import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

export default function validateResource(schema: AnyZodObject) {
  return function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse({
        body: req.body,
      })
      next()
    } catch (e: any) {
      return res.status(400).send(e.errors)
    }
  }
}
