import { useState, useCallback } from 'react';
import { Carousel, Button, Space } from 'antd';
import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonHeader, IonTitle } from '@ionic/react';
import { add, colorFill, colorFillSharp } from 'ionicons/icons';
import './Tab2Form.css';

const Tab2Form: React.FC = () => {
  const [bgColor, setBgColor] = useState('light');
  console.log(bgColor);
  const revertClick = useCallback(() => {
    setBgColor(bgColor);
  }, [setBgColor]);
  // const handleClick2 = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   setBgColor(bgColor);
  // }
  // const handleClick = useCallback(() => {
  //   setBgColor("success");
  // }, [setBgColor]);
  return (
    <IonContent color={bgColor}>
      <Carousel
        // autoplay
        // effect="fade"
        // speed={4000}
        className="tab2Carousel"
        // dots
      >
        <div>
          <img src="https://wallpaperaccess.com/full/5120324.jpg" alt="image1" />
        </div>
        <div>
          <img src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Nice-Backgrounds-for-desktop-download.jpg" alt="image2" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616__480.jpg" alt="image3" />
        </div>
        <div>
          <img src="https://wallpaperaccess.com/full/5030514.jpg" alt="image4" />
        </div>
      </Carousel>

      <IonFab vertical="center" horizontal="center" slot="fixed" className="colorFabBtn">
        <IonFabButton color="dark" onClick={revertClick}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>

        <IonFabList side="top">
          <IonFabButton color="danger" onClick={() => setBgColor('danger')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
          <IonFabButton color="dark" onClick={() => setBgColor('dark')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>

        <IonFabList side="end">
          <IonFabButton color="warning" onClick={() => setBgColor('warning')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
          <IonFabButton color="secondary" onClick={() => setBgColor('secondary')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>

        <IonFabList side="bottom">
          <IonFabButton color="success" onClick={() => setBgColor('success')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
          <IonFabButton color="medium" onClick={() => setBgColor('medium')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>

        <IonFabList side="start">
          <IonFabButton color="tertiary" onClick={() => setBgColor('tertiary')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
          <IonFabButton color="primary" onClick={() => setBgColor('primary')}>
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
};
export default Tab2Form;
