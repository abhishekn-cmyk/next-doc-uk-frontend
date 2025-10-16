import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

interface PublicationCardProps {
  category: string;
  downloads: number;
  title: string;
  authors: string;
  date: string;
  description: string;
}

export function PublicationCard({
  category,
  downloads,
  title,
  authors,
  date,
  description,
}: PublicationCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="default">{category}</Badge>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Download className="w-4 h-4" />
            {downloads.toLocaleString()}
          </span>
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <p>{authors}</p>
          <p>{date}</p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <CardDescription className="mb-4">{description}</CardDescription>
        <div className="flex gap-2">
          <Button variant="default" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" className="flex-1">
            <FileText className="w-4 h-4 mr-2" />
            View Abstract
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}