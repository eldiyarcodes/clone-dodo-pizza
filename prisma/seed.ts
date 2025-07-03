import { Prisma } from '@prisma/client'
import { categories, ingredients, products, users } from './constants'
import { prisma } from './prisma-client'

function randomNumber(min: number, max: number) {
	return Math.floor(Math.random() * (max - min) + min)
}

function generatePizza({
	productId,
	pizzaType,
	size,
}: {
	productId: number
	pizzaType?: 1 | 2
	size?: 20 | 30 | 40
}) {
	return {
		productId,
		price: randomNumber(280, 600),
		pizzaType,
		size,
	} as Prisma.ProductItemUncheckedCreateInput
}

async function up() {
	await prisma.user.createMany({ data: users })
	await prisma.category.createMany({ data: categories })
	await prisma.ingredient.createMany({ data: ingredients })

	// await prisma.product.createMany({ data: products })

	const categoryMap = new Map()
	const createdProducts = await Promise.all(
		products.map(p =>
			prisma.product.create({
				data: {
					...p,
					categoryId: categoryMap.get(p.name),
				},
			})
		)
	)

	const allIngredients = await prisma.ingredient.findMany()

	const pizza1 = await prisma.product.create({
		data: {
			name: 'Пепперони фреш',
			imageUrl:
				'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
			categoryId: 1,
			ingredients: {
				connect: allIngredients.slice(0, 5).map(({ id }) => ({ id })),
			},
		},
	})

	const pizza2 = await prisma.product.create({
		data: {
			name: 'Сырная',
			imageUrl:
				'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
			categoryId: 1,
			ingredients: {
				connect: allIngredients.slice(5, 10).map(({ id }) => ({ id })),
			},
		},
	})

	const pizza3 = await prisma.product.create({
		data: {
			name: 'Чоризо фреш',
			imageUrl:
				'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
			categoryId: 1,
			ingredients: {
				connect: allIngredients.slice(10, 40).map(({ id }) => ({ id })),
			},
		},
	})

	await prisma.productItem.createMany({
		data: [
			generatePizza({ productId: pizza1.id, pizzaType: 1, size: 20 }),
			generatePizza({ productId: pizza1.id, pizzaType: 2, size: 30 }),
			generatePizza({ productId: pizza1.id, pizzaType: 2, size: 40 }),

			generatePizza({ productId: pizza2.id, pizzaType: 1, size: 20 }),
			generatePizza({ productId: pizza2.id, pizzaType: 1, size: 30 }),
			generatePizza({ productId: pizza2.id, pizzaType: 1, size: 40 }),
			generatePizza({ productId: pizza2.id, pizzaType: 2, size: 20 }),
			generatePizza({ productId: pizza2.id, pizzaType: 2, size: 30 }),
			generatePizza({ productId: pizza2.id, pizzaType: 2, size: 40 }),

			generatePizza({ productId: pizza3.id, pizzaType: 1, size: 20 }),
			generatePizza({ productId: pizza3.id, pizzaType: 2, size: 30 }),
			generatePizza({ productId: pizza3.id, pizzaType: 2, size: 40 }),
		],
	})
}

async function down() {
	// await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.productItem.deleteMany()
	await prisma.product.deleteMany()
	await prisma.ingredient.deleteMany()
	await prisma.category.deleteMany()
	await prisma.user.deleteMany()
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.error(e)
	}
}

main()
	.then(async () => await prisma.$disconnect())
	.catch(async err => {
		console.error(err)
		await prisma.$disconnect()
		process.exit(1)
	})
