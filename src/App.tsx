import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import Layout from "./layout/Layout";

const GetStarted = lazy(() => import("./components/GetStarted/GetStarted"));
const PLABQuiz = lazy(() => import("./components/PLABQuiz"));
const ChatBot = lazy(() => import("./components/ChatBot"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
import WritingPage from "./pages/WritingPage";
import SpeakingPage from "./pages/SpeakingPage";
import ListeningPage from "./pages/ListingPage";
import ReadingPage from "./pages/ReadingPage";
import Royal from "./pages/Royal/Royal";
import Labs from "./pages/Labs";
import Pricing from "./pages/Pricing";
import PLABHero from "./pages/exams/PLAB/PLAB";
// import Mr from "./pages/exams/Mrc";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Products = lazy(() => import("./pages/Products"));
// const ComingSoon = lazy(() => import("./Coming"));
// const PLAB = lazy(() => import("./pages/exams/PLAB"));
const IELTS = lazy(() => import("./pages/exams/IELTS"));
const MRCP = lazy(() => import("./pages/exams/MRCP"));
const MRCS = lazy(() => import("./pages/exams/MRCS"));
const MRCOG = lazy(() => import("./pages/exams/MRCOG"));
const MRCPCH = lazy(() => import("./pages/exams/MRCPCH"));
const English =lazy(()=>import("./pages/exams/English"));
const Postgraduate = lazy(() => import("./pages/exams/Postgraduate"));
const Research = lazy(() => import("./pages/Research"));
const Mentors = lazy(() => import("./pages/Mentors"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Login = lazy(() => import("./pages/auth/Login"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const CvBooster = lazy(() => import("./components/Cv/CvBooster"));
const StudyMaterials = lazy(() => import("./pages/StudyMaterials"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GapMap = lazy(() => import("./components/GapMap/GapMap"));
const SponsorMatch = lazy(() => import("./components/Sponsor/SponsorMatch"));
const InterviewSim = lazy(() => import("./components/Interview/InterviewSim"));

const PaymentSuccess = lazy(() => import("./pages/PaymentSuccess"));
const PaymentFailure = lazy(() => import("./pages/PaymentFailure"));

export default function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return (
    <>
      <Suspense fallback={<div className="min-h-dvh bg-black" />}>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
             <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/products" element={<ComingSoon />} /> */}
            <Route path="/exams/ielts-oet" element={<IELTS />} />
            <Route path="/exams/plab" element={<PLABHero />} />
            <Route path="/exams/mrcp" element={<MRCP />} />
            <Route path="/exams/mrcs" element={<MRCS />} />
            <Route path="/exams/mrcog" element={<MRCOG />} />
             <Route path="/english" element={<English />} />
                <Route path="/writing" element={<WritingPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
          <Route path="/listening" element={<ListeningPage />} />
          <Route path="/reading" element={<ReadingPage />} />
            <Route path="/exams/mrcpch" element={<MRCPCH />} />
            <Route path="/exams/postgraduate" element={<Postgraduate />} />
            <Route path="/research" element={<Research />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/plab-quiz" element={<PLABQuiz />} />
            <Route path="/cv-booster" element={<CvBooster />} />
            <Route path="/interviewsim" element={<InterviewSim />} />
            <Route path="/gap-map" element={<GapMap />} />
            <Route path="/sponsor-match" element={<SponsorMatch />} />
            <Route path="/study-materials" element={<StudyMaterials />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="/exams/royal-college"element={<Royal/>}/>
            <Route path="/labs" element={<Labs/>}/>
            <Route path="/failure" element={<PaymentFailure />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ChatBot />
    </>
  );
}
