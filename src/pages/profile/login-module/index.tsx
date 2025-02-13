import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/features/error-fallback';
import { LoginBlock } from './login-block';
import { PromoBlock } from './promo-block';

export const LoginModule = () => (
  <>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LoginBlock />
      <PromoBlock />
    </ErrorBoundary>
  </>
);
