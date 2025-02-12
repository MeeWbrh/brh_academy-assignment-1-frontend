// import { IonButton, IonContent, IonIcon, IonPopover } from '@ionic/react';
// import { Pet } from 'ClassComponents/Pet';
// import { addOutline, removeOutline } from 'ionicons/icons';
// import React from 'react';
// import GlobalCount from 'ZustandCounter';
// import './Tab3Form.css';

// const Tab3Form: React.FC = () => {
//   const { count, increment, decrement } = GlobalCount();

//   return (
//     <IonContent>
//       <div className="button-container-div">
//         <h2 className="h2Counter">Count: {count}...</h2>
//         <IonButton id="btnIncrement" onClick={increment}>
//           <IonPopover trigger="btnIncrement" triggerAction="click">
//             Count status: {count}
//           </IonPopover>
//           <IonIcon icon={addOutline}></IonIcon>
//         </IonButton>

//         <IonButton id="btnDecrement" onClick={decrement}>
//           <IonPopover trigger="btnDecrement" triggerAction="click">
//             Count status: {count}
//           </IonPopover>
//           <IonIcon icon={removeOutline}></IonIcon>
//         </IonButton>
//       </div>
//       <br />
//       <div className="showPetList">
//         <Pet animalType="Cat" breed="Bengal" name="Coco" age={0.4} owner="Lars"></Pet>
//         <br />
//         <Pet animalType="Cat" breed="Hellig Birma" name="Nuller" age={10} owner="Kurt"></Pet>
//       </div>
//     </IonContent>
//   );
// };

// export default Tab3Form;

import ListItem from 'ClassComponents/ListComponent';
import React from 'react';

const List: React.FC = () => {
  const listArray = [
    {
      id: '2',
      firstname: 'Anders',
      lastname: 'Samuelsen',
      year: 1988,
    },

    {
      id: '1',
      firstname: 'Simon',
      lastname: 'Jørgensen',
      year: 1990,
    },
  ];

  return (
    <table>
      <tr>
        <th>ID</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Year</th>
      </tr>
      {listArray.map((listArray: any) => {
        return (
          <ListItem
            key={listArray.id}
            item={{
              id: listArray.id,
              firstname: listArray.firstname,
              lastname: listArray.lastname,
              year: listArray.year,
            }}
          />
        );
      })}
    </table>
  );
};

export default List;
