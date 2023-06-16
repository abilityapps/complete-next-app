import SignUpComponent from "@/components/auth/SignUp";

export default function SignUpPage() {
    return (
        <div className="absolute inset-0">
            <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
                <SignUpComponent />
            </div>
        </div>
    );
};