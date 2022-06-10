import { Image } from '@mantine/core'

// const StyledImage = styled(Image)`

export function RedwoodLogo() {
  return (
    <>
      <Image
        width={120}
        height={120}
        src="./icon2.png"
        alt="With default placeholder"
        withPlaceholder
      />
      {/* <img src="./icon2.png" alt="" /> */}
    </>
  )
}

export default RedwoodLogo
