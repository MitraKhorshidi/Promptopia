import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    // console.log(prompts);

    return new Response(JSON.stringify(prompts), { status: 201 });
  } catch (error) {
    console.log('error get prompts',error);
    return new Response("Failed to fetch Propmts", { status: 500 });
  }
};
