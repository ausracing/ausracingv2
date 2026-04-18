"use client";

export default function FooterLayout() {
  return (
    <footer className="bg-background text-primary mt-auto p-6 text-center">
      <p>© {new Date().getFullYear()} AUS Racing. All rights reserved.</p>
      <p>
        Contact: <a href="mailto:contact@ausracing.com">contact@ausracing.com</a>
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:underline">Twitter</a>
        <a href="#" className="hover:underline">Instagram</a>
        <a href="#" className="hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
}