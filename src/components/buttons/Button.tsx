import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';


interface Props {
    btnText: string,
    onPress: () => void,
    customStyle: any,
    btnTextStyle: any,
    loading?: boolean;
}

function CustomButton(props:Props) {

    const {btnText, btnTextStyle, loading, customStyle, onPress} = props;
    const LoadingIndicator = (props: any) => {
        const loader = <View style={[props.style,{paddingVertical:10,}]}>
                <Text style={{color:'#fff', paddingVertical:10,}}>Loading</Text>
        </View>;
        return <View>{loading && loader}</View>
      };

    return (
        <>
            <TouchableOpacity onPress={onPress} style={customStyle}>
                {!loading &&
                <Text style={btnTextStyle}>{btnText}</Text>}
            </TouchableOpacity>
        </>
    )

}

export default CustomButton;