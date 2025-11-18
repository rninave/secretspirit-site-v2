"use client";

interface GoogleMapProps {
  height?: string | number;
}

export default function GoogleMap({ height = 360 }: GoogleMapProps) {
  return (
    <div className="w-full">
      <iframe
        title="Secretspirit Solutions Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.410978636874!2d72.67774371511356!3d23.045389721257624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87dc8df07491%3A0x607414b121cdf056!2sSecretspirit%20Solutions!5e0!3m2!1sen!2sin!4v1667380436047!5m2!1sen!2sin"
        width="100%"
        height={height}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0 }}
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  );
}
