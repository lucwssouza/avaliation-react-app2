import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headercontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        borderBottomWidth: 0.8,
        top: 0,
        padding: 10
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    datacontainer: {
        borderBottomWidth: 0.8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 49,
        padding: 11
    },
    data: {
        fontSize: 19,
    },
    smiles: {
        width: '100%',
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        top: -25,
    },
    smilesoption: {
        width: 120,
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    select: {
        width: '100%',
        height: 30,
        borderTopWidth: 1,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    hr: {
        borderBottomColor: 'black',
        width: '100%',
        borderWidth: 0.4,
        top: -5
    },
    input: {
        width: '90%',
        borderWidth: 1,
        paddingBottom: 200,
        top: 35
    },
    buttons: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        gap: 15,
        display: 'flex',
        flexDirection: 'row'
    },
})