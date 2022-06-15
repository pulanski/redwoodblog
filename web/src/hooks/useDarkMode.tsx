// import { useState } from "react"

import { useMantineTheme } from '@mantine/core'

export function useDarkMode() {
  const theme = useMantineTheme()

  return theme.colorScheme === 'dark'
}
