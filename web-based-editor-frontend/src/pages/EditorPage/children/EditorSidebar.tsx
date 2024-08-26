import React, { useContext } from 'react'
import { EditorContext, EditorFile } from 'src/contexts/editor.context'

const files: EditorFile[] = [
  {
    name: 'script.js',
    language: 'javascript',
    value: 'someJSCodeExample'
  },
  {
    name: 'style.css',
    language: 'css',
    value: 'someCSSCodeExample'
  },
  {
    name: 'index.html',
    language: 'html',
    value: 'someHTMLCodeExample'
  }
]

export default function EditorSidebar() {
  const { setFileName } = useContext(EditorContext)

  return (
    <div className='flex flex-col'>
      {files.map((file) => (
        <button key={file.name} className='' onClick={() => setFileName(file)}>
          {file.name}
        </button>
      ))}
    </div>
  )
}
