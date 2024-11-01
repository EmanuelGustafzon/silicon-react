import { useContext, useMemo } from 'react';
import ViewWidthContext from '../contexts/viewWidthContext';
import { IViewWidthContextType } from '../types/IviewWidthContext';

type deviceType = 'mobile' | 'tablet' | 'desktop';

const useCurrentDevice = () => {

    const viewWidthContext= useContext<IViewWidthContextType | undefined>(ViewWidthContext)
    
    if (viewWidthContext === undefined) throw new Error('useTheme must be used within a ThemeProvider');

    const { viewWidth } = viewWidthContext;

    const currentDevice = useMemo((): deviceType => {
        if (viewWidth >= 1340) {
            return 'desktop';
        } else if (viewWidth >= 720 && viewWidth < 1340) {
            return 'tablet';
        } else {
            return 'mobile';
        }
    }, [viewWidth])

    return currentDevice
}

export default useCurrentDevice;