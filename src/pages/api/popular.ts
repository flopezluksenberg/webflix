// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import MoviesService from "@src/service/movies.service";

type Movie = {
  name: string;
  img: string;
};

type Data = Array<Movie>

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {

  const movies = await MoviesService.getMovies();

  res.status(200).json({ movies });
}
