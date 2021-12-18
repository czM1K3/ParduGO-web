import type { IncomingMessage } from "http"

export const isAlreadyOnSite = (req: IncomingMessage): boolean => req.url!.startsWith("/_next");
