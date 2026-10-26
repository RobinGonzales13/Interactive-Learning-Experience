export const DEMO_SESSION_KEY = "interactive-learning-demo-session";
const DEMO_SESSION_EVENT = "interactive-learning-session-change";

export type DemoSessionStatus = "authenticated" | "unauthenticated" | "error";

export function subscribeToDemoSession(onChange: () => void) {
  window.addEventListener(DEMO_SESSION_EVENT, onChange);
  return () => window.removeEventListener(DEMO_SESSION_EVENT, onChange);
}

export function getDemoSessionStatus(): DemoSessionStatus {
  try {
    return window.sessionStorage.getItem(DEMO_SESSION_KEY)
      ? "authenticated"
      : "unauthenticated";
  } catch {
    return "error";
  }
}

export function getServerDemoSessionStatus(): DemoSessionStatus {
  return "unauthenticated";
}

export function startDemoSession(email: string) {
  window.sessionStorage.setItem(DEMO_SESSION_KEY, email);
  window.dispatchEvent(new Event(DEMO_SESSION_EVENT));
}

export function endDemoSession() {
  window.sessionStorage.removeItem(DEMO_SESSION_KEY);
  window.dispatchEvent(new Event(DEMO_SESSION_EVENT));
}
