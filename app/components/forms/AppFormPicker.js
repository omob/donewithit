import { useFormikContext } from 'formik'
import React from 'react'
import { Picker, StyleSheet } from 'react-native'
import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage'



export default function AppFormPicker({items, name, numberOfColumns, PickerItemComponent, placeholder, width}) {

    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
        <>
            <AppPicker 
                items = {items}
                numberOfColumns={numberOfColumns}
                onItemSelected={(item) => setFieldValue(name, item)}
                PickerItemComponent = {PickerItemComponent}
                placeholder = {placeholder}
                selectedItem={values[name]}
                width = {width}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
