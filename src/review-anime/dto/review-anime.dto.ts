export class ReviewAnimeDto {
  name: string;
  'premiered(JP)': string;
  image: string;
  'finished date': string;
  type: string;
  episode: number;
  story: number;
  art: number;
  song: number;
  character: number;
  storytelling: number;
  Score: number;
  comment: string;
}

export type UpdateReviewAnimeDto = Partial<ReviewAnimeDto>;
