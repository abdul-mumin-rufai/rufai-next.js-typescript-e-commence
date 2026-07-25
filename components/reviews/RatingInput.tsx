import React from 'react'
import { Label } from '../ui/label'
import { Select, SelectTrigger,SelectContent,SelectItem,SelectValue } from '../ui/select'

const RatingInput = ({ name, textLabel }: { name: string, textLabel?: string }) => {

  const numbers = Array.from({ length: 5 }, (_, i) => { 
    const value = i + 1;
    return value.toString();
  }).reverse();
  return (
    <div className='mb-2 max-w-xs'>
      <Label htmlFor={name} className='capitalize mb-2'>
        {textLabel || name}
      </Label>
      <Select defaultValue={numbers[0]} required>
        <SelectTrigger>
          <SelectValue/>
        </SelectTrigger>
        <SelectContent>
          {numbers.map((number) => {
            return (
              <SelectItem key={number} value={number}>
                {number}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export default RatingInput