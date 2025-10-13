"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";

const Schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Please write a bit more"),
});

type FormValues = z.infer<typeof Schema>;

export default function ContactAnimated() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(Schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="max-w-xl">
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-4"
      >
        <div>
          <label className="text-sm">Name</label>
          <input
            className="mt-1 w-full rounded-md border border-[--color-border] bg-transparent px-3 py-2"
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            className="mt-1 w-full rounded-md border border-[--color-border] bg-transparent px-3 py-2"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
          ) : null}
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea
            className="mt-1 w-full rounded-md border border-[--color-border] bg-transparent px-3 py-2 min-h-32"
            {...register("message")}
          />
          {errors.message ? (
            <p className="text-xs text-red-400 mt-1">
              {errors.message.message}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          className="btn-primary w-fit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </motion.form>

      {sent ? (
        <motion.div
          variants={scaleIn}
          initial="initial"
          animate="animate"
          className="mt-4 text-sm text-green-400"
        >
          Message sent! I'll get back to you soon.
        </motion.div>
      ) : null}
    </div>
  );
}
