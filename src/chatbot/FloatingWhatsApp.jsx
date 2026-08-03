import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {

  const phone = "917377747575"; // Replace with your WhatsApp number

  const message =
    "Hello ZibaGo, I want to rent a car or i want to submit my car for rent. Please assist me.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
    >
      <FaWhatsapp />
    </a>
  );
}