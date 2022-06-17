import { Skeleton } from '@mantine/core'

const ArticleSkeleton = () => {
  return (
    <>
      <Skeleton height={50} mt={20} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="70%" radius="xl" />
    </>
  )
}

export default ArticleSkeleton
