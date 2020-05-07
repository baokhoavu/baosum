import React from 'react';
import {IonItem, IonLabel, IonImg} from '@ionic/react';
import {Message} from '../data/messages';
import './MessageListItem.css';

interface MessageListItemProps {
    message : Message;
}

const MessageListItem : React.FC < MessageListItemProps > = ({message}) => {
    return (
        <IonItem routerLink={`/message/${message.id}`} detail={false}>
            <IonLabel className="ion-text-wrap">
                <h2>
                    {message.aName}
                </h2>
                <h2>
                    {message.eName}
                </h2>
                <IonImg src={message.img} />
                <h3>
                    {message.copy}
                </h3>
            </IonLabel>
        </IonItem>
    );
};

export default MessageListItem;
