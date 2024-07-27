"use client"

import React from "react";
import {useCall, useCallStateHooks} from "@stream-io/video-react-sdk";
import {Button, buttonVariants} from "@/components/ui/button";
import {useRouter} from 'next/navigation';

const EndCallButton = () => {
    const call = useCall();
    const router = useRouter();

    const { useLocalParticipant } = useCallStateHooks();
    const  localParrticipant = useLocalParticipant();

    const isMeetingOnwer = localParrticipant && call?.state.createdBy
        && localParrticipant.userId === call.state.createdBy.id;

    if (!isMeetingOnwer) return null;

    return(
        <Button onClick={async () => {
            await call?.endCall();
            router.push('/')
        }} className="bg-red-500">
            End call for everyone
        </Button>
    )
}
export default EndCallButton