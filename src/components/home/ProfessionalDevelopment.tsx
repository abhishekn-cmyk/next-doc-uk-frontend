import { useState } from "react";
import { Rocket, ArrowRight, X, Globe, Users, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FourCards from "./FourCards";

export default function ProfessionalDevelopment() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* Hero / Badge / Heading */}
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 rounded-full bg-blue-900 text-white px-3 py-1 shadow-sm">
            <Rocket className="h-3.5 w-3.5 text-white" aria-hidden="true" />
            <span className="text-xs font-medium">Flagship Products</span>
          </div>
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          Professional Development Suite
        </h1>

        <p className="max-w-2xl text-sm md:text-base text-gray-600 leading-relaxed">
          Evidence-based learning tools developed by NHS consultants to
          accelerate your medical career progression through structured
          competency development.
        </p>
      </div>

      {/* Four Cards Section */}
      <FourCards />

      {/* CTA Section */}
      <div className="w-full flex flex-col items-center text-center py-12 px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          Ready to Start Your NHS Journey?
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Book a consultation with our NHS experts. We're here to guide you
          every step of the way.
        </p>
        <button
          onClick={() => setOpenModal(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-900 text-white font-medium hover:bg-blue-800 transition"
        >
          Book a free consultation
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Contact Us
              </h3>

              <div className="divide-y divide-gray-200">
                {/* Email */}
                <div className="flex flex-col items-center gap-2 pb-6">
                  <Globe className="h-7 w-7 text-blue-900" />
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@nextdocglobal.com"
                      className="text-blue-900 text-sm font-medium hover:underline"
                    >
                      info@nextdocglobal.com
                    </a>
                  </div>
                </div>

                {/* UK Office */}
                <div className="flex flex-col items-center gap-2 py-6">
                  <Users className="h-7 w-7 text-blue-900" />
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      UK Office
                    </h4>
                    <a
                      href="tel:+447733673574"
                      className="text-sm text-gray-700 font-medium hover:underline"
                    >
                      +44 7733673574
                    </a>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mt-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <a
                        href="https://wa.me/447733673574"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        WhatsApp UK
                      </a>
                    </div>
                  </div>
                </div>

                {/* India Office */}
                <div className="flex flex-col items-center gap-2 pt-6">
                  <Users className="h-7 w-7 text-blue-900" />
                  <div className="text-center">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                      India Office
                    </h4>
                    <a
                      href="tel:+919483540070"
                      className="text-sm text-gray-700 font-medium hover:underline"
                    >
                      +91 9483540070
                    </a>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mt-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      <a
                        href="https://wa.me/919483540070"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        WhatsApp India
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
