import prisma from "@/prisma/prisma_db"
import { NextResponse } from "next/server"


export const POST = async (request: Request) => {
 // get all body request
 const body = await request.json()


 try {
     // add movie to database
     const movieList = await prisma.movie_list.create({
        data: {
            id: String(body.id),
            title: body.title,
            overview: body.overview,
            backdrop_path: body.backdrop_path,
            release_date: body.release_date,
            vote_average: String(body.vote_average),
            userEmailId: body.userId
        }
    })
    // retrun next response
    return NextResponse.json({data: movieList}, {status: 201})
 } catch (error) {
    console.log(error)
    return NextResponse.json(
        { message: `Oops something when wrong! ${error}` },
        { status: 500 }
      );
 }

   

}