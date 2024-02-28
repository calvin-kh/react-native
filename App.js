import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback, useEffect, useState } from 'react';
import { View,Text, Image } from 'react-native';
import * as Font from 'expo-font';
import { FontAwesome5  } from '@expo/vector-icons';
import { Asset as expoasset, useAssets } from 'expo-asset'
import { NavigationContainer } from '@react-navigation/native';
// import Tabs from './navigation/Tabs';
import Tab from './navigation/Tab';


SplashScreen.preventAutoHideAsync();     //loading icon이 사라지는 것을 멈춤
const loadFont = (fonts) =>  
  fonts.map((font)=>(Font.loadAsync(font)));
 // await 를 안쓰는 이유 loadFont()가 promises라서 ...
const loadImages = (images) =>  images.map(image =>{
    if(typeof image === 'string'){
      return Image.prefetch(image);
    }else{
      return expoasset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(true);
  // const [assets] = useAssets([require('./apploading.png')]);//hook useAssets 사용 
  // const [loadFonts] = Font.useFonts(Ionicons.font); // useFonts hook 사용 useFonts({...}) and Ionicons.font : object이므로 { } 생략

  // if(!assets || !loadFonts){
  //   return null;
  // }else{
  //   SplashScreen.hideAsync() ;
  // }

  const startLoading = async () => {
    try{
      //await new Promise(resolve => setTimeout(resolve,1000)); //강제로 1초간 멈춤
      //await Font.loadAsync(Ionicons.font); // fontname : require('./assets/fonts/fontname.ttf')
      const fonts = loadFont([FontAwesome5.font]);
      const images = loadImages([require('./apploading.png'),'https://asianwiki.com/images/e/e3/Im_Se-Mi-p1.jpg'])
      await Promise.all([...fonts,...images]); //promise.all( array[] ) 1개의 array를 받으므로, 각 fonts, images의 array 값을 풀어서 하나의 array로 만들어야 한다. 
      // ...fonts 는 array fonts의 값을 개별 값으로 풀어놓는 역할을 한다. 
      // await expoasset.loadAsync(require('./apploading.png'));
      // await Image.prefetch('https://asianwiki.com/images/e/e3/Im_Se-Mi-p1.jpg');
    }catch(e){
      console.warn(e);
    }finally{
      setReady(true); //상태값 변경
    }
  }
  useEffect(()=>{
    startLoading();
  },[])  //앱 로딩 시 실행

  useEffect(()=>{
    async function hideLoadingIcon(){
      if(ready){
        await SplashScreen.hideAsync(); //아이콘 숨김
      }
    }
    hideLoadingIcon();
  },[ready])
  // const onLayoutView = useCallback(async () => {
  //   //console.log(ready);
  //   if(ready){
  //     await SplashScreen.hideAsync(); //아이콘 숨김
  //   }
  // },[ready]) //useCallback을 이용해서 ready값을 모니터링, 변경 시 실행

  if(!ready){
    return null;  //ready 값이 false면 아무것도 안함 (로딩 아이콘이 보여짐)
  }

  return (
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
  );
}


