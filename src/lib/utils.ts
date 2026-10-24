export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}
