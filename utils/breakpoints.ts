import { ThemedStyledProps } from 'styled-components'

export const mobile = (props: ThemedStyledProps<any, any>) =>
  props.theme.breakpoints.mobile

export const tablet = (props: ThemedStyledProps<any, any>) =>
  props.theme.breakpoints.tablet

export const desktop = (props: ThemedStyledProps<any, any>) =>
  props.theme.breakpoints.desktop
