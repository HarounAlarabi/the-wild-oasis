import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  console.log("data", data);
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

export async function createEditCabin(newCabin, id) {
  console.log("newCabin", newCabin, id);
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/ ",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //Create Edit cabin
  let query = supabase.from("cabins");
  //Create new cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);
  //Edit cabin
  if (id)
    query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Can't insert cabin");
  }
  //upload images
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);
  //delete cabin if image upload fails
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);

    throw new Error("Can't upload image");
  }
  return data;
}
