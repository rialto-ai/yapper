import { SignUp } from "@clerk/nextjs";
import { hasClerk } from "@/lib/auth";
import { ClerkNotConfigured } from "@/components/clerk-not-configured";
import { Logo } from "@/components/logo";

export const metadata = { title: "Sign up" };

export default function Page() {
  return (
    <div className="space-y-7">
      <div className="lg:hidden flex justify-center mb-2">
        <Logo size={26} />
      </div>
      {hasClerk() ? (
        <SignUp
          signInUrl="/sign-in"
          forceRedirectUrl="/app"
          fallbackRedirectUrl="/app"
        />
      ) : (
        <ClerkNotConfigured mode="sign-up" />
      )}
    </div>
  );
}
