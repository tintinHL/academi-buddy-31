import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, TrendingUp, Calendar, MessageSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "AI Study Guide Generator",
      description: "Upload your notes and materials. Let AI create comprehensive study guides.",
      color: "from-primary to-secondary",
      link: "/study-guide",
    },
    {
      icon: FileText,
      title: "Pre-Reading Summarizer",
      description: "Get key insights from academic papers in seconds.",
      color: "from-secondary to-accent",
      link: "/summarizer",
    },
    {
      icon: TrendingUp,
      title: "Learning Tracker",
      description: "Track your progress and get personalized study recommendations.",
      color: "from-primary to-accent",
      link: "/tracker",
    },
    {
      icon: Calendar,
      title: "Deadline Tracker",
      description: "Never miss an exam or assignment deadline again.",
      color: "from-accent to-secondary",
      link: "/deadlines",
    },
    {
      icon: MessageSquare,
      title: "Discussion Forum",
      description: "Connect with peers, share notes, and collaborate.",
      color: "from-secondary to-primary",
      link: "/forum",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Study Companion</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Study Smarter with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AcademiHub
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your all-in-one platform for AI-powered study guides, smart summaries, 
              progress tracking, and collaborative learning.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="shadow-md">
                <Link to="/study-guide">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/forum">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Join Community
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} to={feature.link}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10k+</div>
              <div className="text-muted-foreground">Study Guides Generated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">5k+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
