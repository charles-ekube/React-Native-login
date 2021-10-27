import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import BitcoinIcon from '../../assets/svg/btcIcon';
import EthIcon from '../../assets/svg/ethIcon';
import IllustrationSvg from '../../assets/svg/illustrationSvg';
import ArrowRightIcon from '../../assets/svg/rightArIcon';
import CustomButton from '../../components/buttons/Button';
import { useAuthState } from '../../context';
import styles from './DashboardStyles';


const Dashboard = () => {

    const { isLoggedIn, user } = useAuthState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    useEffect(() => {

        //   console.log(user.data.user.firstName);
        setFirstName(user.data.user.firstName)
        setLastName(user.data.user.lastName)
        // setUserName(user)
    }, [])

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.topNav}>
                    <View>
                        <Text style={styles.welcomeText}>WELCOME BACK,</Text>
                        <Text style={styles.userName}>{firstName + " " + lastName}</Text>
                    </View>
                    <Image
                        source={require('../../assets/svg/bell.png')}
                        style={{ width: 25, height: 25, }}
                    />
                </View>
                <View style={styles.walletCard}>
                    <View style={styles.walletCardInner}>
                        <View>
                            <Text style={styles.walletCardText}>Wallet balance</Text>
                            <Text style={styles.walletCardText}>$20,000.00</Text>
                        </View>
                        <View style={styles.walletCardBtnContainer}>
                            <CustomButton
                                btnText='WITHDRAW'
                                btnTextStyle={styles.walletBtnText}
                                customStyle={styles.walletBtn}
                                onPress={() => console.log('wallet')}
                            />
                            <CustomButton
                                btnText='SWAP'
                                btnTextStyle={styles.walletBtnText}
                                customStyle={styles.walletBtn}
                                onPress={() => console.log('wallet')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.referCard}>
                    <View style={{ height: 80, width: 70, borderWidth: 1, marginRight: 10, }}>
                        <IllustrationSvg />
                    </View>
                    <View>
                        <Text style={styles.referCardTitle}>Refer a friend</Text>
                        <Text style={styles.referCardText}>You can copy your referral link or share directly with your contacts</Text>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 10, marginBottom: 30, }}>
                    <Text style={styles.checkListTitle}>Obiex Checklist</Text>
                    <View style={styles.checkListCard}>
                        <View>
                            <Text style={styles.checkListCardTitle}>Verify KYC</Text>
                            <View style={styles.checkListCardTextContainer}>
                                <Text>Tier 1: </Text>
                                <Text>Swap and withdrawal limit of </Text>
                                <Text style={{ color: '#87ADAD', }}>$50,000</Text>
                            </View>
                        </View>
                        <ArrowRightIcon />
                    </View>
                    <View style={styles.checkListCard}>
                        <View>
                            <Text style={styles.checkListCardTitle}>Create your username</Text>
                            <Text>You can send and receive tokens</Text>
                        </View>
                        <ArrowRightIcon />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 10, }}>
                    <Text style={styles.checkListTitle}>Charts</Text>
                    <View>
                        <View style={styles.tradeCard}>
                            <BitcoinIcon />
                            <View>
                                <Text style={{ color: '#000', fontSize: 16 }}>BTC</Text>
                                <Text>+1.6%</Text>
                            </View>
                            <Text>$29,000.00</Text>
                        </View>
                        <View style={styles.tradeCard}>
                            <BitcoinIcon />
                            <View>
                                <Text>BTC</Text>
                                <Text>+1.6%</Text>
                            </View>
                            <Text>$29,000.00</Text>
                        </View>
                        <View style={styles.tradeCard}>
                            <EthIcon />
                            <View>
                                <Text>BTC</Text>
                                <Text>+1.6%</Text>
                            </View>
                            <Text>$29,000.00</Text>
                        </View>
                        <View style={styles.tradeCard}>
                            <EthIcon />
                            <View>
                                <Text>BTC</Text>
                                <Text>+1.6%</Text>
                            </View>
                            <Text>$29,000.00</Text>
                        </View>
                        <View style={styles.tradeCard}>
                            <BitcoinIcon />
                            <View>
                                <Text>BTC</Text>
                                <Text>+1.6%</Text>
                            </View>
                            <Text>$29,000.00</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </>
    );
}

export default Dashboard;
