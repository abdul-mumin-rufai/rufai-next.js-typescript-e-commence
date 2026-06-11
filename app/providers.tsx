"use client"

import React from 'react'
import { ThemeProvider } from './theme-provider';
import { Toaster } from '@/components/ui/sonner';

// called the ThemeProvider  in the providers and pass the props and children prop
// after that call the providers in the root layout and pass the children prop.
// after that copy the theme code from shancn ui and paste it in the globals.css file
function Providers({children}:{children:React.ReactNode}) {
  return (
    <>
      <Toaster/>
      <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
      >
      {children}
      </ThemeProvider>
    </>
  )
};

export default Providers; 