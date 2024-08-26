import { useState, createContext } from 'react'

export interface EditorFile {
  name: string
  language: string
  value: string
}

const defaultFile: EditorFile = {
  name: 'script.js',
  language: 'javascript',
  value: 'someJSCodeExample'
}

interface EditorContextInterface {
  fileName: EditorFile
  setFileName: React.Dispatch<React.SetStateAction<EditorFile>>
}

const initialEditorContext: EditorContextInterface = {
  fileName: defaultFile,
  setFileName: () => null
}

export const EditorContext = createContext<EditorContextInterface>(initialEditorContext)

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [fileName, setFileName] = useState<EditorFile>(defaultFile)

  return (
    <EditorContext.Provider
      value={{
        fileName,
        setFileName
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}
