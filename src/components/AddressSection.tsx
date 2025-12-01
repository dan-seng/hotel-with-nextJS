import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Native required fields already enforce UI validation

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Optional: Phone validation (Ethiopian)
    const phoneRegex = /^\+?\d{9,15}$/;
    if (phone && !phoneRegex.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    alert(`Email from ${email} sent successfully!`);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 lg:py-36 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 overflow-hidden"
    >
      <div className="container mx-auto px-5 lg:px-10 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
            We'd Love to Hear From You
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Have questions or special requests? Our team is here to ensure your
            stay feels exceptional.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="h-full p-8 lg:p-10 shadow-xl border border-neutral-200 bg-white/90 backdrop-blur-lg rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-neutral-300 bg-white/70 px-4 py-3 rounded-xl focus:border-black focus:ring-2 focus:ring-black/20"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full border border-neutral-300 bg-white/70 px-4 py-3 rounded-xl focus:border-black focus:ring-2 focus:ring-black/20"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+251 9xx xxx xxx"
                    className="w-full border border-neutral-300 bg-white/70 px-4 py-3 rounded-xl focus:border-black focus:ring-2 focus:ring-black/20"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can assist you..."
                    required
                    className="border border-neutral-300 bg-white/70 px-4 py-3 rounded-xl resize-none focus:border-black focus:ring-2 focus:ring-black/20"
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 bg-neutral-900 text-white shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="min-h-[400px]"
          >
            <Card className="h-full shadow-xl border border-neutral-200 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d677.9436379169664!2d39.5613191105689!3d12.407010482218615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16405b5d5ecd3fcb%3A0x87a8fd4b338c0d36!2zUmF5YSBHcmFuZCBSZXNvcnQgSG90ZWwg4Yir4YurIOGMjeGIq-GKleGLtSDhiKrhi57hiK3hibUg4YiG4Ym04YiN!5e1!3m2!1sen!2set!4v1764534545171!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                title="Hotel Location"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
