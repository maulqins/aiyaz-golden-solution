const supabaseUrl = "https://yqrllzkoheyixauxuhia.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxcmxsemtvaGV5aXhhdXh1aGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA4NjEyMDksImV4cCI6MjA4NjQzNzIwOX0.Hve-QdCXoSizmd9mwZZZtSt1BkQYQmf5SHohJ5vCgx0"; 

const supabaseClient = window.supabase.createClient(
supabaseUrl,
supabaseKey
);

const form = document.getElementById("loginForm");
const statusBox = document.getElementById("status");

form.addEventListener("submit", async (e) => {
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

statusBox.innerHTML = "⏳ Sedang login...";

const { data, error } =
await supabaseClient.auth.signInWithPassword({
email,
password,
});

if (error) {
statusBox.innerHTML =
"<span style='color:red'>❌ Login gagal: " +
error.message +
"</span>";
return;
}

// ✅ BERHASIL
statusBox.innerHTML =
"<span style='color:green'>✅ Login berhasil, redirect...</span>";

setTimeout(() => {
window.location.href = "dashboard.html";
}, 1000);
});
