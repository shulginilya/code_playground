import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./pagination.module.scss";

interface IPaginationProps {
	currentPage: number;
	recordsCount: number;
	recordsPerPage: number;
	url: string;
}

export const Pagination = ({
	currentPage,
	recordsCount,
	recordsPerPage,
	url,
}: IPaginationProps): JSX.Element => {
	const navigate = useNavigate();
	const pages = useMemo((): number[] => {
		const numberOfPages = Math.ceil(recordsCount / recordsPerPage);
		const pagesArray = [];
		for (let i = 1; i <= numberOfPages; i++) {
			pagesArray.push(i);
		}
		return pagesArray;
	}, [currentPage]);
	const renderPagination = useMemo((): JSX.Element => {
		const pageItems = pages.map((p) => (
			<li key={`page_${p}`} className={styles.pagination__list__item}>
				<button
					className={styles.pagination__list__item__link}
					onClick={() => navigate(`${url}/${p}`)}
				>
					{p}
				</button>
			</li>
		));
		return <ul className={styles.pagination__list}>{pageItems}</ul>;
	}, [currentPage]);
	return (
		<div className={styles.pagination} data-testid="pagination_root">
			{renderPagination}
		</div>
	);
};
