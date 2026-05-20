import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

// this is the layout for the enitre site
function Container({children, className}:{children:ReactNode, className?:string}) {
  return (
      <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8', className)}>
          {children}
      </div>
  )
};

export default Container;