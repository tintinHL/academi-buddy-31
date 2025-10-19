import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BookOpen, Target, Sparkles, CheckCircle2, Clock, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Tracker = () => {
  const topics = [
    { 
      name: "Calculus Fundamentals", 
      progress: 85, 
      status: "strong",
      description: "Advanced understanding of limits, derivatives, and integration techniques",
      completed: ["Limits and continuity", "Differentiation rules", "Integration by parts"],
      inProgress: ["Advanced integration techniques"],
      nextUp: ["Multivariable calculus"]
    },
    { 
      name: "Physics Mechanics", 
      progress: 60, 
      status: "good",
      description: "Working knowledge of motion, forces, and energy principles",
      completed: ["Newton's laws", "Kinematics"],
      inProgress: ["Work and energy", "Momentum"],
      nextUp: ["Rotational motion", "Gravity"]
    },
    { 
      name: "Chemistry Basics", 
      progress: 40, 
      status: "needs-work",
      description: "Foundational concepts in chemical reactions and bonding",
      completed: ["Atomic structure"],
      inProgress: ["Chemical bonding", "Periodic table"],
      nextUp: ["Stoichiometry", "Acids and bases"]
    },
    { 
      name: "Biology Cell Structure", 
      progress: 90, 
      status: "strong",
      description: "Comprehensive grasp of cellular components and their functions",
      completed: ["Cell membrane", "Organelles", "Cell division", "Protein synthesis"],
      inProgress: ["Cell signaling"],
      nextUp: ["Genetics basics"]
    },
    { 
      name: "Computer Science Algorithms", 
      progress: 70, 
      status: "good",
      description: "Solid foundation in algorithm design and complexity analysis",
      completed: ["Sorting algorithms", "Search algorithms", "Big O notation"],
      inProgress: ["Dynamic programming"],
      nextUp: ["Graph algorithms", "Greedy algorithms"]
    },
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
            <Accordion type="single" collapsible className="space-y-4">
              {topics.map((topic, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center justify-between w-full pr-4">
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
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      <Progress value={topic.progress} className="h-2" />
                      
                      <p className="text-sm text-muted-foreground">
                        {topic.description}
                      </p>

                      <div className="grid gap-3">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Completed</span>
                          </div>
                          <ul className="ml-6 space-y-1">
                            {topic.completed.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>In Progress</span>
                          </div>
                          <ul className="ml-6 space-y-1">
                            {topic.inProgress.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <FileText className="w-4 h-4 text-orange-500" />
                            <span>Coming Up Next</span>
                          </div>
                          <ul className="ml-6 space-y-1">
                            {topic.nextUp.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground">
                                • {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
