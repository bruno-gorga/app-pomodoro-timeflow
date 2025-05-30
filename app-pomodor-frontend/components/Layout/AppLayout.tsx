import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const AppLayout = ({ children, className }: AppLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-xl font-bold tracking-tight">TimeFlow</h1>
          </div>
          {user && (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button variant="ghost" onClick={handleSignOut}>
                Sign out
              </Button>
            </div>
          )}
        </div>
      </header>
      <main className={cn("container py-6", className)}>{children}</main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TimeFlow AI Pomodoro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;
