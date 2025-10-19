import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MessageSquare, Plus, Search, TrendingUp, Users } from "lucide-react";

const Forum = () => {
  const courses = [
    { name: "Mathematics", threads: 42, members: 156 },
    { name: "Physics", threads: 38, members: 142 },
    { name: "Chemistry", threads: 31, members: 128 },
    { name: "Biology", threads: 45, members: 167 },
    { name: "Computer Science", threads: 56, members: 189 },
  ];

  const popularThreads = [
    {
      title: "Best way to study for Calculus finals?",
      course: "Mathematics",
      author: "Alex Johnson",
      replies: 23,
      views: 156,
      time: "2 hours ago",
    },
    {
      title: "Sharing my Physics notes for Chapter 5",
      course: "Physics",
      author: "Sarah Chen",
      replies: 15,
      views: 89,
      time: "5 hours ago",
    },
    {
      title: "Need help with organic chemistry reactions",
      course: "Chemistry",
      author: "Mike Wilson",
      replies: 31,
      views: 203,
      time: "1 day ago",
    },
    {
      title: "Study group forming for Biology midterm",
      course: "Biology",
      author: "Emma Davis",
      replies: 12,
      views: 67,
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Discussion Forum</h1>
              <p className="text-muted-foreground text-lg">
                Connect, collaborate, and learn together
              </p>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Thread
            </Button>
          </div>

          {/* Search */}
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search discussions..."
                className="border-0 focus-visible:ring-0"
              />
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Popular Threads
                </h2>
                <div className="space-y-3">
                  {popularThreads.map((thread, index) => (
                    <div
                      key={index}
                      className="p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold hover:text-primary transition-colors">
                            {thread.title}
                          </h3>
                          <Badge variant="secondary">{thread.course}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{thread.author}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MessageSquare className="w-3 h-3" />
                            {thread.replies} replies
                          </span>
                          <span>•</span>
                          <span>{thread.views} views</span>
                          <span>•</span>
                          <span>{thread.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-4">Course Communities</h3>
                <div className="space-y-3">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer"
                    >
                      <div className="font-medium mb-2">{course.name}</div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {course.threads}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {course.members}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Community Stats</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Threads</span>
                    <span className="font-semibold">212</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Members</span>
                    <span className="font-semibold">782</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Notes Shared</span>
                    <span className="font-semibold">456</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
