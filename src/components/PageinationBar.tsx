import Link from 'next/link';
import React from 'react'

interface PageinationBarProps {
    currentPage: number;
    totalPages: number;
}

export default function PageinationBar({currentPage, totalPages} : PageinationBarProps ) {
    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
    const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9));

    const numberedPages: JSX.Element[] = [];

    for (let page = minPage; page < maxPage; page++) {
        numberedPages.push(
            <Link
            href={"?page=" + page}
            key={page}
            className={`join-item btn ${currentPage === page ? "btn-active pointer-events-none" : ""}`}
            >
            {page}
            </Link>
        );
    }
  return (
    <>
    <div className='join hidden sm:block'>
        {numberedPages}
    </div>

    <div className='join block sm:hidden'>
        {currentPage > 1 && 
            <Link href={"?page=" + (currentPage - 1)} className='btn join-item'>«</Link>
        }
        <button className='join-item btn pointer-events-none'>Page {currentPage}</button>
        {currentPage < totalPages && (
            <Link href={"?page=" + (currentPage + 1)} className='btn join-item'>»</Link>
        )}
    </div>
    </>
  )
}
