"use client";

import { Button } from "@/components/ui/Button"
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CloseModal() {
    const router = useRouter();
    return (
        <Button
            variant={'ghost'}
            className="h-6 w-6 p-0 rounded-md"
            onClick={() => router.back()}
            aria-label="close modal">
            <X className="h-4 w-4" />
        </Button>
    );
};