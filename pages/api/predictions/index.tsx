export default async function handler(
  req: { body: { prompt: any } },
  res: { statusCode: number; end: (arg0: string) => void }
) {
  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Pinned to a specific version of Stable Diffusion
      // See https://replicate.com/stability-ai/sdxl
      version:
        "39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",

      // This is the text prompt that will be submitted by a form on the frontend
      input: {
        width: 1320,
        height: 680,
        prompt: req.body.prompt,
        refine: "expert_ensemble_refiner",
        scheduler: "K_EULER",
        lora_scale: 0.6,
        num_outputs: 1,
        guidance_scale: 7.5,
        apply_watermark: false,
        high_noise_frac: 0.8,
        negative_prompt:
          "cartoon, 3d, ((disfigured)), ((bad art)), ((deformed)),((extra limbs)),((close up)),((b&w)), blurry, ((low quality)), ((poorly dressed)), ((unprofessional)), ((inappropriate outfit)), ((inappropriate pose)), ((awkward pose)), ((bad posture)), ((bad makeup)), ((clownish)), ((sloppy)), ((messy)), ((disheveled)), ((unattractive)), ((out of focus)), ((blurry background)), ((cluttered background)), ((unprofessional setting)), ((unattractive office)), ((unflattering lighting)), ((poorly composed)), ((bad framing)), ((low resolution)), ((poor quality)), ((unappealing)), ((uninspiring)), ((dull)), ((boring))(show breast)",
        prompt_strength: 0.8,
        num_inference_steps: 25,
      },
    }),
  });

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
