import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Plus, Bell } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const Deadlines = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const upcomingDeadlines = [
    {
      title: "Calculus Final Exam",
      date: "2024-02-15",
      type: "exam",
      course: "Mathematics",
      daysLeft: 5,
    },
    {
      title: "Physics Lab Report",
      date: "2024-02-12",
      type: "assignment",
      course: "Physics",
      daysLeft: 2,
    },
    {
      title: "Chemistry Quiz",
      date: "2024-02-18",
      type: "exam",
      course: "Chemistry",
      daysLeft: 8,
    },
    {
      title: "English Essay",
      date: "2024-02-20",
      type: "assignment",
      course: "Literature",
      daysLeft: 10,
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "exam":
        return "bg-red-500/10 text-red-700 dark:text-red-400";
      case "assignment":
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getUrgencyColor = (daysLeft: number) => {
    if (daysLeft <= 3) return "border-red-500";
    if (daysLeft <= 7) return "border-yellow-500";
    return "border-border";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Deadline Tracker</h1>
              <p className="text-muted-foreground text-lg">
                Stay on top of your exams and assignments
              </p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Deadline
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <Card className="p-6 lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Calendar
              </h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mx-auto"
              />
            </Card>

            {/* Quick Stats */}
            <div className="space-y-4">
              <Card className="p-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-muted-foreground">
                    Upcoming Deadlines
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-red-500">2</div>
                  <div className="text-sm text-muted-foreground">
                    Due This Week
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-green-500">12</div>
                  <div className="text-sm text-muted-foreground">
                    Completed This Month
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
            <div className="space-y-3">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={index}
                  className={`p-4 border-l-4 ${getUrgencyColor(
                    deadline.daysLeft
                  )} bg-card rounded-r-lg hover:shadow-md transition-shadow`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{deadline.title}</h3>
                        <Badge
                          variant="secondary"
                          className={getTypeColor(deadline.type)}
                        >
                          {deadline.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {deadline.course} • {deadline.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold">
                          {deadline.daysLeft}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          days left
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Bell className="w-4 h-4" />
                      </Button>
                    </div>
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

export default Deadlines;
