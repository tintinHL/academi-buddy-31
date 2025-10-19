import { Link, useLocation } from "react-router-dom";
import { BookOpen, FileText, TrendingUp, Calendar, MessageSquare, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/study-guide", icon: BookOpen, label: "Study Guide" },
    { to: "/summarizer", icon: FileText, label: "Summarizer" },
    { to: "/tracker", icon: TrendingUp, label: "Tracker" },
    { to: "/deadlines", icon: Calendar, label: "Deadlines" },
    { to: "/forum", icon: MessageSquare, label: "Forum" },
  ];

  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AcademiHub
            </span>
          </Link>

          <div className="flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden md:inline">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
