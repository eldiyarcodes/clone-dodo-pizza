import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Button } from './kit/button'
import { Title } from './title'

interface Props {
	id: number
	name: string
	price: number
	imageUrl: string
	className?: string
}

export function ProductCard({ className, imageUrl, name, id, price }: Props) {
	return (
		<div className={className}>
			<Link href={`/product/${id}`}>
				<div className='flex justify-center p-6 rounded-lg bg-secondary h=[260px]'>
					<img src={imageUrl} alt={name} className='w-[215px] h-[215px]' />
				</div>

				<Title text={name} size='sm' className='mb-1 mt-3 font-bold' />
				<p className='text-sm text-gray-400'>
					Цыпленок, моцаррелла, сыры чеддер и пармезан, сырный соус, томаты соус
					альфредо,чеснокя
				</p>

				<div className='flex items-center justify-between mt-4'>
					<span className='text-[20px]'>
						от <b>{price}</b> ₽
					</span>
					<Button variant={'secondary'} className='text-base font-bold'>
						<Plus size={20} className='mr-1' />
						Добавить
					</Button>
				</div>
			</Link>
		</div>
	)
}
