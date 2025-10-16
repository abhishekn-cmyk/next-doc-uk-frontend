import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExamCardProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export function ExamCard({ title, description, comingSoon = true }: ExamCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        {comingSoon && (
          <Badge variant="secondary" className="w-fit mb-2">
            Coming Soon
          </Badge>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button variant="outline" className="w-full">
          Join Waitlist
        </Button>
      </CardContent>
    </Card>
  );
}