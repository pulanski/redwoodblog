import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        author: 'String',
        body: 'String',
        post: { create: { title: 'String', content: 'String' } },
      },
    },
    two: {
      data: {
        author: 'String',
        body: 'String',
        post: { create: { title: 'String', content: 'String' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
