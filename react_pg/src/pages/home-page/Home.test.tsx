import { render, screen } from '@testing-library/react';

import { Home } from '@/pages';
import { configureStore } from '@reduxjs/toolkit';

import { Status, selectData } from "@/appStore/reducers/sampleSlice";
import { Provider } from 'react-redux';

import type { PartialRootState } from '@/appStore/store';
import type { MockStore, MockStoreCreator } from 'redux-mock-store';

jest.mock('@/appStore/hooks', () => ({
    ...jest.requireActual('@/appStore/hooks'),
    useAppDispatch: () => jest.fn(),
    useAppSelector: () => jest.fn(() => ({
        status: 'succeeded',
        users: []
    }))
}));

// let mockStoreCreator: MockStoreCreator<PartialRootState>;
// let mockStore: MockStore;

// const setup = () => {
//     mockStoreCreator = configureStore<PartialRootState>([]);
//     mockStore = mockStoreCreator({
//         usersSlice: {
//             users: [],
//             currentPage: 1,
//             status: Status.succeeded,
//             error: null,
//         }
//     });
//     render(
//         <Provider store={mockStore}>
//             <UsersList />
//         </Provider>
//     )
// };

describe('HomePage', () => {
    it('should render the page', () => {
        // setup();
        render(<Home />);
        const homePageWrapper = screen.getByTestId('homepage_root');
        expect(homePageWrapper).toBeInTheDocument();
    });
});
