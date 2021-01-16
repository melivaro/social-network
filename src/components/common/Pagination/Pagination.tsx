import React, {useState} from 'react';
import s from './Pagination.module.css'

type PropsType = {
	totalCountItems: number // общее кол-во объектов из базы для отображения на странице
	pageSize: number // кол-во отображаемых элементов на одной странице
	currentPage: number // текущая страница
	setCurrentPage: (page: number) => void // callback отправки следующей выбранной сраницы
	portionSize: number // количество страниц в одной порции для пагинации
};

export const Pagination: React.FC<PropsType> = ({pageSize, currentPage, totalCountItems, setCurrentPage, portionSize}) => {
	const totalCountPage: number = Math.ceil(totalCountItems / pageSize) // общее кол-во страниц
	const pages: Array<number> = [] // массив страниц состоящий из общего кол-ва страниц
	for (let i = 1; i <= totalCountPage; i++) {
		pages.push(i)
	}

	const totalCountPortion = Math.ceil(totalCountPage / portionSize) // общее кол-во проций
	let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize)) // номер порции и его изменение
	const leftPortion = (portionNumber - 1) * portionSize + 1 // левая граница проции
	const rightPortion = portionNumber * portionSize // правая граница порции

	return (
		<>
			{portionNumber > 1 && <button onClick={()=>setPortionNumber(portionNumber -1)}>prev</button>}
			{pages.filter((page) => page >= leftPortion && page <= rightPortion)
				.map((page) => <span key={page.toString()} onClick={() => setCurrentPage(page)} className={page === currentPage ? s.paginationSelected : s.pagination}>{page}</span>)}
			{portionNumber < totalCountPortion && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
		</>
	);
}