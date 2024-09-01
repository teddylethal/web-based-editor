import React, { useContext, useState } from 'react'
import { EditorContext } from 'src/contexts/editor.context'
import { files, folders } from '../data'
import FolderComponent from 'src/components/common/FolderComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRotateRight, faFileCirclePlus, faFolderPlus, faL } from '@fortawesome/free-solid-svg-icons'
import data from '../data.json'
import { EditorFolder, ExtendedEditorFolder } from 'src/types/folder.type'
import useClickOutside from 'src/hooks/useClickOutside'

export default function EditorSidebar() {
  const { currenLocation } = useContext(EditorContext)
  // const [addingToRoot, setAddingToRoot] = useState(false)

  const [folders, setFolders] = useState<ExtendedEditorFolder[]>(
    data.map((folder) => ({
      ...folder,
      isFocus: false
    }))
  )

  const { ref, visible: addingToRoot, setVisible: setAddingToRoot } = useClickOutside(false)

  // ! Handle add new file
  const handleAddFile = () => {
    let found = false
    const newFolders = folders.map((folder) => {
      if (
        folder.location.length === currenLocation.length &&
        folder.location.every((value, index) => value === currenLocation[index])
      ) {
        found = true
        return {
          ...folder,
          isFocus: true
        }
      } else {
        return folder
      }
    })
    setFolders(newFolders)
    if (!found) setAddingToRoot(true)
  }

  return (
    <div className=''>
      <div className='flex space-x-2 items-center justify-end'>
        <button onClick={handleAddFile} className=''>
          <FontAwesomeIcon icon={faFileCirclePlus} />
        </button>
        <button>
          <FontAwesomeIcon icon={faFolderPlus} />
        </button>
        <button>
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
      </div>
      <div className='flex flex-col'>
        {addingToRoot && (
          <div ref={ref} className=''>
            {/*  eslint-disable-next-line jsx-a11y/no-autofocus */}
            <input name='title' placeholder='New file' className='ml-4 px-0.5 border ' autoFocus={true} />
          </div>
        )}

        {folders.map((folder) => (
          <FolderComponent key={folder.name} folder={folder} />
        ))}
      </div>
    </div>
  )
}
