'use client'
import StripePayment from "@/components/stripePayment/StripePayment";
import { Suspense } from "react";
import LoadingContainer from "@/components/globals/LoadingContainer";

const page = () => {
    return (
        <div>
            <Suspense fallback={<LoadingContainer />}>
                <StripePayment />
            </Suspense>
        </div>
    )
};

export default page;