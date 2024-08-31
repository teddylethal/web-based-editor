import React, { useContext } from 'react'
import { EditorContext } from 'src/contexts/editor.context'
import { files, folders } from '../data'
import FolderComponent from 'src/components/common/FolderComponent'

export default function EditorSidebar() {
  const {} = useContext(EditorContext)

  return (
    <div className='flex flex-col'>
      {folders.map((folder) => (
        <FolderComponent key={folder.name} folder={folder} parentNames={[folder.name]} />
      ))}
    </div>
  )
}
