import { IonList, IonItem, IonLabel } from '@ionic/react';
import { FC } from 'react';

type PetProps = {
  animalType: string;
  breed: string;
  name: string;
  age: number;
  owner: string;
};

export const Pet: FC<PetProps> = ({ animalType, breed, name, age, owner }) => (
  <IonList>
    <IonItem>
      <IonLabel>Animal: {animalType}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Breed: {breed}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Pet Name: {name}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Age: {age}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Owner: {owner}</IonLabel>
    </IonItem>
  </IonList>
);
