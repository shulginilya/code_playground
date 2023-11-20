import { useMemo } from 'react';

import { MainLayout } from '@/layouts';

import styles from './home.module.scss';

export const Home = (): JSX.Element => {
    const componentRender = useMemo(() => (
        <div
            className={styles.home}
            data-testid="homepage_root"
        >
        </div>
    ), []);
    return (
        <MainLayout>
            {componentRender}
        </MainLayout>
    )
};
