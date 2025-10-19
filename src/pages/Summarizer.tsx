import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Summarizer = () => {
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState<{
    keyNotes: string[];
    mainArguments: string[];
    conclusions: string[];
  } | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      toast({
        title: "File uploaded",
        description: "Ready to summarize your paper",
      });
    }
  };

  const handleSummarize = async () => {
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload a paper first",
        variant: "destructive",
      });
      return;
    }

    setIsSummarizing(true);
    // Simulate AI summarization
    setTimeout(() => {
      setSummary({
        keyNotes: [
          "Research focuses on the application of machine learning in educational contexts",
          "Study involves 500 participants across multiple institutions",
          "Novel methodology combining qualitative and quantitative analysis",
          "Results show significant improvement in learning outcomes",
        ],
        mainArguments: [
          "Traditional learning methods are less effective in digital environments",
          "AI-powered personalization can adapt to individual learning styles",
          "Data-driven insights enable better educational decision-making",
          "Integration of technology requires proper pedagogical frameworks",
        ],
        conclusions: [
          "AI-enhanced learning platforms demonstrate measurable benefits",
          "Implementation requires careful consideration of ethical implications",
          "Further research needed in long-term effectiveness",
          "Recommended adoption with appropriate teacher training",
        ],
      });
      setIsSummarizing(false);
      toast({
        title: "Summary generated",
        description: "Your paper has been analyzed",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Pre-Reading Summarizer</h1>
            <p className="text-muted-foreground text-lg">
              Upload an academic paper and get instant key insights, arguments, and conclusions
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-secondary transition-colors">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Upload Academic Paper</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  PDF, DOC, or DOCX files accepted
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="paper-upload"
                />
                <label htmlFor="paper-upload">
                  <Button variant="outline" asChild>
                    <span className="cursor-pointer">
                      <FileText className="w-4 h-4 mr-2" />
                      Choose Paper
                    </span>
                  </Button>
                </label>
              </div>

              {file && (
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{file.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {(file.size / 1024).toFixed(1)} KB
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button
                className="w-full"
                onClick={handleSummarize}
                disabled={isSummarizing || !file}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                {isSummarizing ? "Analyzing..." : "Generate Summary"}
              </Button>
            </div>
          </Card>

          {summary && (
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-primary" />
                  </div>
                  Key Notes
                </h3>
                <ul className="space-y-2">
                  {summary.keyNotes.map((note, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{note}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-secondary" />
                  </div>
                  Main Arguments
                </h3>
                <ul className="space-y-2">
                  {summary.mainArguments.map((arg, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{arg}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <FileText className="w-4 h-4 text-accent" />
                  </div>
                  Core Conclusions
                </h3>
                <ul className="space-y-2">
                  {summary.conclusions.map((conclusion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{conclusion}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summarizer;
