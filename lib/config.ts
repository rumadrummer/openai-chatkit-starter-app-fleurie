import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// 🌸 Start-Screen Buttons (deutsche Version, ohne Icons = kein Fehler)
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Was ist die Brocanterie Fleurie?",
    prompt: "Erzähl mir bitte, was die Brocanterie Fleurie ist.",
  },
  {
    label: "Öffnungszeiten & Kontakt",
    prompt: "Wann habt ihr geöffnet und wie kann ich euch erreichen?",
  },
  {
    label: "Café & Sortiment",
    prompt: "Was bietet ihr im Café und an Brocante-Artikeln an?",
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



