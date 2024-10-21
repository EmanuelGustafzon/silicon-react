import { createContext } from 'react';
import { viewWidthContextType } from '../types/viewWidthContext';

const ViewWidthContext = createContext<viewWidthContextType | undefined>(undefined);

export default ViewWidthContext