import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'

export default function SubmitButton({title}) {

    const { handleSubmit } = useFormikContext();

    return (
        <AppButton style={{ marginVertical: 30}} text={title} onPress={handleSubmit} />
    )
}

const styles = StyleSheet.create({})
