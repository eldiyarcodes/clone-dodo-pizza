'use client'

import { cn } from '@/shared/lib/utils'
import { useState } from 'react'
import { Input } from '../ui/kit/input'
import { FilterChecboxProps, FilterCheckbox } from './filter-checkbox'

type Item = FilterChecboxProps

interface Props {
	className?: string
	title: string
	items: Item[]
	defaultItems: Item[]
	limit?: number
	searchInputPlaceholder?: string
	onChange?: (values: string[]) => void
	defaultValue?: string[]
}

export function CheckboxFiltersGroup({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = 'Поиск...',
	className,
	onChange,
	defaultValue,
}: Props) {
	const [showAll, setShowAll] = useState(false)
	const [search, setSearch] = useState('')

	const list = showAll
		? items.filter(item =>
				item.text.toLowerCase().includes(search.toLocaleLowerCase())
		  )
		: defaultItems?.slice(0, limit)

	return (
		<div className={cn('', className)}>
			<p className='font-bold mb-3'>{title}</p>

			{showAll && (
				<div className='mb-5'>
					<Input
						value={search}
						onChange={e => setSearch(e.target.value)}
						placeholder={searchInputPlaceholder}
						className='bg-gray-50 border-none'
					/>
				</div>
			)}

			<div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
				{list.map((item, idx) => (
					<FilterCheckbox
						key={idx}
						value={item.value}
						text={item.text}
						checked={false}
						onCheckedChange={v => console.log(v)}
						endAdornment={item.endAdornment}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
					<button
						className='text-primary mt-3 cursor-pointer'
						onClick={() => setShowAll(prev => !prev)}
					>
						{showAll ? 'Скрыть' : '+ Показать еще'}
					</button>
				</div>
			)}
		</div>
	)
}
