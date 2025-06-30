import { Input } from '../ui/kit/input'
import { RangeSlider } from '../ui/kit/range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
import { FilterCheckbox } from './filter-checkbox'
import { Title } from './title'

const filterOptions = [
	{
		text: 'Моццарелла',
		value: '1',
	},
	{
		text: 'Сырный соус',
		value: '2',
	},
	{
		text: 'Чеснок',
		value: '3',
	},
	{
		text: 'Соленные огурчики',
		value: '4',
	},
	{
		text: 'Томаты',
		value: '5',
	},
	{
		text: 'Сырный соус',
		value: '2',
	},
	{
		text: 'Чеснок',
		value: '3',
	},
	{
		text: 'Соленные огурчики',
		value: '4',
	},
	{
		text: 'Томаты',
		value: '5',
	},
	{
		text: 'Сырный соус',
		value: '2',
	},
	{
		text: 'Чеснок',
		value: '3',
	},
	{
		text: 'Соленные огурчики',
		value: '4',
	},
	{
		text: 'Томаты',
		value: '5',
	},
]

export function Filters({ className }: { className?: string }) {
	return (
		<div className={className}>
			<Title text='Фильтрация' size='sm' className='mb-5 font-bold' />

			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Можно собирать' value='1' />
				<FilterCheckbox text='Новинки' value='2' />
			</div>

			<div className='mt-5 boarder-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={30000}
						defaultValue={0}
					/>
					<Input type='number' placeholder='30000' min={1000} max={30000} />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersGroup
				title='Ингредиенты'
				className='mt-5'
				limit={6}
				defaultItems={filterOptions}
				items={filterOptions}
			/>
		</div>
	)
}
