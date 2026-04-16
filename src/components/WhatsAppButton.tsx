import { useState, useEffect } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "573127617297";
const WHATSAPP_MESSAGE = "Hola, quisiera más información sobre sus servicios de grúas y transporte";

const agents = [
  { name: "Gustavo Gómez", role: "Gerencia", phone: "573127617297" },
  { name: "Fabián Lozano", role: "Operaciones", phone: "573185107669" },
  { name: "Kevin Angarita", role: "Comercial", phone: "573164462613" },
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip after 4 seconds if not opened yet
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const hideTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(hideTimer);
    }
  }, [showTooltip]);

  const openChat = (phone: string) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Chat Panel */}
      <div className={`transition-all duration-300 origin-bottom-right
        ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"}`}>
        <div className="bg-white rounded-2xl shadow-2xl border w-72 overflow-hidden">

          {/* Header */}
          <div className="bg-[#075E54] px-4 py-4 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">GYTC</p>
              <p className="text-white/70 text-xs">Grúas y Transportes de Colombia</p>
            </div>
          </div>

          {/* Bubble mensaje */}
          <div className="bg-[#ECE5DD] px-4 py-4">
            <div className="bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
              <p className="text-sm text-gray-800 leading-relaxed">
                👋 ¡Hola! ¿En qué podemos ayudarte hoy? Selecciona un asesor para chatear:
              </p>
              <p className="text-[10px] text-gray-400 text-right mt-1">ahora ✓✓</p>
            </div>
          </div>

          {/* Lista de agentes */}
          <div className="bg-white divide-y">
            {agents.map((agent) => (
              <button
                key={agent.phone}
                onClick={() => openChat(agent.phone)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f0fdf4] transition-colors text-left group"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#25D366]" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-[#075E54]">
                    {agent.name}
                  </p>
                  <p className="text-xs text-gray-400">{agent.role}</p>
                </div>
                <span className="text-[#25D366] text-lg">›</span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-2 text-center">
            <p className="text-[10px] text-gray-400">
              Powered by <span className="font-semibold">WhatsApp</span>
            </p>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="bg-white text-gray-800 text-xs font-medium px-3 py-2 rounded-full shadow-lg border animate-bounce-gentle">
          💬 ¡Chatea con nosotros!
        </div>
      )}

      {/* Botón principal */}
      <button
        onClick={() => { setIsOpen(!isOpen); setShowTooltip(false); }}
        aria-label={isOpen ? "Cerrar chat WhatsApp" : "Abrir chat WhatsApp"}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
          ${isOpen
            ? "bg-gray-600 hover:bg-gray-700 rotate-0"
            : "bg-[#25D366] hover:bg-[#20BA5A] hover:scale-110"
          }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <>
            <MessageCircle className="h-7 w-7 text-white" />
            {/* Badge de notificación */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] font-bold flex items-center justify-center">
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
