import Anthropic from "@anthropic-ai/sdk";

export const runtime = "edge";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const prompt = data.get("prompt");
    // const game = data.get("game");
    const anthropicMsg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1000,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `You are tasked with expanding a brief prompt to create a more detailed and context-rich prompt for a website image. This expanded prompt will help generate a more vivid and engaging image. 

              You will be given an initial prompt and a website image type. The initial prompt is:
              <prompt>
              ${prompt}
              </prompt>
              
              The website image type is:
              <website_type>
              hero image
              </website_type>
              
              First, analyze the given prompt and website image type. Consider the key elements that would make an engaging image for this specific type of content.
              
              Next, expand on the prompt by adding more context, details, and descriptive elements. Consider the following aspects:
              1. Visual elements (characters, objects, background)
              2. Colors and lighting
              3. Action or scene description
              4. Mood or atmosphere
              5. Any text that might appear on the image (DO NOT INCLUDE ANY TEXT ON THE IMAGE)
              
              Ensure that your additions are relevant to the website image type and would appeal to the target audience of such content.
              
              Format your expanded prompt as a detailed description, keeping it informative to paint a clear picture of the desired image.
              
              Now, please provide your expanded prompt based on the initial prompt and website image type given earlier. Respond with only the expanded prompt in Stable Difussion Prompting style.`,
            },
          ],
        },
      ],
    });

    return Response.json(anthropicMsg);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
