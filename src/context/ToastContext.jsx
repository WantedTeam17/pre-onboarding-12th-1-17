import { ToastBar, Toaster } from 'react-hot-toast';
import { colors } from '../constants/color';

const ToasterContext = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          fontSize: '16px',
          padding: '12px 16px',
          color: '#3F2E3E',
          backgroundColor: colors.primary,
        },
        success: {
          iconTheme: {
            primary: '#5cb27a',
            secondary: 'white',
          },
        },
      }}
    >
      {t => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            animation: t.visible ? 'custom-enter 1s ease' : 'custom-exit 1s ease',
          }}
        />
      )}
    </Toaster>
  );
};

export default ToasterContext;
