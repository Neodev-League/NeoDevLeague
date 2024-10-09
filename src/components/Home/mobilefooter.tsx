import React from "react";
import Link from "next/link";
import { FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

export default function MobileFooter() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-md text-white p-2 md:hidden z-50">
      <div className="flex justify-between items-center">
        <div className="text-xs">© 2024 Neo Developer League</div>
        <div className="flex space-x-3">
          <Link href="https://instagram.com" aria-label="Instagram">
            <FaInstagram className="text-lg" />
          </Link>
          <Link href="https://github.com" aria-label="GitHub">
            <FaGithub className="text-lg" />
          </Link>
          <Link href="https://discord.com" aria-label="Discord">
            <FaDiscord className="text-lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
