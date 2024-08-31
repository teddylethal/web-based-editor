export interface EditorFile {
  name: string
  language: string
  content: string
}

export interface EditorFolder {
  name: string
  folders: EditorFolder[]
  files: EditorFile[]
  children: number
}
