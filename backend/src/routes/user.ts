import { signUpInput,signInInput } from "@malli7/common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = signUpInput.safeParse(body)
  if(!success) {
    c.status(411)
    return c.json({error:"incorrect inputs"})
  }
  try {
    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });
    const token = await sign({ id: newUser.id }, c.env?.JWT_SECRET);
    return c.json({ token });
  } catch (error) {
    return c.status(403);
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const {success} = signInInput.safeParse(body)
  if(!success) {
    c.status(411)
    return c.json({error:"incorrect inputs"})
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });
    if (user && body.password === user.password) {
      const token = await sign({ id: user.id }, c.env?.JWT_SECRET);
      return c.json({ token });
    } else {
      return c.status(404);
    }
  } catch (error) {
    return c.status(403);
  }
});
