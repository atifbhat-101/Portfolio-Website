import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaEnvelope className="text-emerald-400 text-2xl" />,
      label: "Email Address",
      value: "atifbhat967@gmail.com",
      href: "mailto:atifbhat967@gmail.com",
    },
    {
      icon: <FaPhone className="text-cyan-400 text-2xl" />,
      label: "Phone Number",
      value: "+91 6006993559",
      href: "tel:+916006993559",
    },
    {
      icon: <FaMapMarkerAlt className="text-emerald-400 text-2xl" />,
      label: "Location",
      value: "Chandigarh, India",
      href: "https://maps.google.com/?q=Chandigarh,India",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900/50 text-white relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-emerald-400 uppercase tracking-widest">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mt-2">
            Contact Me
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mt-3 rounded-full mx-auto" />
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-6 leading-relaxed">
            Have an opening for a Full Stack / MERN Developer internship, a project idea, or just want to connect? Reach out directly via any of the channels below!
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactDetails.map((detail, idx) => (
            <a
              key={idx}
              href={detail.href}
              target={detail.label === "Location" ? "_blank" : "_self"}
              rel="noreferrer"
              className="flex flex-col items-center text-center p-8 bg-slate-950/40 border border-slate-800/80 rounded-2xl hover:border-emerald-500/30 hover:bg-slate-950/80 hover:-translate-y-1 transition-all duration-300 group shadow-lg"
            >
              <div className="p-4 bg-slate-900 rounded-2xl mb-5 group-hover:scale-105 transition-transform duration-300 shadow-inner">
                {detail.icon}
              </div>
              <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {detail.label}
              </span>
              <span className="text-base font-bold text-slate-200 group-hover:text-emerald-400 transition-colors duration-300 break-all">
                {detail.value}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;