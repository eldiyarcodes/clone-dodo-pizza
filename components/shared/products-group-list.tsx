'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import { RefObject, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'
import { ProductCard } from './product-card'
import { Title } from './title'

interface Props {
	title: string
	products: any[]
	className?: string
	listClassName?: string
	categoryId: number
}

export function ProductsGroupList({
	title,
	products,
	listClassName,
	className,
	categoryId,
}: Props) {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = useRef<HTMLDivElement>(null)
	const intersection = useIntersection(
		intersectionRef as RefObject<HTMLElement>,
		{ threshold: 0.4 }
	)

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{products.map(product => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}
					/>
				))}
			</div>
		</div>
	)
}
