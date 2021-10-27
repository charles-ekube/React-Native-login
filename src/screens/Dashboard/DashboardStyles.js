import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    topNav: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingVertical: 20,
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 15,
        color: '#BEBEBE',
        paddingBottom: 7,

    },
    userName: {
        fontSize: 18,
        color: '#000',
    },
    walletCard: {
        borderWidth: 5,
        borderColor: '#1CA0ED',
        elevation: 20,

    },
    walletCardInner: {
        backgroundColor: '#0A8CAC',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 5,
        justifyContent: 'center',
    },
    walletCardText: {
        color: '#fff',
        fontSize: 18,
        paddingBottom: 10,
    },
    walletCardBtnContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 5,
    },
    walletBtn: {
        backgroundColor: '#171835',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 5,
    },
    walletBtnText: {
        color: '#FFF',
        fontSize: 13,
    },
    referCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 15,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    referCardTitle: {
        fontSize: 16,
        color: '#4D7A87',
        paddingBottom: 10,
    },
    referCardText: {
        color: '#000',
        lineHeight: 25,
        width: 235,
        fontSize: 13,
    },
    checkListTitle: {
        color: '#CFD1DB',
        fontSize: 20,
        marginVertical: 10,
    },
    checkListCard: {
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
        elevation: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',


    },
    checkListCardTitle: {
        color: '#000',
        fontSize: 16,

    },
    checkListCardTextContainer: {
        flexDirection: 'row',

    },
    tradeCard: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default styles;
