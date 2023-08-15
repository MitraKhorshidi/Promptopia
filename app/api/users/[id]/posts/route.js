import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    console.log("params", params);

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    console.log("prompt by user", prompts);

    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    return new Response("Faild to fetch users posts", { status: 500 });
  }
};
