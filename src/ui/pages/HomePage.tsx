import React, { useEffect } from 'react';
import GlobalCount from 'ZustandCounter';
import { Route, Redirect } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTabs,
  IonRouterOutlet,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  useIonRouter,
} from '@ionic/react';
import { peopleOutline, ticketOutline, walletOutline, cameraOutline, colorFilterOutline, colorPaletteOutline } from 'ionicons/icons';

import Tab1 from './tabs/tab-1/Tab1';
import Tab2 from './tabs/tab-2/Tab2';
import Tab3 from './tabs/tab-3/Tab3';
import Tab4 from './tabs/tab-4/Tab4';
import { supabase } from 'apis/supabaseClient';
import { useAuthUserStore } from 'store/user';
import Button from 'antd/es/button';
import { Space, Tooltip } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const HomePage: React.FC = () => {
  const router = useIonRouter();
  const authUser = useAuthUserStore((state) => state.authUser);
  const resetAuthUser = useAuthUserStore((state) => state.resetAuthUser);

  useEffect(() => {
    if (!authUser) router.push('/login');
  }, [router, authUser]);

  const { count, increment, decrement } = GlobalCount();

  const handleLogOut = async () => {
    resetAuthUser();
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <IonPage id="main-content">
      <IonHeader>
        <IonToolbar>
          <IonButton onClick={handleLogOut} slot="end">
            Log ud
          </IonButton>

          <Space direction="vertical">
            <p>Count: {count}</p>
            <Space wrap>
              <Tooltip title={count}>
                {/* <Button type="primary" shape="circle" icon={<PlusOutlined />} /> */}
                <Button shape="circle" onClick={increment} type="primary" ghost icon={<PlusOutlined />}></Button>
              </Tooltip>
              <Tooltip title={count}>
                {/* <Button type="primary" shape="circle" icon={<PlusOutlined />} /> */}
                <Button shape="circle" onClick={decrement} type="primary" danger icon={<MinusOutlined />}></Button>
              </Tooltip>
            </Space>
          </Space>

          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              {pages.map((p, i) => {
                return <Route key={i} exact path={p.path} component={p.component} />;
              })}

              <Route exact path="/home">
                <Redirect to={pages.filter((p) => p.redirect)[0].path} />
              </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom" color={'white-background'} class={'h-[70px] border-t-[1px] border'}>
              {pages.map((p, i) => {
                return (
                  <IonTabButton key={i} tab={`tab${i}`} href={p.path}>
                    <IonIcon icon={p.icon} />
                  </IonTabButton>
                );
              })}
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;

const pages = [
  {
    name: 'photo',
    icon: cameraOutline,
    path: '/tab1',
    component: Tab1,
    redirect: true,
  },
  {
    name: 'color',
    icon: colorPaletteOutline,
    path: '/tab2',
    component: Tab2,
    redirect: false,
  },
  {
    name: 'ticket',
    icon: ticketOutline,
    path: '/tab3',
    component: Tab3,
    redirect: false,
  },
  {
    name: 'wallet',
    icon: walletOutline,
    path: '/tab4',
    component: Tab4,
    redirect: false,
  },
];

const menuItems = [{ name: 'Settings' }, { name: 'Account' }, { name: 'Questionnaire' }, { name: 'Logout' }];
