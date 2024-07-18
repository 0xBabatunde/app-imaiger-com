import Replicate from "replicate";

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
    // model: "stability-ai/stable-diffusion-3",
    // Pinned to a specific version of Stable Diffusion
    // See https://replicate.com/stability-ai/sdxl
    version: "7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc",

    // This is the text prompt that will be submitted by a form on the frontend
    input: {
      prompt: data.get("prompt"),
      width: 1280,
      height: 720,
      refine: "expert_ensemble_refiner",
      scheduler: "K_EULER",
      lora_scale: 0.6,
      num_outputs: 3,
      guidance_scale: 7.5,
      apply_watermark: false,
      high_noise_frac: 0.8,
      aspect_ratio: "16:9",
      negative_prompt:
        "cartoon, 3d, ((disfigured)), ((bad art)), ((deformed)),((extra limbs)),((close up)),((b&w)), blurry, ((low quality)), ((poorly dressed)), ((unprofessional)), ((inappropriate outfit)), ((inappropriate pose)), ((awkward pose)), ((bad posture)), ((bad makeup)), ((clownish)), ((sloppy)), ((messy)), ((disheveled)), ((unattractive)), ((out of focus)), ((blurry background)), ((cluttered background)), ((unprofessional setting)), ((unattractive office)), ((unflattering lighting)), ((poorly composed)), ((bad framing)), ((low resolution)), ((poor quality)), ((unappealing)), ((uninspiring)), ((dull)), ((boring))(show breast)",
      prompt_strength: 0.8,
      num_inference_steps: 25,
    },
  });

  if (prediction?.error) {
    return new Response(JSON.stringify({ detail: prediction.error.detail }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify(prediction), { status: 201 });
}
