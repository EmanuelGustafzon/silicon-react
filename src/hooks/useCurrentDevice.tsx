import { useContext } from 'react';
import ViewWidthContext from '../contexts/viewWidthContext';
import { IViewWidthContextType } from '../types/IviewWidthContext';

type deviceType = 'mobile' | 'tablet' | 'desktop';

const useCurrentDevice = () => {
    const viewWidthContext= useContext<IViewWidthContextType | undefined>(ViewWidthContext)
    if (viewWidthContext === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    const { viewWidth } = viewWidthContext;

    let currentDevice: deviceType = 'mobile';
    if (viewWidth >= 1340) {
        currentDevice = 'desktop';
    } else if (viewWidth >= 720 && viewWidth < 1340) {
        currentDevice = 'tablet';
    }

    return currentDevice
}

export default useCurrentDevice;