import { createContext, ReactNode } from 'react';

const BaseUrlContext = createContext<string>('');

interface BaseUrlProviderProps {
    children: ReactNode;
  }

const BaseUrlProvider: React.FC<BaseUrlProviderProps> = ({ children }) => {
    const baseUrl: string = "https://win24-assignment.azurewebsites.net/api";
    return (
      <BaseUrlContext.Provider value={baseUrl}>
        {children}
      </BaseUrlContext.Provider>
    );
  };

  export { BaseUrlContext, BaseUrlProvider }; 

