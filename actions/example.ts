// // actions/education.ts
// "use server";

// import prisma from "@/lib/prisma";
// import { revalidatePath } from "next/cache";

// export async function ExampleGetItems() {
//   try {
//     return await prisma.Example.findMany({ orderBy: { start: "desc" } });
//   } catch (error) {
//     console.error("An error accured : ", error);
//     return [];
//   }
// }

// export async function ExampleAddItem(data) {
//   try {
//     const newItem = await prisma.example.create({ data });
//     revalidatePath("/dashboard");
//     return newItem;
//   } catch (error) {
//     console.error("Add Error:", error);
//     return null;
//   }
// }

// export async function ExampleUpdateItem(id: string, data: Partial<Example>) {
//   try {
//     const updated = await prisma.example.update({
//       where: { id },
//       data,
//     });
//     revalidatePath("/dashboard");
//     return updated;
//   } catch (error) {
//     console.error("Update Error:", error);
//     return null;
//   }
// }

// export async function ExampleDeleteItem(id: string) {
//   try {
//     await prisma.example.delete({ where: { id } });
//     revalidatePath("/dashboard");
//   } catch (error) {
//     console.error("Delete Error:", error);
//   }
// }
