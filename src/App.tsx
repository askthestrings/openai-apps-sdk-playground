import { useCallback } from "react"
import { Switch } from "@openai/apps-sdk-ui/components/Switch"
import { applyDocumentTheme, useDocumentTheme } from "@openai/apps-sdk-ui/theme"
import { DemoComponent } from "./DemoComponent"

export function App() {
  const theme = useDocumentTheme()
  const isDark = theme === "dark"

  const handleThemeChange = useCallback((checked: boolean) => {
    applyDocumentTheme(checked ? "dark" : "light")
  }, [])

  return (
    <div className={`min-h-screen text-default ${isDark ? "bg-body" : "bg-white"}`}>
      <header className="border-b border-subtle bg-surface/60 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-secondary text-xs uppercase tracking-widest">Apps SDK UI</p>
            <h1 className="heading-md">Single component preview</h1>
            <p className="text-secondary text-sm">Paste any component into this file and it will render below.</p>
          </div>
          <label className="flex items-center gap-2 text-sm font-medium">
            Dark mode
            <Switch checked={isDark} onCheckedChange={handleThemeChange} aria-label="Toggle color theme" />
          </label>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-200px)] w-full items-center justify-center px-6 py-12">
        <div className="w-auto max-w-4xl">
          <DemoComponent />
        </div>
      </main>
    </div>
  )
}
