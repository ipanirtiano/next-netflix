import prisma from "@/prisma/prisma_db"
import { NextResponse } from "next/server"

export const GET = async (request: Request, { params }: { params: { id: string } }) => {

    try {
        const response = await prisma.movie_list.findFirst({
            where: {
                id: params.id
            }
        })
        return NextResponse.json({ data: response }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: `Oops something when wrong! ${error}` },
            { status: 500 }
        );
    }
}

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
    try {
        const response = await prisma.movie_list.delete({
            where: {
                id: params.id
            }
        })
        return NextResponse.json({ message: "List Deleted successfully..." }, { status: 200 })
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: `Oops something when wrong! ${error}` },
            { status: 500 }
        );
    }
}