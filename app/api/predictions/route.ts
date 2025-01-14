import Replicate from "replicate";

export const runtime = "edge";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  const data = await req.formData();
  if (!process.env.REPLICATE_API_TOKEN) {
    throw new Error(
      "The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it."
    );
  }

  const prediction = await replicate.predictions.create({
    model: "black-forest-labs/flux-1.1-pro",
    input: {
      steps: 25,
      prompt: data.get("prompt"),
      width: 1280,
      height: 720,
      guidance: 3,
      interval: 2,
      aspect_ratio: "16:9",
      safety_tolerance: 2,
    },
  });

  if (prediction?.error) {
    return new Response(JSON.stringify({ detail: prediction.error.detail }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(prediction), { status: 201 });
}
