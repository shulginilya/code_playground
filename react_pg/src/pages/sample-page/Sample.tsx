import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@/appStore/hooks';
import { selectData } from '@/appStore/reducers/sampleSlice';

import { MainLayout } from '@/layouts';

export const Sample = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const {
        data,
        status
    } = useAppSelector(selectData);

    const componentRender = useMemo(() => (
        <div data-testid="samplepage_root">
            sample page homepage_root
        </div>
    ), []);
    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    )
};
