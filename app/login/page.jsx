"use client";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthTabs from "@/components/auth/AuthTabs";
import LoginForm from "@/components/auth/LoginForm";

function LoginPage() {
  return (
    <AuthLayout>
      <AuthTabs />
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
