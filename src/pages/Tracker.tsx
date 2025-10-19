import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Target, Sparkles } from "lucide-react";

const Tracker = () => {
  const topics = [
    { name: "Calculus Fundamentals", progress: 85, status: "strong" },
    { name: "Physics Mechanics", progress: 60, status: "good" },
    { name: "Chemistry Basics", progress: 40, status: "needs-work" },
    { name: "Biology Cell Structure", progress: 90, status: "strong" },
    { name: "Computer Science Algorithms", progress: 70, status: "good" },
  ];

  const recommendations = [
    {
      topic: "Chemistry Basics",
      reason: "Low progress detected",
      action: "Review chapters 3-5",
      priority: "high",
    },
    {
      topic: "Physics Mechanics",
      reason: "Due for review",
      action: "Practice problem sets",
      priority: "medium",
    },
    {
      topic: "Calculus Fundamentals",
      reason: "Strong foundation",
      action: "Move to advanced topics",
      priority: "low",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "strong":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case "good":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case "needs-work":
        return "bg-orange-500/10 text-orange-700 dark:text-orange-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      case "medium":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
      case "low":
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Learning Tracker</h1>
            <p className="text-muted-foreground text-lg">
              Monitor your progress and get personalized study recommendations
            </p>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-sm text-muted-foreground">Topics Studied</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">73%</div>
                  <div className="text-sm text-muted-foreground">Average Progress</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">8h</div>
                  <div className="text-sm text-muted-foreground">Study Time This Week</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Topics Progress */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Your Topics</h2>
            <div className="space-y-4">
              {topics.map((topic, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{topic.name}</span>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(topic.status)}
                      >
                        {topic.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {topic.progress}%
                    </span>
                  </div>
                  <Progress value={topic.progress} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* AI Recommendations */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">AI Recommendations</h2>
            </div>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="p-4 border border-border rounded-lg space-y-2 hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="font-semibold">{rec.topic}</div>
                      <div className="text-sm text-muted-foreground">
                        {rec.reason}
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={getPriorityColor(rec.priority)}
                    >
                      {rec.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">
                      Recommended: {rec.action}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
