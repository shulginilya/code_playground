import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPaginationProps } from './Pagination.types';

import styles from './pagination.module.scss';

export const Pagination = ({
    currentPage,
    recordsCount,
    recordsPerPage,
    navigateUrl,
}: IPaginationProps): JSX.Element => {
    const navigate = useNavigate();
    // calculate the amount of pages we need to render
    const pages = useMemo((): number[] => {
        const numberOfPages = Math.ceil(recordsCount / recordsPerPage);
        const pagesArray = [];
        for (let i = 1; i <= numberOfPages; i++) {
            pagesArray.push(i);
        }
        return pagesArray;
    }, [currentPage]);
    // function which returns rendered pagination
    const renderPagination = useMemo((): JSX.Element => {
        const pageItems = pages.map(p => {
            const paginationItemClass = (currentPage === p) ? `${styles.pagination__list__item} ${styles.pagination__list__item__active}` : styles.pagination__list__item;
            return (
                <li
                    key={`page_${p}`}
                    data-testid="pagination_item"
                    className={paginationItemClass}
                >
                    <button
                        className={styles.pagination__list__item__link}
                        onClick={() => navigate(`${navigateUrl}/${p}`)}
                    >{p}</button>
                </li>
            )
        });
        return (
            <ul className={styles.pagination__list}>
                {pageItems}
            </ul>
        );
    }, [currentPage]);
    // return end results component
    return (
        <div
            className={styles.pagination}
            data-testid="pagination_root"
        >
            {renderPagination}
        </div>
    );
};
