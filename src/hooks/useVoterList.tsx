import { useMutation } from "@tanstack/react-query";

interface Voter {
  _id: string;
  name: string;
  gardian: string;
  area: string;
  date: string;
  voterId: number;
}

const useVoterList = () => {
  const { data, error, status, mutateAsync } = useMutation({
    mutationKey: ["voterList"],
    mutationFn: async (search: string) => {
      const response = await fetch(`/api/voterList?search=${search}`);
      if (!response.ok) {
        throw new Error("Failed to fetch voter list");
      }
      return response.json();
    },
  });

  return {
    voterList: data,
    isLoading: status === "pending",
    error,
    mutateAsync,
  };
};

export default useVoterList;
