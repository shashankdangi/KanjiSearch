"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Notfound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return null;
};

export default Notfound;
