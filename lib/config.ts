import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 🌸 Start-Screen Buttons (deutsche Version, ohne Icons = kein Fehler)
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Konzerte",
    prompt: "Wann und wo spielt Ruedi als Nächstes live? Bitte die nächsten Konzerte von Silverhead, Polo Sélection und John & John Xpanded prüfen.",
  },
  {
    label: "Bands buchen",
    prompt: "Können wir dich oder deine Bands für ein Event buchen? Bitte erkläre kurz die Möglichkeiten und wie man dich erreichen kann.",
  },
  {
    label: "Schlagzeugunterricht",
    prompt: "Unterrichtest du auch Erwachsene am Schlagzeug? Bitte erkläre wo, wie und wie man dich kontaktieren kann.",
  },
];

// 💬 Platzhaltertext im Eingabefeld
export const PLACEHOLDER_INPUT = "Frag mich etwas...";

// 💐 Begrüssung im Chat
export const GREETING =
  "Bonjour & herzlich willkommen in der Brocanterie Fleurie 🌸 Wie kann ich dir heute helfen?";

// 🎨 Design- und Farbthema
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: theme === "dark" ? "#f1f5f9" : "#0f172a",
      level: 1,
    },
  },
  radius: "round",
});



