import { cn } from '@/lib/utils';
import React from 'react'

function EmptyList({ text = 'Please there is no products',
  className }:
  { text?: string, className?: string })
{
  return (
    <div>
      <h2 className={cn('text-xl',className)}>
        {text}
      </h2>
    </div>
  )
};

export default EmptyList;