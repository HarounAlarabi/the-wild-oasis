import supabase from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("An error occurred while fetching cabins");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    throw new Error("Can't delete cabin");
  }
  return data;
}
