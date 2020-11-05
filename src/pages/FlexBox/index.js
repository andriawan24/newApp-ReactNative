import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import macbook from '../../assets/images/macbook.jpeg';

// class FlexBox extends React.Component {
//     constructor(props) {
//         super(props)
//         console.log('==> Constructor');
//         this.state = {
//             subscriber: 200
//         }
//     }

//     componentDidMount() {
//         console.log("ComponentDidmount");
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 400
//             });
//         }, 2000);
//     }

//     componentDidUpdate() {
//         console.log("componentDidUpdate");
//     }

//     componentWillUnmount() {
//         console.log("ComponentWIllUnMount");
//     }

//     render() {
//         console.log("Render");
//         return (
//             <View>
//                 <View style={{flexDirection: "row", backgroundColor: '#c8d6e5', alignItems: "center", justifyContent: 'space-between'}}>
//                     <View style={{backgroundColor: 'skyblue', width: 50, height: 50}} />
//                     <View style={{backgroundColor: 'darkblue', width: 50, height: 50}} />
//                     <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
//                     <View style={{backgroundColor: 'royalblue', width: 50, height: 50}} />
//                 </View>
//                 <View style={{flexDirection: "row", justifyContent: "space-around"}}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Tentang</Text>
//                     <Text>Komunitas</Text>
//                     <Text>Channel</Text>
//                     <Text>Playlist</Text>
//                 </View>
//                 <View style={{flexDirection: "row", alignItems: "center", marginTop: 20}}>
//                     <Image source={macbook} style={{width: 100, height: 100, borderRadius: 50, marginEnd: 14}} />
//                     <View >
//                         <Text style={{fontSize: 20, fontWeight: "bold", paddingEnd: 20}}>Naufal Fawwaz Andriawa sqjiqjisqsqjsqn</Text>
//                         <Text>{this.state.subscriber} Subsriber</Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

const FlexBox = () => {

    const [subscriber, setSubscriber] = useState(200);

    useEffect(() => {
        console.log("did mount");
        setTimeout(() => {
            setSubscriber(500);
        }, 2000);
        return () => {
            console.log("did update");
        };
    }, [subscriber]);

    // useEffect(() => {
    //     console.log("did update");
        
    // }, [subscriber]);

    return (
        <View>
            <View style={{flexDirection: "row", backgroundColor: '#c8d6e5', alignItems: "center", justifyContent: 'space-between'}}>
                <View style={{backgroundColor: 'skyblue', width: 50, height: 50}} />
                <View style={{backgroundColor: 'darkblue', width: 50, height: 50}} />
                <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
                <View style={{backgroundColor: 'royalblue', width: 50, height: 50}} />
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around"}}>
                <Text>Beranda</Text>
                <Text>Video</Text>
                <Text>Tentang</Text>
                <Text>Komunitas</Text>
                <Text>Channel</Text>
                <Text>Playlist</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", marginTop: 20}}>
                <Image source={macbook} style={{width: 100, height: 100, borderRadius: 50, marginEnd: 14}} />
                <View >
                    <Text style={{fontSize: 20, fontWeight: "bold", paddingEnd: 20}}>Naufal Fawwaz Andriawa sqjiqjisqsqjsqn</Text>
                    <Text>{subscriber} Subsriber</Text>
                </View>
            </View>
        </View>
    );
}

export default FlexBox;