import { render, screen } from '@testing-library/react';

import { Home } from './Home';

describe('HomePage', () => {
    it('should render the page', () => {
        render(<Home />);
        const homePageWrapper = screen.getByTestId('homepage_root');
        expect(homePageWrapper).toBeInTheDocument();
    });
});