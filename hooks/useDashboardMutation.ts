// import { useMutation } from "@tanstack/react-query";
// import { QUERY_KEYS } from "@/constants/query-keys";
// import queryClient from "@/config/query";
// import {
//   ExampleUpdateItem,
//   ExampleDeleteItem,
//   ExampleAddItem,
// } from "@/actions/example";

// import { CardTypeDashboard } from "@/types";
// import { Example } from "@prisma/client";

// import { toast } from "sonner";

// export const useDashboardMutation = (
//   type: CardTypeDashboard,
//   itemId: string
// ) => {
//   const updateMutation = useMutation({
//     mutationFn: async (updatedData: Partial<Example>) => {
//       switch (type) {
//         case CardTypeDashboard.Example:
//           return await ExampleUpdateItem(itemId, updatedData);

//         default:
//           throw new Error("Unknown dashboard card type");
//       }
//     },
//     onSuccess: () => {
//       const queryKey = validateQueries(type);
//       queryClient.invalidateQueries({ queryKey: [queryKey] });
//       toast.success("Updated !");
//     },
//     onError: (error) => {
//       console.error("Update failed:", error);
//       toast.error("Update failed ! ");
//     },
//   });

//   const deleteMutation = useMutation({
//     mutationFn: async () => {
//       switch (type) {
//         case CardTypeDashboard.Example:
//           return await ExampleDeleteItem(itemId);

//         default:
//           throw new Error("Unknown dashboard card type");
//       }
//     },
//     onSuccess: () => {
//       const queryKey = validateQueries(type);
//       queryClient.invalidateQueries({ queryKey: [queryKey] });
//       toast.success("Deleted ! ");
//     },
//     onError: (error) => {
//       console.error("Delete failed:", error);
//       toast.error("Delete failed ! ");
//     },
//   });

//   const createMutation = useMutation({
//     mutationFn: async (newData: Partial<Example>) => {
//       switch (type) {
//         case CardTypeDashboard.Example:
//           return await ExampleAddItem(newData);

//         default:
//           throw new Error("Unknown dashboard card type");
//       }
//     },
//     onSuccess: () => {
//       const queryKey = validateQueries(type);
//       queryClient.invalidateQueries({ queryKey: [queryKey] });
//       toast.success("Created !");
//     },
//     onError: (error) => {
//       console.error("Create failed:", error);
//       toast.success("Create failed ! ");
//     },
//   });

//   return { updateMutation, deleteMutation, createMutation };
// };

// const validateQueries = (type: CardTypeDashboard) => {
//   switch (type) {
//     case CardTypeDashboard.Example:
//       return QUERY_KEYS.EDUCATION_DASHBOARD;

//     default:
//       throw new Error("Unknown dashboard card type");
//   }
// };
