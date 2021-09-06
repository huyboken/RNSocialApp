import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return(
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    )
};

const Skip = ({...props}) => (
    // <Button
    //     title='Skip'
    //     color='#000000'
    //     {...props}
    // />
    <TouchableOpacity style={{marginHorizontal:8}} {...props}>
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    // <Button
    //     title='Next'
    //     color='#000000'
    //     {...props}
    // />
    <TouchableOpacity style={{marginHorizontal:8}} {...props}>
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity style={{marginHorizontal:8}} {...props}>
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        DotComponent={Dots}
        DoneButtonComponent={Done}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        onSkip={()=> navigation.replace("Login")}
        onDone={()=> navigation.navigate("Login")}
            pages={[
            {
                backgroundColor: '#A6E4D0',
                image: <Image source={require('../assets/images/onboarding-img1.png')} />,
                title: 'Connect to the world',
                subtitle: 'A new way to connect with the worrd',
            },
            {
                backgroundColor: '#FDEB93',
                image: <Image source={require('../assets/images/onboarding-img2.png')} />,
                title: 'Share your favorite',
                subtitle: 'Share your thought with similar kind of people',
            },
            {
                backgroundColor: '#E9BCBE',
                image: <Image source={require('../assets/images/onboarding-img3.png')} />,
                title: 'Become the star ',
                subtitle: 'Let the spot light capture you',
            },
 
            ]}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})
