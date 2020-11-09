import React from 'react'
import { useFormikContext } from 'formik';
import { StyleSheet, Text, View } from 'react-native'
import ImageInputList from '../ImageInputList'
import AppErrorMessage from './AppErrorMessage'

export default function AppFormImagePicker({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri]);
    }

    const handleRemove = uri => {
        setFieldValue(name,
            [
            ...(imageUris
                .filter(
                    imageUri => imageUri != uri)
                )
            ]) 
    }

    return (
        <>
            <ImageInputList 
                imageUris={values[name]}
                onAddImage= {handleAdd}
                onRemoveImage = {handleRemove} />

             <AppErrorMessage 
                error={errors[name]} 
                visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
