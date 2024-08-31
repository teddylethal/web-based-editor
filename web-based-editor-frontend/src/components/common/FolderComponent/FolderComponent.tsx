import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { EditorContext } from 'src/contexts/editor.context'
import { EditorFile, EditorFolder } from 'src/types/folder.type'

interface Props {
  parentNames: string[]
  folder: EditorFolder
}

export default function FolderComponent({ parentNames, folder }: Props) {
  const { setCurrentFile, currentFile, currenFolderNames, setCurrentFolderNames } = useContext(EditorContext)

  const [extending, setExtending] = useState(false)

  const handleOpenFiles = (file: EditorFile) => () => {
    setCurrentFolderNames([...parentNames])
    setCurrentFile(file)
  }

  return (
    <div className=''>
      <button
        onClick={() => {
          setExtending(!extending)
        }}
        className='px-4 py-1'
      >
        {folder.name}
      </button>
      {extending && (
        <div className='flex flex-col items-start'>
          {folder.files.map((file) => {
            let isActive = file.name == currentFile.name

            if (parentNames.length != currenFolderNames.length) {
              isActive = false
            } else {
              for (let index = 0; index < parentNames.length; index++) {
                const ele = parentNames[index]
                if (ele != currenFolderNames[index]) {
                  isActive = false
                  break
                }
              }
            }

            return (
              <button
                key={file.name}
                className={classNames('py-1 w-full text-start pl-8', {
                  'bg-slate-300': isActive
                })}
                onClick={handleOpenFiles(file)}
              >
                {file.name}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
