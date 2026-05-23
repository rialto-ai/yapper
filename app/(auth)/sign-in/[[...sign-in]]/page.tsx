import { SignIn } from "@clerk/nextjs";
import { hasClerk } from "@/lib/auth";
import { ClerkNotConfigured } from "@/components/clerk-not-configured";
import { Logo } from "@/components/logo";

export const metadata = { title: "Sign in" };

export default function Page() {
  return (
    <div className="space-y-7">
      <div className="lg:hidden flex justify-center mb-2">
        <Logo size={26} />
      </div>
      {hasClerk() ? (
        <SignIn
          signUpUrl="/sign-up"
          forceRedirectUrl="/app"
          fallbackRedirectUrl="/app"
        />
      ) : (
        <ClerkNotConfigured mode="sign-in" />
      )}
    </div>
  );
}
