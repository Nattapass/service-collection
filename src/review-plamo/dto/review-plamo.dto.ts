export class ReviewPlamoDto {
  image: string;
  name: string;
  line: string;
  finishedDate: string;
  assembly: number;
  design: number;
  joint: number;
  worth: number;
  score: number;
  comment: string;
}

export type UpdateReviewPlamoDto = Partial<ReviewPlamoDto>;
