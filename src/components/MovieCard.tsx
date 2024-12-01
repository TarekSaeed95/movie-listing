import { Movie } from "@/types";
import Image from "next/image";
import { FC } from "react";

type MovieCardProps = {
  movie: Movie;
};
export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <section className="  [&_p]:text-white text-center   w-fit rounded-normal bg-black  rounded-3xl pb-3 overflow-hidden  ">
      <Image width={220} height={310} src={movie.poster} alt={movie.title} />
      <p className=" mb-2  ">{movie.title}</p>
      <p className=" mb-2  ">{movie.year}</p>
      <p className=" mb-2  ">{movie.rating}</p>
    </section>
  );
};
