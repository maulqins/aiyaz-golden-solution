import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Chat() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const emailParam = searchParams.get("email");

  const [emailInput, setEmailInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [newMsg, setNewMsg] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);

  const email = emailParam || null;

  // ================= LOAD CHAT =================
  const loadChat = async () => {
    if (!email) return;

    const { data } = await supabase
      .from("contact")
      .select("*")
      .eq("email", email)
      .order("id", { ascending: true });

    setMessages(data || []);
  };

  // ================= REALTIME =================
  useEffect(() => {
    if (!email) return;

    loadChat();

    const channel = supabase
      .channel("chat-client")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "contact" },
        () => loadChat()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [email]);

  // ================= AUTO SCROLL =================
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // ================= SEND =================
  const sendMessage = async () => {
    if (!newMsg.trim() || !email) return;

    await supabase.from("contact").insert([
      {
        name: "Client",
        email,
        message: newMsg.trim(),
      },
    ]);

    setNewMsg("");
  };

  // ================= EMAIL SUBMIT =================
  const handleEmailSubmit = () => {
    if (!emailInput.trim()) return;
    navigate(`/chat?email=${emailInput}`);
  };

  // ================= IF NO EMAIL =================
  if (!email) {
    return (
      <div style={styles.page}>
        <h2 style={{ marginBottom: 20 }}>Masukkan Email Anda</h2>

        <div style={{ display: "flex", gap: 10 }}>
          <input
            type="email"
            placeholder="contoh@email.com"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleEmailSubmit} style={styles.btn}>
            Masuk
          </button>
        </div>
      </div>
    );
  }

  // ================= CHAT UI =================
  return (
    <div style={styles.page}>
      <div style={styles.stars}></div>

      <h2 style={{ marginBottom: 20, position: "relative", zIndex: 2 }}>
        Obrolan ({email})
      </h2>

      <div style={styles.chatBox}>
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.message && (
              <div style={styles.clientRow}>
                <span style={styles.clientBubble}>
                  {msg.message}
                </span>
              </div>
            )}

            {msg.reply && (
              <div style={styles.adminRow}>
                <span style={styles.adminBubble}>
                  {msg.reply}
                </span>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div style={styles.inputArea}>
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          placeholder="Tulis pesan..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.btn}>
          Kirim
        </button>
      </div>
    </div>
  );
}

// ================= STYLES =================
const styles: any = {
  page: {
    padding: 20,
    minHeight: "100vh",
    color: "white",
    position: "relative",
    overflow: "hidden",
    background: "linear-gradient(180deg,#05010a,#120a2a,#000)",
  },

  stars: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "200%",
    backgroundImage:
      "url(https://www.transparenttextures.com/patterns/stardust.png)",
    opacity: 0.35,
    pointerEvents: "none",
    zIndex: 0,
  },

  chatBox: {
    border: "1px solid #312e81",
    padding: 15,
    height: 400,
    overflowY: "auto",
    marginBottom: 10,
    borderRadius: 12,
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(8px)",
    position: "relative",
    zIndex: 2,
  },

  clientRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  adminRow: {
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: 10,
  },

  clientBubble: {
    background: "linear-gradient(135deg,#6d28d9,#d4af37)",
    color: "white",
    padding: "10px 14px",
    borderRadius: 14,
    maxWidth: "70%",
  },

  adminBubble: {
    background: "#111827",
    color: "#f9fafb",
    padding: "10px 14px",
    borderRadius: 14,
    maxWidth: "70%",
  },

  inputArea: {
    display: "flex",
    gap: 10,
    position: "relative",
    zIndex: 2,
  },

  input: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    border: "1px solid #6d28d9",
    background: "#020617",
    color: "white",
  },

  btn: {
    padding: "10px 18px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg,#6d28d9,#d4af37)",
    color: "white",
    cursor: "pointer",
  },
};