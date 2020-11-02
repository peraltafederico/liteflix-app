import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react'
import { Genre } from '../interfaces'

interface Props {
  children: React.ReactNode
}

interface Context {
  genres: Genre[]
  setGenres: Dispatch<SetStateAction<Genre[]>>
}

export const AppContext = createContext({} as Context)

export const AppContextProvider = ({ children }: Props): ReactElement => {
  const [genres, setGenres] = useState([] as Genre[])

  const values = {
    genres,
    setGenres,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}
