import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    fullName: z.string().min(3),
    role: z.enum(["CLIENT", "ARTISAN", "ADMIN"]).default("CLIENT"),
    city: z.string().optional(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password, fullName, role, city } = registerSchema.parse(body);

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "البريد الإلكتروني موجود بالفعل" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fullName,
                role,
                city: city || "Morocco",
                // Create the profile based on role
                ...(role === "CLIENT"
                    ? { clientProfile: { create: {} } }
                    : {
                        artisanProfile: {
                            create: {
                                trade: {
                                    connectOrCreate: {
                                        where: { id: "default" }, // Temporary logic
                                        create: { nameAr: "غير محدد", nameFr: "Unspecified" }
                                    }
                                }
                            }
                        }
                    }
                ),
            },
        });

        return NextResponse.json({ user: { email: user.email, role: user.role } });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "فشل في إنشاء الحساب" },
            { status: 500 }
        );
    }
}
