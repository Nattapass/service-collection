export class ReviewBookDto {
  Name: string;
  Type: string;
  Total: number;
  Story: number;
  Character: number;
  Illustration: number;
  Storytelling: number;
  Score: number;
  Comment: string;
}

export type UpdateReviewBookDto = Partial<ReviewBookDto>;
