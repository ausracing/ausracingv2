"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function NewsletterSignup() {
  return (
    <section className="w-full flex justify-center py-16 px-6">

      <Card className="w-full max-w-2xl p-10 flex flex-col items-center gap-6 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold">
          Join AUS Racing
        </h2>

        <p className="text-muted-foreground">
          Get updates on engineering builds, race events, and team progress.
        </p>

        {/* Email form */}
        <div className="flex w-full gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />

          <Button className="bg-black text-white hover:bg-gray-800">
            Subscribe
          </Button>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6 pt-2">

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl hover:text-pink-500 transition" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
          </a>

        </div>

      </Card>

    </section>
  );
}