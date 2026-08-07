"use client";

import { useRouter } from "next/navigation";
import Pagination from "@/components/ui/Pagination";

type ArtikelPaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function ArtikelPagination({
  currentPage,
  totalPages,
  basePath,
}: ArtikelPaginationProps) {
  const router = useRouter();

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={(page: number) => {
        router.push(`${basePath}?page=${page}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="mb-0"
    />
  );
}
