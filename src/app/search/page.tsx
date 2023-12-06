import ProductCard from '@/components/ProductCard'
import prisma from '@/lib/db/prisma'
import React from 'react'

interface SearchPageProps {
    searchParams: { query: string }
}

export default async  function SearchPage({searchParams: {query}} : SearchPageProps) {
    const products = await prisma.product.findMany({
        where: {
            OR: [
                {name: {contains: query, mode: 'insensitive'}},
                {description: {contains: query, mode: 'insensitive'}}
            ]
        },
        orderBy: {id: 'desc'}
    })

    if (products.length === 0) {
        return (
            <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-bold'>No results found (╥﹏╥)</h1>
                <p className='py-6'>Try searching for something else</p>
            </div>
        )
    }
  return (
    <div className='my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {products.map(product => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}
