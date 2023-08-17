import { TorusCanvas } from '../components/TorusCanvas';
import { QrCode } from '../components/QrCode';

export default function Page() {
  return (
    <>
      <TorusCanvas />
      <div className='absolute hidden md:inline md:bottom-[48px] md:left-[48px]'>
        <QrCode />
      </div>
    </>
  );
}
