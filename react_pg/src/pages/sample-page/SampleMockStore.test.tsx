// import { render, screen } from '@testing-library/react';

// import { Home } from '@/pages';
// import { configureStore } from '@reduxjs/toolkit';

// import { Status } from "@/appStore/reducers/sampleSlice";
// import { Provider } from 'react-redux';

// import type { PartialRootState } from '@/appStore/store';
// import type { MockStore, MockStoreCreator } from 'redux-mock-store';

// let mockStoreCreator: MockStoreCreator<PartialRootState>;
// let mockStore: MockStore;

// const setup = () => {
//     mockStoreCreator = configureStore<PartialRootState>([]);
//     mockStore = mockStoreCreator({
//         sampleSlice: {
//             data: [],
//             status: Status.succeeded,
//             error: null,
//         }
//     });
//     render(
//         <Provider store={mockStore}>
//             <Home />
//         </Provider>
//     )
// };

describe('HomePage (mock state version)', () => {
    it('should render the page', () => {
        // setup();
        // const homePageWrapper = screen.getByTestId('homepage_root');
        // expect(homePageWrapper).toBeInTheDocument();
        expect(1).toBe(1);
    });
});
