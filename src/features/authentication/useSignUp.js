import { useMutation } from "@tanstack/react-query";

import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Signup successful , Account created Please verify your account"
      );
    },
  });
  return { signUp, isLoading };
}
