import { Target, Maximize, Clock, Users } from 'lucide-react';

const How = () => {
  const steps = [
    {
      number: 1,
      title: "Baseline Diagnostic",
      description: "Start with a quick adaptive test.",
      icon: Target,
    },
    {
      number: 2,
      title: "Targeted Practice",
      description: "Improve using Focus 50™ and topic-based sets.",
      icon: Maximize,
    },
    {
      number: 3,
      title: "Mock & Review",
      description: "Timed mocks, error analysis, AI feedback.",
      icon: Clock,
    },
    {
      number: 4,
      title: "Mentor Review",
      description: "Book a mentor to analyze your performance dashboard.",
      icon: Users,
      optional: true,
    },
  ];

  const IconContainer = ({ children }) => (
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4 mx-auto shadow-md">
      <div className="text-blue-600 w-10 h-10">{children}</div>
    </div>
  );

  return (
    <div className="font-sans py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">How It Works</h1>
          <p className="text-lg text-gray-500">Four simple steps to PLAB success</p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white p-6 flex flex-col items-center text-center rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                {/* Icon */}
                <IconContainer>
                  <StepIcon className="w-full h-full" />
                </IconContainer>

                {/* Title with Number */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2 flex-wrap justify-center">
                  <span className="flex items-center justify-center w-6 h-6 rounded-sm bg-blue-100 text-blue-600 font-bold text-sm">
                    {step.number}
                  </span>
                  <span>{step.title}</span>
                  {/* Optional label inline with title */}
                  {step.optional && (
                    <span>
                      (Optional, Chargeable)
                    </span>
                  )}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Login Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-200 text-lg">
            Login to Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default How;


