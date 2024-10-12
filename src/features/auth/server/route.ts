import { z } from "zod";
import { Hono } from "hono";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie } from "hono/cookie"
import { zValidator } from "@hono/zod-validator"

import { createAdminClient } from "@/lib/appwrite";

import { AUTH_COOKIE } from "../constants";
import { loginSchema, registerSchema } from "../schema";

const app = new Hono()
    .post(
        "/login", 
        zValidator("json", loginSchema), 
        async (c) => {
            const { email, password } = c.req.valid("json");

            const { account } = await createAdminClient();
            const session = await account.createEmailPasswordSession(
                email,
                password,
            );

            setCookie(c, AUTH_COOKIE, session.secret, {
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30,
            });

            return c.json({ success: true });
        }
    )
    .post(
        "/register",
        zValidator("json", registerSchema),
        async (c) => {
            const { name, email, password } = c.req.valid("json");

            const { account } = await createAdminClient();
            await account.create(
                ID.unique(),
                email,
                password,
                name,
            );

            const session = await account.createEmailPasswordSession(
                email,
                password,
            );

            setCookie(c, AUTH_COOKIE, session.secret, {
                path: "/",
                httpOnly: true,
                secure: true,
                sameSite: "strict",
                maxAge: 60 * 60 * 24 * 30,
            });

            return c.json({ success: true });
        }
    )
    .post("/logout", (c) => {
        deleteCookie(c, AUTH_COOKIE);

        return c.json({ success: true });
    })

export default app;