export class ReviewBookDto {
  name: string;
  type: string;
  license: string;
  tier: string;
  finishedDate: string;
  total: number;
  story: number;
  character: number;
  illustration: number;
  storytelling: number;
  score: number;
  comment: string;
  image: string;
}

export type UpdateReviewBookDto = Partial<ReviewBookDto>;
