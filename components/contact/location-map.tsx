"use client";

// Free OpenStreetMap embed — no API key required
export function LocationMap() {
  return (
    <div className="w-full h-95 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d899.6566531050876!2d31.20696194089239!3d30.048133275136767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458412f0611f0e1%3A0xdf5bc6992523b85!2z2YXYs9iq2LTZgdmJINio2K_Ysdin2YY!5e0!3m2!1sar!2seg!4v1773742201858!5m2!1sar!2seg"
        title="Badran Hospital Location"
        allowFullScreen
      />
    </div>
  );
}
