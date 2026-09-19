import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { AppShell } from "@/components/bhurakshak/app-shell";
import { Toaster } from "@/components/ui/sonner";
import appCss from "../styles.css?url";
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "author", content: "BhuRakshak" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap" }, { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: () => <div className="grid min-h-screen place-items-center bg-background p-6 text-center"><div><p className="font-mono text-6xl font-semibold text-primary">404</p><h1 className="mt-3 text-xl font-semibold">Registry page not found</h1><Link to="/" className="mt-5 inline-block text-sm font-medium text-primary">Return to dashboard</Link></div></div>,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><AppShell><Outlet/></AppShell><Toaster richColors position="top-right"/></QueryClientProvider>; }
