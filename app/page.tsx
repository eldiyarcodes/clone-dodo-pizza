import { Container } from '@/components/shared/container'
import { Filters } from '@/components/shared/filters'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { Title } from '@/components/shared/title'
import { TopBar } from '@/components/shared/top-bar'

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

export default function Home() {
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
								title='Закуски'
								products={mockProducts}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
