import { HTMLInputTypeAttribute, ReactNode } from 'react'

export interface CustomImage {
  imgUrl: string
  alt: string
}

export interface ErrorRespone {
  message: string
  error_key: string
  status_code: number
  log: string
}

export interface SuccessResponse<Data> {
  success: 'true'
  data: Data
}

export type NoUndefinedField<T> = {
  [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>>
}

export interface NavigateItem {
  name: string
  url: string
}

export interface InputField {
  name: string
  title: string
  svgData: ReactNode
  type?: HTMLInputTypeAttribute
  errorMsg?: string
}
