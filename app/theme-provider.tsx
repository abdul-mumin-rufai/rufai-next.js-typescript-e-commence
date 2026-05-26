"use client"

// a function to provide the theme and returns NextThemesProvider with props
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider {...props}>{children}</NextThemesProvider> 
    )
}