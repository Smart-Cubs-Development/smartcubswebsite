import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calendar,
  Clock,
  Users,
  FileText,
  Shield,
  Camera,
  Heart,
  CheckCircle2,
  Star,
  Play,
  Mail,
  Linkedin,
} from "lucide-react";
import logo from "./logo.png";
import astar from "./astar.png";
import { useState } from 'react';

export default function Index() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-white font-merriweather-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full opacity-70 blur-xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-70 blur-xl"></div>

        <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-32">
          {/* Header */}
          <header className="flex justify-center items-center gap-14 mb-20 p-4 border border-transparent">
              {/* Smart Cubs Logo */}
              <div>
                <img 
                  src={logo} 
                  alt="Smart Cubs Logo" 
                  className="h-19 w-auto" 
                />
              </div>

              {/* A*STAR Logo */}
              <div className="text-center">
                <div className="text-lg font-bold text-gray-400 mb-3">
                  In collaboration with:
                </div>
                <img
                  src={astar}
                  alt="A*STAR Logo"
                  className="h-19 w-auto"
                />
              </div>
          </header>


          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-6xl font-bold leading-tight mb-8">
              <span className="text-gray-900">Less Reporting.</span>
              <br />
              <span className="text-purple-600">More Caring.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Smart Cubs helps preschool teachers in Singapore automate incident
              reporting, saving time for teachers and ensuring the safety of
              children.
            </p>

            <Button 
              onClick={() => window.open("https://calendly.com/smartcubs", "_blank")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {false && (
            <>
              {/* Video Preview */}
              <div className="mt-20 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  {/* Video Player Section */}
                  <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-purple-100 to-blue-100">
                    {!showVideo ? (
                      // The Preview State (what you see first)
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setShowVideo(true)}
                      >
                        <Button className="bg-purple-600 hover:bg-purple-700 w-16 h-16 rounded-full pointer-events-none">
                          <Play className="h-8 w-8 text-white" />
                        </Button>
                      </div>
                    ) : (
                      // The Video Player State (what you see after clicking)
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=r3_WtaPq-c40cY3I"
                        title="AI Assistant Video Preview"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                  
                  {/* Description Text Section - Now safely outside */}
                  <div className="mt-4 text-center">
                    <div className="text-gray-600 text-sm">
                      AI Assistant Observing Preschool Classroom
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Preschool Teachers Wear Too Many Hats
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Caring for a dozen toddlers means constant multitasking. Incident
              reports? Often the last thing on their minds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center justify-items-center max-w-5xl mx-auto">
            <div className="space-y-8 md:col-span-2 w-full max-w-2xl mx-auto">
              {/* Problem 1 */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-lg p-3">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      60+ Minutes Daily
                    </h3>
                    <p className="text-gray-600">
                      Spent on documentation and incident reporting after hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 rounded-lg p-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Up to 20 Children
                    </h3>
                    <p className="text-gray-600">
                      Per teacher, making it impossible to catch every incident
                      in real-time
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <FileText className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Missed Incidents
                    </h3>
                    <p className="text-gray-600">
                      Important events often go undocumented on time due to
                      overwhelming workload
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center px-6">
                add some image of some teachers and kids interaction in the
                preschool
              </p>
            </div> */}
          </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Let AI Help With the Paperwork
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our intelligent system works quietly in the background, so
              teachers can focus on what matters most: the children.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Solution 1 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Heart className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <h3 className="font-bold text-gray-900">
                        Auto-generated incident logs
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Automatic detection, documentation and reporting of
                      classroom incidents in real-time*
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Camera className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <h3 className="font-bold text-gray-900">
                        Short video clips of each event
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Contextualised videos help preschool administrators better
                      understand what happened with high definition details.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <h3 className="font-bold text-gray-900">
                        Privacy-first, Pre-School Centric
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      Preschool administrators maintain full control over
                      reports and escalation procedures, providing peace of mind
                      for parents.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full max-h-[650px] mx-auto flex flex-col justify-between">
                
                {/* Image box */}
                <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 rounded-xl p-4 relative h-80 flex items-center justify-center">
                  <img 
                    src="/algo.png" 
                    alt="SmartCubs in Action" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Subtitle */}
                <p className="mt-6 text-gray-700 text-[15px]">
                  Check out our smart software keeping both teachers and kids safe!
                </p>

                {/* Button */}
                <div className="mt-6">
                  <Button 
                    onClick={() => window.open("https://calendly.com/smartcubs", "_blank")}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl"
                  >
                    Learn More About Our Features
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Values Section */}
      <section className="py-24 bg-purple-600 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 border border-white rounded-full opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 border border-white rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 border border-white rounded-full opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">#ResponsibleAI</span>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Technology That Supports, Never Replaces
            </h2>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              We believe technology should support - not replace - human care.
              That's why we follow Responsible AI principles in everything we
              build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-4">Human-Centered</h3>
              <p className="text-purple-100 text-sm">
                AI enhances teacher capabilities without replacing human
                judgment and care
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-4">Privacy-First</h3>
              <p className="text-purple-100 text-sm">
                Data security and child privacy are built into every feature
                from day one
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="bg-white/20 rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-4">Transparent</h3>
              <p className="text-purple-100 text-sm">
                Clear about how our AI works and what decisions it makes for
                full accountability
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      {false && (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Preschools
            </h2>
            <p className="text-gray-600">
              Join hundreds of preschools across Singapore that trust SmartCubs
              to help their teachers focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
            {[
              {
                name: "Sunshine Preschool",
                initials: "SP",
                location: "Bukit Timah",
              },
              {
                name: "Little Learners Academy",
                initials: "LLA",
                location: "Bishan",
              },
              {
                name: "Rainbow Kids Center",
                initials: "RKC",
                location: "Toa Payoh",
              },
              {
                name: "Bright Minds Daycare",
                initials: "BMD",
                location: "Tanjong Pagar",
              },
              {
                name: "Happy Hearts Preschool",
                initials: "HHP",
                location: "Eunos",
              },
              {
                name: "Creative Kids Academy",
                initials: "CKA",
                location: "Punggol",
              },
            ].map((school, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-lg">
                    {school.initials}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {school.name}
                </h3>
                <p className="text-gray-500 text-xs">{school.location}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600">
              <span className="font-bold text-purple-600">20+</span> teachers
              already saving time with SmartCubs
            </p>
          </div>
        </div>
      </section>
      )}
      {/* Research Partner Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Official Research Partner
          </h2>
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/718701268283056638a7cb80b15bc05435afa8a6?width=617"
              alt="A*STAR Research Partner Logo"
              className="h-28 mx-auto"
            />
          </div>
          <p className="text-gray-600 font-bold max-w-3xl mx-auto">
            Joint venture with A*STAR, funded by the Singapore AI Safety
            Institute. Our collaboration with A*STAR intends to further the
            ResponsibleAI capabilities of our service offering, improving
            overall safety and accuracy for schools, students and teachers.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Loved by Teachers Everywhere
            </h2>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md mx-auto mb-12">
              <div className="text-3xl font-bold text-green-600 mb-2">
                60 mins
              </div>
              <div className="text-green-700">Saved per teacher, per day</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "SmartCubs gave me back my afternoons! I can finally focus on
                lesson planning instead of staying late to write incident
                reports."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">Ms. Johnson</div>
                <div className="text-gray-500 text-sm">
                  Lead Teacher
                </div>
              </div>
              <div className="absolute top-6 right-6 text-purple-200">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M21.3334 4C20.6261 4 19.9478 4.28095 19.4477 4.78105C18.9476 5.28115 18.6667 5.95942 18.6667 6.66667V14.6667C18.6667 15.3739 18.9476 16.0522 19.4477 16.5523C19.9478 17.0524 20.6261 17.3333 21.3334 17.3333C21.687 17.3333 22.0261 17.4738 22.2762 17.7239C22.5262 17.9739 22.6667 18.313 22.6667 18.6667V20C22.6667 20.7072 22.3857 21.3855 21.8856 21.8856C21.3855 22.3857 20.7073 22.6667 20 22.6667C19.6464 22.6667 19.3073 22.8071 19.0572 23.0572C18.8072 23.3072 18.6667 23.6464 18.6667 24V26.6667C18.6667 27.0203 18.8072 27.3594 19.0572 27.6095C19.3073 27.8595 19.6464 28 20 28C22.1218 28 24.1566 27.1571 25.6569 25.6569C27.1572 24.1566 28 22.1217 28 20V6.66667C28 5.95942 27.7191 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3334 4H21.3334Z" />
                  <path d="M6.66667 4C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V14.6667C4 15.3739 4.28095 16.0522 4.78105 16.5523C5.28115 17.0524 5.95942 17.3333 6.66667 17.3333C7.02029 17.3333 7.35943 17.4738 7.60948 17.7239C7.85952 17.9739 8 18.313 8 18.6667V20C8 20.7072 7.71905 21.3855 7.21895 21.8856C6.71885 22.3857 6.04058 22.6667 5.33333 22.6667C4.97971 22.6667 4.64057 22.8071 4.39052 23.0572C4.14048 23.3072 4 23.6464 4 24V26.6667C4 27.0203 4.14048 27.3594 4.39052 27.6095C4.64057 27.8595 4.97971 28 5.33333 28C7.45507 28 9.4899 27.1571 10.9902 25.6569C12.4905 24.1566 13.3333 22.1217 13.3333 20V6.66667C13.3333 5.95942 13.0524 5.28115 12.5523 4.78105C12.0522 4.28095 11.3739 4 10.6667 4H6.66667Z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "No more late-night incident reports. It's a game-changer for
                work-life balance. The parents love the detailed updates too!"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">David Chen</div>
                <div className="text-gray-500 text-sm">
                  Preschool Director
                </div>
              </div>
              <div className="absolute top-6 right-6 text-purple-200">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M21.3334 4C20.6261 4 19.9478 4.28095 19.4477 4.78105C18.9476 5.28115 18.6667 5.95942 18.6667 6.66667V14.6667C18.6667 15.3739 18.9476 16.0522 19.4477 16.5523C19.9478 17.0524 20.6261 17.3333 21.3334 17.3333C21.687 17.3333 22.0261 17.4738 22.2762 17.7239C22.5262 17.9739 22.6667 18.313 22.6667 18.6667V20C22.6667 20.7072 22.3857 21.3855 21.8856 21.8856C21.3855 22.3857 20.7073 22.6667 20 22.6667C19.6464 22.6667 19.3073 22.8071 19.0572 23.0572C18.8072 23.3072 18.6667 23.6464 18.6667 24V26.6667C18.6667 27.0203 18.8072 27.3594 19.0572 27.6095C19.3073 27.8595 19.6464 28 20 28C22.1218 28 24.1566 27.1571 25.6569 25.6569C27.1572 24.1566 28 22.1217 28 20V6.66667C28 5.95942 27.7191 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3334 4H21.3334Z" />
                  <path d="M6.66667 4C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V14.6667C4 15.3739 4.28095 16.0522 4.78105 16.5523C5.28115 17.0524 5.95942 17.3333 6.66667 17.3333C7.02029 17.3333 7.35943 17.4738 7.60948 17.7239C7.85952 17.9739 8 18.313 8 18.6667V20C8 20.7072 7.71905 21.3855 7.21895 21.8856C6.71885 22.3857 6.04058 22.6667 5.33333 22.6667C4.97971 22.6667 4.64057 22.8071 4.39052 23.0572C4.14048 23.3072 4 23.6464 4 24V26.6667C4 27.0203 4.14048 27.3594 4.39052 27.6095C4.64057 27.8595 4.97971 28 5.33333 28C7.45507 28 9.4899 27.1571 10.9902 25.6569C12.4905 24.1566 13.3333 22.1217 13.3333 20V6.66667C13.3333 5.95942 13.0524 5.28115 12.5523 4.78105C12.0522 4.28095 11.3739 4 10.6667 4H6.66667Z" />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 relative">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The AI catches things I might miss when I'm managing 15 active
                toddlers. It's like having an extra pair of eyes."
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">Sarah Martinez</div>
                <div className="text-gray-500 text-sm">
                  Teacher
                </div>
              </div>
              <div className="absolute top-6 right-6 text-purple-200">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M21.3334 4C20.6261 4 19.9478 4.28095 19.4477 4.78105C18.9476 5.28115 18.6667 5.95942 18.6667 6.66667V14.6667C18.6667 15.3739 18.9476 16.0522 19.4477 16.5523C19.9478 17.0524 20.6261 17.3333 21.3334 17.3333C21.687 17.3333 22.0261 17.4738 22.2762 17.7239C22.5262 17.9739 22.6667 18.313 22.6667 18.6667V20C22.6667 20.7072 22.3857 21.3855 21.8856 21.8856C21.3855 22.3857 20.7073 22.6667 20 22.6667C19.6464 22.6667 19.3073 22.8071 19.0572 23.0572C18.8072 23.3072 18.6667 23.6464 18.6667 24V26.6667C18.6667 27.0203 18.8072 27.3594 19.0572 27.6095C19.3073 27.8595 19.6464 28 20 28C22.1218 28 24.1566 27.1571 25.6569 25.6569C27.1572 24.1566 28 22.1217 28 20V6.66667C28 5.95942 27.7191 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3334 4H21.3334Z" />
                  <path d="M6.66667 4C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V14.6667C4 15.3739 4.28095 16.0522 4.78105 16.5523C5.28115 17.0524 5.95942 17.3333 6.66667 17.3333C7.02029 17.3333 7.35943 17.4738 7.60948 17.7239C7.85952 17.9739 8 18.313 8 18.6667V20C8 20.7072 7.71905 21.3855 7.21895 21.8856C6.71885 22.3857 6.04058 22.6667 5.33333 22.6667C4.97971 22.6667 4.64057 22.8071 4.39052 23.0572C4.14048 23.3072 4 23.6464 4 24V26.6667C4 27.0203 4.14048 27.3594 4.39052 27.6095C4.64057 27.8595 4.97971 28 5.33333 28C7.45507 28 9.4899 27.1571 10.9902 25.6569C12.4905 24.1566 13.3333 22.1217 13.3333 20V6.66667C13.3333 5.95942 13.0524 5.28115 12.5523 4.78105C12.0522 4.28095 11.3739 4 10.6667 4H6.66667Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-40 blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-40 blur-xl"></div>

        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gray-900">
              Ready to give teachers more time to{" "}
            </span>
            <span className="text-purple-600">teach and care</span>
            <span className="text-gray-900">?</span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join all the preschools already using Smart Cubs to transform their
            incident reporting process.
          </p>

          <Button
            onClick={() => window.open("https://calendly.com/smartcubs", "_blank")}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg mb-8"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Demo
          </Button>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex justify-center items-center gap-16 opacity-60">
              {/* <div className="text-center">
                <div className="text-xl font-bold text-gray-400">500+</div>
                <div className="text-sm text-gray-500">Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-gray-400">50+</div>
                <div className="text-sm text-gray-500">Schools</div>
              </div> */}
              <div className="text-center">
                <div className="text-xl font-bold text-gray-400">99.9%</div>
                <div className="text-sm text-gray-500">Uptime</div>
              </div>
              <div className="text-center">
              <div className="text-xl font-bold text-gray-400">Compliant</div>
              <div className="text-sm text-gray-500">with PDPA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">
                SmartCubs
              </h3>
              <p className="text-gray-300 mb-6">
                On a mission to save preschool teachers 1 hour of work every day
                through responsible AI-powered incident reporting.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-sm">Made with</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-sm">for teachers</span>
              </div>
            </div>

            {/* Links */}
            {/* <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-4 underline">Company</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 underline">Resources</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <a href="#" className="hover:text-white">
                      Responsible AI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Security
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>

          <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Smart Cubs Pte Ltd. All rights reserved.
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/smartcubs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:liong.ryan@mysmartcubs.com" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
