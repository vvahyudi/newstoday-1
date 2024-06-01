import { getDetailProfile } from "@/api/profile"
import { useQuery } from "@tanstack/react-query"

export const useDetailProfileQuery = () => {
	return useQuery({
		queryKey: ["profile-detail"],
		queryFn: async () => await getDetailProfile(),
	})
}
