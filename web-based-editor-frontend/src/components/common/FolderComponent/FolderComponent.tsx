import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { EditorContext } from 'src/contexts/editor.context'
import useClickOutside from 'src/hooks/useClickOutside'
import { EditorFile, ExtendedEditorFolder } from 'src/types/folder.type'

interface Props {
  folder: ExtendedEditorFolder
}

export default function FolderComponent({ folder }: Props) {
  const { setCurrentFile, currentFile, currenLocation, setCurrentLocation } = useContext(EditorContext)

  const [extending, setExtending] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const { ref, visible, setVisible } = useClickOutside(folder.isFocus)

  useEffect(() => {
    setIsAdding(folder.isFocus)
    if (folder.isFocus) {
      setVisible(true)
    }
  }, [folder])

  const handleClickFolder = () => {
    setCurrentLocation([...folder.location])
    setExtending(!extending)
    console.log(currenLocation)
  }

  const handleOpenFiles = (file: EditorFile) => () => {
    setCurrentLocation([...folder.location])
    setCurrentFile(file)
  }
  // if (folder.name == 'folder 2') {
  //   console.log(folder.isFocus)
  //   console.log(isAdding)
  // }
  return (
    <div className=''>
      <button onClick={handleClickFolder} className='px-4 py-1'>
        {folder.name}
      </button>
      {extending && (
        <div className='flex flex-col items-start'>
          {isAdding && visible && (
            <div ref={ref} className=''>
              {/*  eslint-disable-next-line jsx-a11y/no-autofocus */}
              <input name='title' placeholder='New file' className='ml-8 px-0.5 border ' autoFocus={true} />
            </div>
          )}

          {folder.files.map((file) => {
            const loc = folder.location
            const isActive =
              file.name == currentFile.name &&
              loc.length == currenLocation.length &&
              loc.every((ele, index) => ele === currenLocation[index])

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
