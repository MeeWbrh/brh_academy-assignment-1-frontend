import { IonList, IonItem, IonLabel } from '@ionic/react';

type PetProps = {
  animalType: string;
  breed: string;
  name: string;
  age: number;
  owner: string;
};

export function Pet({ animalType, breed, name, age, owner }: PetProps) {
  return (
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
}
