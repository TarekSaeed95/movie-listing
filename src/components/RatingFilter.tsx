"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const RatingFilter = () => {
  const router = useRouter();
  const ratingParam = useSearchParams().get("rating");
  const handleRatingChange = (selectedRating: string) => {
    if (selectedRating === "all") {
      router.push("/");
    } else {
      router.push(`/?rating=${selectedRating}`);
    }
  };

  return (
    <div>
      <Select
        onValueChange={handleRatingChange}
        value={ratingParam === null ? "all" : String(ratingParam)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Ratings" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Ratings</SelectItem>
          {[...Array(10)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <SelectItem key={ratingValue} value={String(ratingValue)}>
                {ratingValue} Stars
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
