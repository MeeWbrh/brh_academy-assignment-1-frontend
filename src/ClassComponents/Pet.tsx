import { IonList, IonItem, IonLabel } from '@ionic/react';
import { FC } from 'react';

type PetProps = {
  items: {
    animalType: string;
    breed: string;
    name: string;
    age: number;
    owner: string;
  };
};

export const Pet: FC<PetProps> = ({ items }) => (
  <IonList>
    <IonItem>
      <IonLabel>Animal: {items.animalType}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Breed: {items.breed}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Pet Name: {items.name}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Age: {items.age}</IonLabel>
    </IonItem>
    <IonItem>
      <IonLabel>Owner: {items.owner}</IonLabel>
    </IonItem>
  </IonList>
);

// type PetProps = {
//   animalType: string;
//   breed: string;
//   name: string;
//   age: number;
//   owner: string;
// };

// export const Pet: FC<PetProps> = ({ animalType, breed, name, age, owner }) => (
//   <IonList>
//     <IonItem>
//       <IonLabel>Animal: {animalType}</IonLabel>
//     </IonItem>
//     <IonItem>
//       <IonLabel>Breed: {breed}</IonLabel>
//     </IonItem>
//     <IonItem>
//       <IonLabel>Pet Name: {name}</IonLabel>
//     </IonItem>
//     <IonItem>
//       <IonLabel>Age: {age}</IonLabel>
//     </IonItem>
//     <IonItem>
//       <IonLabel>Owner: {owner}</IonLabel>
//     </IonItem>
//   </IonList>
// );
