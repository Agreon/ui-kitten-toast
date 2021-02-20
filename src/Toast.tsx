import React, {
    FC, useEffect,
  } from 'react';
  import {
    Text, Card,
  } from '@ui-kitten/components';
  import tailwind from 'tailwind-rn';
  import { EvaStatus } from '@ui-kitten/components/devsupport';
  import { View } from 'react-native';

export interface ToastProps {
    id: string
    message: string | React.ReactNode
    status: EvaStatus
    duration: number
    onClose: (id: string) => void
}

export const Toast: FC<ToastProps> = ({
    id, message, duration, onClose,
}) => {
    useEffect(() => {
        setTimeout(() => {
            onClose(id);
        }, duration);
    }, []);

    return (
        <View style={tailwind('absolute z-10 w-full flex justify-center')}>
            <Card style={tailwind('self-center mt-10 mb-2 ml-5 mr-5')} status="danger">
                {typeof message === 'string' ? <Text style={tailwind('font-bold')}>{message}</Text> : (message)}
            </Card>
        </View>
    );
};
