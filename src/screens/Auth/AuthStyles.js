import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBFBFB',
        paddingHorizontal: 10,
        height: '100%',
    },
    createAccountBtn: {
        backgroundColor: '#171837',
        borderRadius: 10,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    createAccountBtnText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 14,
        color: '#FFF',
        letterSpacing: 0.5,
    },
    headerText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 34,
        color: '#000',
        paddingBottom: 10,
        textAlign: 'center',
        paddingVertical: 50,
        marginBottom: 30,
    },
    headerSubText: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: 0.10,
        color: 'rgba(81, 81, 81, 1)',
        textAlign: 'center',
        marginBottom: 30,
    },
    inputContainer: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 5,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ECECEC',
    },
    card: {
        width: '100%',
        paddingVertical: 50,
        backgroundColor:'#fff',
        paddingHorizontal: 25,
        shadowColor: "#E0E0E2",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 1.84,

        elevation: 3,

    },
    rememberMe: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
    },
    checkBox: {
        borderWidth:1,
        width:20,
        height:20,
        borderRadius:3,
        marginRight:10,
    },
    messageBox: {
        paddingVertical: 20,
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal:20,
        shadowColor: '#FBF1F2',
        elevation:30,
        marginBottom:25,
        backgroundColor:'#fff',


    },
    messageBoxText: {
        textAlign:'center',
        color:'red',
    },
    footer: {
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        marginTop:15,
        marginBottom:25,
    },
});

export default styles;