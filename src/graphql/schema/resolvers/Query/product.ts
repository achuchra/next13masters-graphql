import { prisma } from "../../../../db";
import type { QueryResolvers } from "./../../../types.generated";
import { faker } from "@faker-js/faker";

export const product: NonNullable<QueryResolvers["product"]> = async (_parent, _arg, _ctx) => {
	const product = await prisma.product.findUnique({
		where: { id: _arg.id },
	});
	return product;
};
