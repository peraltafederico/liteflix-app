import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react'

interface Props {
  children: React.ReactNode
}

interface Context {
  genres: any[]
  setGenres: Dispatch<SetStateAction<never[]>>
}

export const AppContext = createContext({} as Context)

export const AppContextProvider = ({ children }: Props): ReactElement => {
  const [genres, setGenres] = useState([])

  const values = {
    genres,
    setGenres,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
