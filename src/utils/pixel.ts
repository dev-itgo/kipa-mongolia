// Safe Facebook Pixel tracking function that only runs on client-side
export const fbq = (
  action: string,
  eventName: string,
  data?: Record<string, unknown>,
) => {
  // Check if we're on the client side and if fbq is available
  if (typeof window !== "undefined" && window.fbq) {
    try {
      window.fbq(action, eventName, data);
    } catch (error) {
      console.warn("Facebook Pixel tracking failed:", error);
    }
  }
};

// Convenience function for tracking events
export const track = (eventName: string, data?: Record<string, unknown>) => {
  fbq("track", eventName, data);
};

// Declare global fbq type for TypeScript
declare global {
  interface Window {
    fbq: (
      action: string,
      event: string,
      data?: Record<string, unknown>,
    ) => void;
  }
}
