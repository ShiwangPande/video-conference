import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Room() {
    const { roomID } = useParams();
    console.log(roomID);
    const meeting = async (element) => {
        const appID = 1997879534;
        const serverSecret = '150b20b583d2ba35498276a1407220f2';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "shiwang");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    }
    return (
        <div ref={meeting} className='w-full h-screen'>
            <h1>Room {roomID}</h1>
        </div>
    )
}

export default Room