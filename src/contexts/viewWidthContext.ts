import { createContext } from 'react';
import { IViewWidthContextType } from '../types/IviewWidthContext';

const ViewWidthContext = createContext<IViewWidthContextType | undefined>(undefined);

export default ViewWidthContext