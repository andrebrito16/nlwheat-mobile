import React from 'react';

import {
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

import { useAuth } from '../../hooks/auth';

export function SignInBox(){

  const { signIn, isSigningIn } = useAuth();
  return (
    <View style={styles.container}>
      <Button title="Entrar com o Github" 
      backgroundColor={COLORS.YELLOW}
      color={COLORS.BLACK_PRIMARY}
      icon="github"
      onPress={signIn}
      isLoading={isSigningIn}
      />
    </View>
  );
}