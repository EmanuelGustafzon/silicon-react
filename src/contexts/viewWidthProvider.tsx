import { useState, ReactNode, useEffect } from 'react';
import ViewWidthContext from './viewWidthContext';

interface viewWidthProviderProps {
    children: ReactNode;
  }

const ViewWidthProvider: React.FC<viewWidthProviderProps> = ({ children }) => {
    const [viewWidth, setViewWidth]  = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setViewWidth(window.innerWidth);
          };
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    return (
      <ViewWidthContext.Provider value={{viewWidth, setViewWidth}}>
        {children}
      </ViewWidthContext.Provider>
    );
  };

export default ViewWidthProvider;