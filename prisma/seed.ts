import { hashSync } from 'bcrypt'
import { prisma } from './prisma-client'

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'mxsin',
				email: 'mxs@gmail.com',
				password: hashSync('123456', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'admin',
				email: 'admin@gmail.com',
				password: hashSync('admin', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	})
}

async function down() {
	// await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.user.deleteMany({})
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
