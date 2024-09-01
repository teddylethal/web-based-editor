import { useState, createContext } from 'react'
import { EditorFile } from 'src/types/folder.type'

const defaultFile: EditorFile = {
  name: 'script.js',
  location: [''],
  language: 'javascript',
  content: 'someJSCodeExample'
}

interface EditorContextInterface {
  currentFile: EditorFile
  setCurrentFile: React.Dispatch<React.SetStateAction<EditorFile>>
  currenLocation: string[]
  setCurrentLocation: React.Dispatch<React.SetStateAction<string[]>>
}

const initialEditorContext: EditorContextInterface = {
  currentFile: defaultFile,
  setCurrentFile: () => null,
  currenLocation: [],
  setCurrentLocation: () => null
}

export const EditorContext = createContext<EditorContextInterface>(initialEditorContext)

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentFile, setCurrentFile] = useState<EditorFile>(initialEditorContext.currentFile)
  const [currenFolderNames, setCurrentFolderNames] = useState<string[]>(initialEditorContext.currenLocation)

  return (
    <EditorContext.Provider
      value={{
        currentFile,
        setCurrentFile,
        currenLocation: currenFolderNames,
        setCurrentLocation: setCurrentFolderNames
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}
