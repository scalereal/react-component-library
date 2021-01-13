export * from './types'
import { coreDefaultTheme } from './core'
import { layoutDefaultTheme } from './Layout'
import { Theme } from './types'

export const defaultTheme:Theme = { ...coreDefaultTheme, ...layoutDefaultTheme }
