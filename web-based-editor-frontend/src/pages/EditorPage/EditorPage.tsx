import { Editor } from '@monaco-editor/react'
import React, { useContext } from 'react'
import EditorSidebar from './children/EditorSidebar'
import { EditorContext } from 'src/contexts/editor.context'

export default function EditorPage() {
  const { currentFile } = useContext(EditorContext)

  return (
    <div className='grid grid-cols-12 gap-2'>
      <div className='col-span-2'>
        <EditorSidebar />
      </div>
      <div className='col-span-10'>
        <Editor
          height='90vh'
          theme='vs-dark'
          path={currentFile.name}
          language={currentFile.language}
          value={currentFile.content}
          className='w-full'
        />
      </div>
    </div>
  )
}
