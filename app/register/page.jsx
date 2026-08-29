"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthTabs from "@/components/auth/AuthTabs";
import SignupForm from "@/components/auth/SignupForm";

function SignupPage() {
  return (
    <AuthLayout>
      <AuthTabs />
      <SignupForm />
    </AuthLayout>
  );
}

export default SignupPage;
