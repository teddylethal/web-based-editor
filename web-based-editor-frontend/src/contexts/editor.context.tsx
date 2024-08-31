import { useState, createContext } from 'react'
import { EditorFile } from 'src/types/folder.type'

const defaultFile: EditorFile = {
  name: 'script.js',
  language: 'javascript',
  content: 'someJSCodeExample'
}

interface EditorContextInterface {
  currentFile: EditorFile
  setCurrentFile: React.Dispatch<React.SetStateAction<EditorFile>>
  currenFolderNames: string[]
  setCurrentFolderNames: React.Dispatch<React.SetStateAction<string[]>>
}

const initialEditorContext: EditorContextInterface = {
  currentFile: defaultFile,
  setCurrentFile: () => null,
  currenFolderNames: [],
  setCurrentFolderNames: () => null
}

export const EditorContext = createContext<EditorContextInterface>(initialEditorContext)

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentFile, setCurrentFile] = useState<EditorFile>(initialEditorContext.currentFile)
  const [currenFolderNames, setCurrentFolderNames] = useState<string[]>(initialEditorContext.currenFolderNames)

  return (
    <EditorContext.Provider
      value={{
        currentFile,
        setCurrentFile,
        currenFolderNames,
        setCurrentFolderNames
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}
