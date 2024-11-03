import { createContext } from 'react';
import { IViewWidthContext } from '../types/IviewWidthContext';

const ViewWidthContext = createContext<IViewWidthContext | undefined>(undefined);

export default ViewWidthContext