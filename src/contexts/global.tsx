import { createContext, useState } from 'react';

export const GlobalContext = createContext({
  podcastDescription: '',
  setPodcastDescription: (podcast: string) => {},
  pageLoading: false,
  setPageLoading: (loading: boolean) => {},
});

export interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [podcastDescription, setPodcastDescription] = useState('');
  const [pageLoading, setPageLoading] = useState(false);

  return (
    <GlobalContext.Provider
      value={
        {
          podcastDescription,
          setPodcastDescription,
          pageLoading,
          setPageLoading,
        }
      }
    >
      {children}
    </GlobalContext.Provider>
  )
};
