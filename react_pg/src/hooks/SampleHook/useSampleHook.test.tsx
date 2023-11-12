import { renderHook } from '@testing-library/react-hooks';

import { useSampleHook } from './useSampleHook';

describe('useSampleHook', () => {
    it('should placeholder return data be specified', () => {
        const { result } = renderHook(() => useSampleHook());
        const { placeholderData, placeholderFunc } = result.current;
        expect(placeholderData).toBe('placeholder');
        expect(placeholderFunc()).toBe(10);
    });
});
