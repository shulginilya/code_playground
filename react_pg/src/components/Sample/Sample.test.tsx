import { render, screen } from '@testing-library/react';

import { Sample } from './Sample';

describe('Sample', () => {
    it('should render sample component', () => {
        render(<Sample />);
        const sampleWrapper = screen.getByTestId('sample_root');
        expect(sampleWrapper).toBeInTheDocument();
    });
});
