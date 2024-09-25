import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUpdateCabin } from "../../services/apiCabins";

export const useEditCabin = () => {
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createUpdateCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin Updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isEditing, editCabin };
};

// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createEditCabin } from "../../services/apiCabins";
// import { toast } from "react-hot-toast";

// export function useEditCabin() {
//   const queryClient = useQueryClient();

//   const { mutate: editCabin, isLoading: isEditing } = useMutation({
//     mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
//     onSuccess: () => {
//       toast.success("Cabin successfully edited");
//       queryClient.invalidateQueries({ queryKey: ["cabins"] });
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   return { isEditing, editCabin };
// }
