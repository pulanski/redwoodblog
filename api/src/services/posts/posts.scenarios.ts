import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        content: 'String',
        author: {
          create: {
            email: 'String8999607',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        title: 'String',
        content: 'String',
        author: {
          create: {
            email: 'String5540724',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
