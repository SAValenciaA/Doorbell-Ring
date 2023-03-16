import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if(req.method != "POST") {
        return res.status(405).json({message: 'Method not allowed'})
    }
    const info = JSON.parse(req.body)

    const savedinfo = await prisma.contacts.create( {
        data: info
    })
}