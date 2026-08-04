import React from 'react'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from '../ui/select';

export enum Mode { 
    singleProduct = 'singleProduct',
    cartItem = 'cartItem',
};


type SelectProductAmountProp = {
    mode: Mode.singleProduct;
    amount: number;
    setAmount:(value:number)=>void
};

type SelectCartItemAmountProp = {
    mode: Mode.cartItem;
    amount: number;
    setAmount: (value: number) => Promise<void>;
    isLoading: boolean;
};

const SelectProductAmount = (props: SelectProductAmountProp | SelectCartItemAmountProp) => {
    const { mode, amount, setAmount } = props;
    const cartItem = mode === Mode.cartItem;
    return (
        <>
            <h4 className='mb-3'>amount: </h4>
            <Select
                defaultValue={amount.toString()}
                onValueChange={(value) => setAmount(Number(value))}
                disabled={cartItem ? props.isLoading : false}
            >
                <SelectTrigger className={cartItem ? 'w-25' : 'w-38'}>
                    <SelectValue placeholder={amount}/>
                </SelectTrigger>
                <SelectContent>
                    {Array.from({ length: cartItem ? amount + 10 : 10 }, (_, index) => {
                        const selectValue = (index + 1).toString()
                        return (
                            <SelectItem key={selectValue} value={selectValue}>
                                {selectValue}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </>
    )
};

export default SelectProductAmount