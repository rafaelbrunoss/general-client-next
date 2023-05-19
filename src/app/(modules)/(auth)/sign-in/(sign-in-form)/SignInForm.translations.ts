import { II18n } from '@common/domain/models';

import { I18nService } from '@common/infrastructure/services';

const translations: II18n = {
  enUS: {
    forgotPassword: 'Forgot password',
    login: 'Login',
    rememberMe: 'Remember me',
    signUp: 'Sign Up',
    signInWithGoogle: 'Sign In with Google account',
    dontHaveAnAccount: `Don't have an account?`,
    signUpForFree: ' Sign up for free',
    or: 'or',
  },
  es: {
    forgotPassword: 'Olvide mi contraseña',
    login: 'Iniciar sesión',
    rememberMe: 'Acuérdate de mí',
    signUp: 'Inscribirse',
    signInWithGoogle: 'Iniciar sesión con la cuenta de Google',
    dontHaveAnAccount: '¿No tienes una cuenta?',
    signUpForFree: ' Registrate gratis',
    or: 'o',
  },
  ptBR: {
    forgotPassword: 'Esqueci minha senha',
    login: 'Entrar',
    rememberMe: 'Lembrar dos dados',
    signUp: 'Cadastrar',
    signInWithGoogle: 'Entrar com a conta Google',
    dontHaveAnAccount: 'Não tem uma conta?',
    signUpForFree: ' Cadastre-se gratuitamente',
    or: 'ou',
  },
};

export const translate = (key: string, args?: string[]): string =>
  new I18nService().translate(translations, key, args);
