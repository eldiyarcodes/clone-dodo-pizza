import { Container } from '@/shared/ui/container'
import { Filters } from '@/shared/ui/filters'
import { ProductsGroupList } from '@/shared/ui/products-group-list'
import { Title } from '@/shared/ui/title'
import { TopBar } from '@/shared/ui/top-bar'

const mockProducts = [
	{
		id: 1,
		name: 'Сырный цыпленок',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11ee7d60266964ffa4a49159f0a96a1e.avif',
		price: 550,
		items: [{ price: 450 }],
	},
	{
		id: 2,
		name: 'Сырный цыпленок',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11ee7d60266964ffa4a49159f0a96a1e.avif',
		price: 550,
		items: [{ price: 450 }],
	},
	{
		id: 3,
		name: 'Сырный цыпленок',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11ee7d60266964ffa4a49159f0a96a1e.avif',
		price: 550,
		items: [{ price: 450 }],
	},
	{
		id: 4,
		name: 'Сырный цыпленок',
		imageUrl:
			'https://media.dodostatic.net/image/r:292x292/11ee7d60266964ffa4a49159f0a96a1e.avif',
		price: 550,
		items: [{ price: 450 }],
	},
]

export function HomePage() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

			<Container className='mt-9 pb-14'>
				<div className='flex gap-[80px]'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								products={mockProducts}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								products={mockProducts}
								categoryId={2}
							/>
							<ProductsGroupList
								title='Закуски'
								products={mockProducts}
								categoryId={3}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
