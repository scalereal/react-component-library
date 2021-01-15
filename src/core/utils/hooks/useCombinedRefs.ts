import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useCombinedRefs = <T>(...refs: any[]) => {
    const targetRef = React.useRef<T>();

    React.useEffect(() => {
        refs.forEach(ref => {
            if (!ref) return;

            if (typeof ref === 'function') {
                ref(targetRef.current);
            } else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);

    return targetRef;
};
