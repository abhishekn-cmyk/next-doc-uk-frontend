
import { Button } from "@/components/ui/button"; // if you have a UI button
import Head from "@/layout/Head";

export default function ComingSoon() {
  return (
    <>
      <Head
        title="Coming Soon - NextDoc Global"
        description="This page is under development. Stay tuned for updates from NextDoc Global."
      />
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          🚧 Coming Soon!
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-xl">
          The Products page is under development. We'll be launching it very
          soon. Stay tuned for updates!
        </p>
        <Button
          onClick={() => (window.location.href = "/")}
          className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg"
        >
          Go Back Home
        </Button>
      </div>
    </>
  );
}
