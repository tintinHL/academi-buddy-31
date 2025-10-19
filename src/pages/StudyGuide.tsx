import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Download } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const StudyGuide = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [studyGuide, setStudyGuide] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
      toast({
        title: "Files uploaded",
        description: `${newFiles.length} file(s) added successfully`,
      });
    }
  };

  const handleGenerate = async () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one file",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setStudyGuide(
        "# Comprehensive Study Guide\n\n## Key Topics Covered\n\n### Topic 1: Introduction\nThis section covers the fundamental concepts...\n\n### Topic 2: Core Principles\nDetailed explanation of the main principles...\n\n### Topic 3: Advanced Concepts\nExploring more complex topics and their applications...\n\n## Summary\nKey takeaways and important points to remember..."
      );
      setIsGenerating(false);
      toast({
        title: "Study guide generated",
        description: "Your comprehensive study guide is ready",
      });
    }, 2000);
  };

  const handleExportPDF = () => {
    toast({
      title: "Exporting PDF",
      description: "Your study guide will be downloaded shortly",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">AI Study Guide Generator</h1>
            <p className="text-muted-foreground text-lg">
              Upload your lecture notes, slides, or textbook pages and let AI create a comprehensive study guide
            </p>
          </div>

          <Card className="p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Upload Your Files</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop or click to upload PDFs, images, or documents
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button variant="outline" asChild>
                    <span className="cursor-pointer">
                      <FileText className="w-4 h-4 mr-2" />
                      Choose Files
                    </span>
                  </Button>
                </label>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold">Uploaded Files ({files.length})</h4>
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-muted rounded-lg"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-primary" />
                          <span className="text-sm">{file.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {(file.size / 1024).toFixed(1)} KB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button
                className="w-full"
                onClick={handleGenerate}
                disabled={isGenerating || files.length === 0}
              >
                {isGenerating ? "Generating..." : "Generate Study Guide"}
              </Button>
            </div>
          </Card>

          {studyGuide && (
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Your Study Guide</h3>
                  <Button onClick={handleExportPDF} variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export as PDF
                  </Button>
                </div>
                <div className="prose prose-sm max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                    {studyGuide}
                  </pre>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyGuide;
