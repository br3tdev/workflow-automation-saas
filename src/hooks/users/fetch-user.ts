import { db } from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

export function fetchUser(id: string) {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["user", { id }],
    queryFn: async () => {
      const user = await db.user.findUnique({ where: { clerkId: id } });

      if (user === null) {
        throw new Error("Failed to fetch user");
      }

      return user;
    },
  });

  return query;
}
