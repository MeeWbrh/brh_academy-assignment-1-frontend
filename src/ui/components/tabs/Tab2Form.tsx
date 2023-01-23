import { useState, useCallback, useEffect, useRef, Ref, MutableRefObject } from 'react';
import { Carousel, Button, Space } from 'antd';
import React from 'react';
import { IonContent, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { add, colorFill } from 'ionicons/icons';
import './Tab2Form.css';
import { CarouselRef } from 'antd/es/carousel';

const Tab2Form: React.FC = () => {
  const [bgColor, setBgColor] = useState('light');
  console.log(bgColor);
  const refs = useRef<CarouselRef>(null);
  // const refs: any = useRef();
  const revertClick = useCallback(() => {
    setBgColor(bgColor);
  }, [setBgColor]);
  // useEffect(() => {
  //   console.log(caruselNr);
  // }, []);
  // const [caruselNr, setcaruselNr] = useState(7);

  return (
    <IonContent color={bgColor}>
      <Carousel className="tab2Carousel" draggable ref={refs} fade dots>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/f4f5f8.png" alt="lightImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/EB3F3F.png" alt="dangerImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/222428.png" alt="darkImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/EDD036.png" alt="warningImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/3DC2FF.png" alt="secondaryImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/6DD63C.png" alt="successImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/92949c.png" alt="mediumImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/5260ff.png" alt="tertiaryImg" />
        </div>
        <div>
          <img src="https://convertingcolors.com/color-palette-image/view/3880FF.png" alt="primaryImg" />
        </div>
      </Carousel>

      <IonFab vertical="center" horizontal="center" slot="fixed" className="colorFabBtn">
        <IonFabButton
          color="dark"
          onClick={() => {
            refs.current?.goTo(0);
            revertClick();
          }}
        >
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>

        <IonFabList side="top">
          <IonFabButton
            color="danger"
            onClick={() => {
              refs.current?.goTo(1);
              setBgColor('danger');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
          <IonFabButton
            color="dark"
            onClick={() => {
              refs.current?.goTo(2);
              setBgColor('dark');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>

        <IonFabList side="end">
          <IonFabButton
            color="warning"
            onClick={() => {
              refs.current?.goTo(3);
              setBgColor('warning');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
          <IonFabButton
            color="secondary"
            onClick={() => {
              refs.current?.goTo(4);
              setBgColor('secondary');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>

        <IonFabList side="bottom">
          <IonFabButton
            color="success"
            onClick={() => {
              refs.current?.goTo(5);
              setBgColor('success');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
          <IonFabButton
            color="medium"
            onClick={() => {
              refs.current?.goTo(6);
              setBgColor('medium');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>

        <IonFabList side="start">
          <IonFabButton
            color="tertiary"
            onClick={() => {
              refs.current?.goTo(7);
              setBgColor('tertiary');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>

          <IonFabButton
            color="primary"
            onClick={() => {
              refs.current?.goTo(8);
              setBgColor('primary');
            }}
          >
            <IonIcon icon={colorFill}></IonIcon>
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonContent>
  );
};
export default Tab2Form;
