import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method != "GET") {
        return res.status(405).json({message: 'Method not allowed'})
    }
    const info = await prisma.answer.findMany()

    res.status(200).json(info)
}