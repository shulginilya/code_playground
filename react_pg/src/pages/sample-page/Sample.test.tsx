import { render, screen } from '@testing-library/react';

import { Sample } from '@/pages';

jest.mock('@/appStore/hooks', () => ({
    ...jest.requireActual('@/appStore/hooks'),
    useAppDispatch: () => jest.fn(),
    useAppSelector: () => jest.fn()
}));

describe('HomePage', () => {
    it('should render the page', () => {
        render(<Sample />);
        const samplePageWrapper = screen.getByTestId('samplepage_root');
        expect(samplePageWrapper).toBeInTheDocument();
    });
});

