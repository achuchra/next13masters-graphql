import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";

export const products: NonNullable<QueryResolvers["products"]> = async (_parent, _arg, _ctx) => {
	const products = await prisma.product.findMany();
	return products;
};
