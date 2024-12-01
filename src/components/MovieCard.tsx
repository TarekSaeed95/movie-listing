import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Movie } from "@/types";
import { Star } from "lucide-react";

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card className="w-full max-w-xs mx-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-[400px] object-contain transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded flex items-center">
          <Star className="w-4 h-4 mr-1 text-yellow-400" fill="currentColor" />
          <span className="text-sm">{movie.rating.toFixed(1)}</span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold line-clamp-2">
          {movie.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          Release Year: {movie.year}
        </p>
      </CardContent>
    </Card>
  );
};
