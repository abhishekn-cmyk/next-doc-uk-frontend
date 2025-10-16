import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExamCardProps {
  title: string;
  description: string;
  comingSoon?: boolean;
  onJoinWaitlist?: () => void; // function prop
}

export function ExamCard({ title, description, comingSoon = true, onJoinWaitlist }: ExamCardProps) {
  return (
    <Card className="aspect-square flex flex-col justify-between shadow-md rounded-lg">
      <CardHeader>
        {comingSoon && (
          <Badge variant="secondary" className="w-fit mb-2">
            Coming Soon
          </Badge>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm mt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Button variant="outline" className="w-full" onClick={onJoinWaitlist}>
          Join Waitlist
        </Button>
      </CardContent>
    </Card>
  );
}
