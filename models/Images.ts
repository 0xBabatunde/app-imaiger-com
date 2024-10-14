// import { z } from "zod";

// const BasicImageSchema = z.object({
//   //seed: z.number(),
//   //guidance: z.number(),
//   //model: z.string().optional(),
//   //next_page: z.string().optional(),
//   //total_results: z.number(),
// });

// const PhotoSchema = z.object({
//   id: z.string(),
//   width: z.number(),
//   height: z.number(),
//   //url: z.string(),
//   srcSmall: z.string(),
//   prompt: z.string(),
//   blurredDataUrl: z.string().optional(),
// });

// export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
//   images: z.array(PhotoSchema),
// });

// export type Photo = z.infer<typeof PhotoSchema>;

// export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>;
