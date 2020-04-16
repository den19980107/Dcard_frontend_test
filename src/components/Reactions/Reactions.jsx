import React, { useState, useEffect } from 'react';

const Reactions = ({ reactions, commentCount }) => {
    const [reactionCount, setReactionCount] = useState(0)

    const loveId = "286f599c-f86a-4932-82f0-f5a06f1eca03";
    const hahaId = "e8e6bc5d-41b0-4129-b134-97507523d7ff";
    const shockId = "4b018f48-e184-445f-adf1-fc8e04ba09b9";
    const kneelId = "011ead16-9b83-4729-9fde-c588920c6c2d";
    const QQId = "514c2569-fd53-4d9d-a415-bf0f88e7329f";
    const angryId = "aa0d425f-d530-4478-9a77-fe3aedc79eea"

    useEffect(() => {
        let count = 0;
        for (let i = 0; i < reactions.length; i++) {
            const reaction = reactions[i];
            count += reaction.count
        }
        setReactionCount(count)
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginRight: "0.5rem" }}>
                {
                    reactions.map((reaction, index) => {
                        if (index < 3) {
                            switch (reaction.id) {
                                case hahaId:
                                    return <Reaction key={index} url="https://gcs.dcard.tw/reaction/e8e6bc5d-41b0-4129-b134-97507523d7ff1539599242687.png"></Reaction>
                                case shockId:
                                    return <Reaction key={index} url="https://gcs.dcard.tw/reaction/4b018f48-e184-445f-adf1-fc8e04ba09b91539675779141.png"></Reaction>
                                case kneelId:
                                    return <Reaction key={index} url="https://gcs.dcard.tw/reaction/011ead16-9b83-4729-9fde-c588920c6c2d1539599284385.png"></Reaction>
                                case QQId:
                                    return <Reaction key={index} url="https://gcs.dcard.tw/reaction/514c2569-fd53-4d9d-a415-bf0f88e7329f1539599270972.png"></Reaction>
                                case angryId:
                                    return <Reaction key={index} url="https://gcs.dcard.tw/reaction/aa0d425f-d530-4478-9a77-fe3aedc79eea1539599257655.png"></Reaction>
                                case loveId:
                                default:
                                    return <Reaction key={index} url="https://gcs.dcard.tw/reaction/286f599c-f86a-4932-82f0-f5a06f1eca031539599210825.png"></Reaction>
                            }
                        }
                    })
                }
            </div>
            <div style={{ marginRight: "1rem", display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <span style={{ color: "#bbb" }}>{reactionCount}</span>
                </div>
            </div>
            <div style={{ marginRight: "1rem", display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <span style={{ color: "#bbb" }}> {`回應 ${commentCount}`}</span>
                </div>
            </div>
        </div>
    );
};

const Reaction = ({ url }) => {
    return (
        <div style={{ width: "20px", height: "20px", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            < img src={url} style={{ width: "20px", height: "20px" }}></img>
        </div >
    )
}

export default Reactions;