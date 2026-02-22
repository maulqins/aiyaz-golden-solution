"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Message = {
  id: string;
  content: string;
  sender: "client" | "admin";
  created_at: string;
};

const DialogueSection = () => {
  const [user, setUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sendingLink, setSendingLink] = useState(false);

  // 🔐 Check Auth
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setUser(data.user);
        fetchMessages(data.user.id);
      }

      setLoading(false);
    };

    getUser();
  }, []);

  const fetchMessages = async (userId: string) => {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true });

    setMessages(data || []);
  };

  const sendMagicLink = async () => {
    setSendingLink(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.href,
      },
    });

    setSendingLink(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Link akses telah dikirim ke email Anda.");
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const { data } = await supabase.from("messages").insert({
      user_id: user.id,
      content: newMessage,
      sender: "client",
    }).select().single();

    if (data) {
      setMessages((prev) => [...prev, data]);
    }

    setNewMessage("");
  };

  if (loading) return null;

  return (
    <section id="dialogue" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">

        {!user ? (

          <div className="glass-card p-8 rounded-3xl text-center space-y-4">
            <h2 className="text-2xl font-semibold">
              Akses Percakapan Anda
            </h2>
            <p className="text-muted-foreground text-sm">
              Demi menjaga kerahasiaan diskusi, akses diberikan melalui email terverifikasi.
            </p>

            <input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-xl px-4 py-3 mt-4"
            />

            <button
              onClick={sendMagicLink}
              disabled={sendingLink}
              className="w-full mt-4 bg-black text-white py-3 rounded-xl"
            >
              {sendingLink ? "Mengirim..." : "Kirim Link Akses"}
            </button>
          </div>
        ) : (

          <div className="glass-card p-6 rounded-3xl flex flex-col h-[500px]">

            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.length === 0 ? (
                <p className="text-center text-muted-foreground text-sm">
                  Belum ada percakapan. Mulai diskusi pertama Anda.
                </p>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "client"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div className="px-4 py-2 rounded-2xl bg-secondary max-w-xs text-sm">
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-2">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Tulis pesan..."
                className="flex-1 border rounded-xl px-4 py-3"
              />
              <button
                onClick={sendMessage}
                className="bg-black text-white px-6 rounded-xl"
              >
                Kirim
              </button>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default DialogueSection;