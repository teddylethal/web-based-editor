import { EditorFile, EditorFolder } from 'src/types/folder.type'

export const files: EditorFile[] = [
  {
    name: 'script.js',
    language: 'javascript',
    content: 'someJSCodeExample'
  },
  {
    name: 'style.css',
    language: 'css',
    content: 'someCSSCodeExample'
  },
  {
    name: 'index.html',
    language: 'html',
    content: 'someHTMLCodeExample'
  }
]

export const folders: EditorFolder[] = [
  {
    name: 'folder 1',
    folders: [],
    files: files,
    children: 3
  },
  {
    name: 'folder 2',
    folders: [],
    files: [...files],
    children: 3
  },
  {
    name: 'folder 3',
    folders: [],
    files: [],
    children: 3
  }
]
