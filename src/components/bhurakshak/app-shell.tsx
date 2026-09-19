import { Link, useRouterState } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Archive, BarChart3, BookCheck, ChevronLeft, ChevronRight, ClipboardCheck, FileClock, FileSearch, LandPlot, LogOut, Menu, Search, Settings, ShieldAlert, Upload, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Dashboard", to: "/", icon: BarChart3 }, { label: "Upload document", to: "/upload", icon: Upload },
  { label: "Review queue", to: "/review", icon: ClipboardCheck, count: 12 }, { label: "Flagged records", to: "/flagged", icon: ShieldAlert, count: 6 },
  { label: "Record search", to: "/records", icon: FileSearch }, { label: "Audit log", to: "/audit", icon: FileClock },
  { label: "User control", to: "/users", icon: Users }, { label: "Profile", to: "/profile", icon: Settings },
] as const;

function Sidebar({ compact, onClose }: { compact: boolean; onClose?: () => void }) {
  const path = useRouterState({ select: (state) => state.location.pathname });
  return <aside className={cn("flex h-full shrink-0 flex-col border-r border-border bg-sidebar transition-[width]", compact ? "w-16" : "w-64")}>
    <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5"><span className="grid size-8 shrink-0 place-items-center rounded-sm bg-sidebar-primary text-sidebar-primary-foreground"><LandPlot className="size-4"/></span>{!compact && <div className="min-w-0"><p className="truncate text-base font-semibold">BhuRakshak</p><p className="truncate text-[10px] uppercase tracking-widest text-muted-foreground">Land Records</p></div>}{onClose && <Button variant="ghost" size="icon" className="ml-auto lg:hidden" onClick={onClose} aria-label="Close navigation"><X/></Button>}</div>
    <nav className="flex-1 space-y-1 overflow-y-auto py-5">{navigation.map((item) => { const active = item.to === "/" ? path === "/" : path.startsWith(item.to); return <Link key={item.to} to={item.to} onClick={onClose} title={compact ? item.label : undefined} className={cn("mx-2 flex h-10 items-center gap-3 rounded-md px-3 text-sm transition-colors", active ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground" : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground")}><item.icon className="size-4 shrink-0"/>{!compact && <span className="truncate">{item.label}</span>}{!compact && item.count && <span className="ml-auto rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-semibold text-warning-foreground">{item.count}</span>}</Link>; })}</nav>
    <div className="border-t border-sidebar-border p-4">{!compact ? <div className="flex items-center gap-3"><div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-semibold text-primary">RK</div><div className="min-w-0"><p className="truncate text-xs font-medium">Rajesh Kumar</p><p className="truncate text-[10px] text-muted-foreground">District Administrator</p></div><Link to="/login" className="ml-auto text-muted-foreground" aria-label="Sign out"><LogOut className="size-4"/></Link></div> : <Link to="/login" aria-label="Sign out"><LogOut className="mx-auto size-4 text-muted-foreground"/></Link>}</div>
  </aside>;
}

export function AppShell({ children }: { children: ReactNode }) {
  const [compact, setCompact] = useState(false); const [mobileOpen, setMobileOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname }); const current = navigation.find((item) => item.to === "/" ? path === "/" : path.startsWith(item.to));
  if (path === "/login") return <>{children}</>;
  return <div className="flex h-screen overflow-hidden bg-background"><div className="hidden lg:block"><Sidebar compact={compact}/></div>{mobileOpen && <div className="fixed inset-0 z-50 lg:hidden"><button aria-label="Close navigation overlay" className="absolute inset-0 bg-overlay" onClick={() => setMobileOpen(false)}/><div className="relative h-full w-72"><Sidebar compact={false} onClose={() => setMobileOpen(false)}/></div></div>}
    <main className="flex min-w-0 flex-1 flex-col"><header className="grid h-16 shrink-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-background/95 px-4 backdrop-blur sm:px-6"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu/></Button><Button variant="ghost" size="icon" className="hidden lg:inline-flex" onClick={() => setCompact((value) => !value)} aria-label={compact ? "Expand navigation" : "Collapse navigation"}>{compact ? <ChevronRight/> : <ChevronLeft/>}</Button><div className="min-w-0 text-xs text-muted-foreground"><span>District Administration</span><span className="mx-2">/</span><span className="font-medium text-foreground">{current?.label ?? "Record detail"}</span></div><div className="flex shrink-0 items-center gap-2"><div className="relative hidden md:block"><Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground"/><Input className="w-56 bg-muted pl-8" placeholder="Search records…"/></div><Button asChild size="sm"><Link to="/upload"><Upload/> <span className="hidden sm:inline">New upload</span></Link></Button></div></header><div className="flex-1 overflow-y-auto"><div className="mx-auto max-w-[1440px] p-4 sm:p-6 lg:p-8">{children}</div></div></main>
  </div>;
}
