export interface ReviewGameData {
  image: string;
  name: string;
  platForm: string;
  startDate: string;
  endDate: string;
  story: number;
  character: number;
  ost: number;
  gameplay: number;
  graphic: number;
  total: number;
  comment: string;
}

export class ReviewGameDto implements ReviewGameData {
  image: string;
  name: string;
  platForm: string;
  startDate: string;
  endDate: string;
  story: number;
  character: number;
  ost: number;
  gameplay: number;
  graphic: number;
  total: number;
  comment: string;
}

export type UpdateReviewGameDto = Partial<ReviewGameDto>;
