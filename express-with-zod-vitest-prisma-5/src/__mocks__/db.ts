// import { vi } from "vitest";

// export const prismaClient = {
//     request: {
//         create: vi.fn(),
//         findMany: vi.fn(),
//         delete: vi.fn(),
//         count: vi.fn(),
//     },
// };

// using vitest-mock-extended
import { PrismaClient } from "@prisma/client";
import { mockDeep } from "vitest-mock-extended";

export const prismaClient = mockDeep<PrismaClient>();