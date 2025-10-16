import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Download,
  Lock,
  FileText,
  BookOpen,
  Award,
  CheckCircle2,
} from "lucide-react";

type StudyMaterial = {
  id: string;
  title: string;
  description: string;
  category: string;
  subscription_required: string;
  file_size: number;
};

type UserProfile = {
  subscription_status: string;
};

const StudyMaterials = () => {
  const [materials, setMaterials] = useState<StudyMaterial[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState("PLAB");

  useEffect(() => {
    // Mock user profile
    setUserProfile({ subscription_status: "Free" });

    // Mock study materials
    const sampleMaterials: StudyMaterial[] = [
      {
        id: "1",
        title: "PLAB 1 Question Bank - Emergency Medicine",
        description:
          "Comprehensive question bank covering emergency medicine topics for PLAB 1 preparation.",
        category: "PLAB",
        subscription_required: "Free",
        file_size: 2048000,
      },
      {
        id: "2",
        title: "PLAB 1 Question Bank - Surgery",
        description: "Surgical topics for PLAB 1 exam preparation.",
        category: "PLAB",
        subscription_required: "Core",
        file_size: 3072000,
      },
      {
        id: "3",
        title: "MRCP Part 1 Cardiology Notes",
        description: "Cardiology notes and practice questions for MRCP Part 1.",
        category: "MRCP",
        subscription_required: "Core",
        file_size: 4096000,
      },
      {
        id: "4",
        title: "CPD Certificate - Clinical Leadership",
        description:
          "Clinical leadership and management CPD module with certificate.",
        category: "CPD",
        subscription_required: "Elite",
        file_size: 1024000,
      },
    ];

    setMaterials(sampleMaterials);
  }, []);

  const checkAccess = (material: StudyMaterial): boolean => {
    if (!userProfile) return material.subscription_required === "Free";

    const userTier = userProfile.subscription_status || "Free";
    const requiredTier = material.subscription_required;

    if (requiredTier === "Free") return true;
    if (requiredTier === "Core" && ["Core", "Elite"].includes(userTier))
      return true;
    if (requiredTier === "Elite" && userTier === "Elite") return true;

    return false;
  };

  const handleDownload = (material: StudyMaterial) => {
    if (!checkAccess(material)) {
      alert(
        `${material.subscription_required} subscription required to access this material.`
      );
      return;
    }

    if (userProfile?.subscription_status === "Free") {
      // Mock usage limit
      alert("Free users can download 1 PDF per week. Mock limit check passed.");
    }

    // Mock download
    console.log(`Downloading ${material.title}...`);
    alert(`Downloading ${material.title}...`);
  };

  const formatFileSize = (bytes: number): string => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  const getFilteredMaterials = (category: string) =>
    materials.filter((m) => m.category === category);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl sm:px-8 md:px-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Study Materials
        </h1>
        <p className="text-muted-foreground">
          Access comprehensive study materials, question banks, and CPD modules
        </p>
      </div>

      {userProfile && (
        <Alert className="mb-6">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>
            <div className="flex justify-between items-center">
              <span>
                Current subscription:{" "}
                <strong>{userProfile.subscription_status}</strong>
                {userProfile.subscription_status === "Free" &&
                  " - Limited to 1 PDF per week"}
              </span>
              {userProfile.subscription_status === "Free" && (
                <Button size="sm" variant="outline">
                  Upgrade Plan
                </Button>
              )}
            </div>
          </AlertDescription>
        </Alert>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="PLAB" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            PLAB
          </TabsTrigger>
          <TabsTrigger value="MRCP" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            MRCP
          </TabsTrigger>
          <TabsTrigger value="CPD" className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            CPD
          </TabsTrigger>
        </TabsList>

        {["PLAB", "MRCP", "CPD"].map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredMaterials(cat).map((material) => (
                <MaterialCard
                  key={material.id}
                  material={material}
                  hasAccess={checkAccess(material)}
                  onDownload={() => handleDownload(material)}
                  formatFileSize={formatFileSize}
                />
              ))}
            </div>
            {getFilteredMaterials(cat).length === 0 && (
              <EmptyState category={cat} />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

interface MaterialCardProps {
  material: StudyMaterial;
  hasAccess: boolean;
  onDownload: () => void;
  formatFileSize: (bytes: number) => string;
}

const MaterialCard = ({
  material,
  hasAccess,
  onDownload,
  formatFileSize,
}: MaterialCardProps) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex justify-between items-start mb-2">
        <Badge variant={hasAccess ? "default" : "secondary"}>
          {material.subscription_required}
        </Badge>
        {!hasAccess && <Lock className="h-4 w-4 text-muted-foreground" />}
      </div>
      <CardTitle className="text-lg leading-tight">{material.title}</CardTitle>
      <CardDescription>{material.description}</CardDescription>
    </CardHeader>

    <CardContent>
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-muted-foreground">
          {formatFileSize(material.file_size)}
        </span>
        <FileText className="h-4 w-4 text-muted-foreground" />
      </div>

      <Button
        onClick={onDownload}
        disabled={!hasAccess}
        className="w-full"
        variant={hasAccess ? "default" : "outline"}
      >
        {hasAccess ? (
          <>
            <Download className="h-4 w-4 mr-2" />
            Download
          </>
        ) : (
          <>
            <Lock className="h-4 w-4 mr-2" />
            Upgrade Required
          </>
        )}
      </Button>
    </CardContent>
  </Card>
);

const EmptyState = ({ category }: { category: string }) => (
  <div className="text-center py-12">
    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-foreground mb-2">
      No {category} materials available
    </h3>
    <p className="text-muted-foreground">
      New materials are added regularly. Check back soon!
    </p>
  </div>
);

export default StudyMaterials;
