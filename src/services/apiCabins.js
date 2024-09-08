import supabase from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("An error occurred while fetching cabins");
  }
  return data;
}
