export interface EditorFile {
  name: string
  location: string[]
  language: string
  content: string
}

export interface EditorFolder {
  name: string
  location: string[]
  folders: EditorFolder[]
  files: EditorFile[]
  children: number
}

export interface ExtendedEditorFolder extends EditorFolder {
  isFocus: boolean
}
